"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Box,
  Container,
  Paper,
  Typography,
  Divider,
} from "@mui/material";

import Header from "@/src/components/header";
import Menu from "@/src/components/menu";

import {
  HomeWork,
  CheckCircle,
  MeetingRoom,
  MoneyOff,
} from "@mui/icons-material";

import RoomCard from "../room-card";
import FilterSection from "../search-filter";
import StatCard from "../stat-card";
import RoomDetailModal from "@/src/sections/room-layout/view/room-detail-model";
import RentInformationDialog from "@/src/sections/room-layout/rent-add-form";

import {
  getBuildingById,
  getRoomsByBuildingId,
  getRentByRoomId,
} from "@/src/data/room-data/registry";

import { Room, RentItem } from "@/src/models/types";

export default function RoomLayoutView() {
  const searchParams = useSearchParams();
  const buildingId = Number(searchParams.get("id") ?? 1);

  /* =========================
   * ข้อมูลจาก registry
   * ========================= */
  const building = getBuildingById(buildingId);
  const rooms = getRoomsByBuildingId(buildingId);

  /* =========================
   * Stats
   * ========================= */
  const stats = {
    total: rooms.length,
    empty: rooms.filter((r) => r.status === "empty").length,
    occupied: rooms.filter((r) => r.status === "occupied").length,
    unpaid: rooms.filter(
      (r) => r.status === "occupied" && !r.paid
    ).length,
  };

  /* =========================
   * State
   * ========================= */
  const [openModal, setOpenModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  // mock เพิ่มสัญญา
  const [tempRents, setTempRents] = useState<RentItem[]>([]);
  const [openRentDialog, setOpenRentDialog] = useState(false);

  /* =========================
   * derived rentList
   * ========================= */
  const rentList: RentItem[] = selectedRoom
    ? [
        ...getRentByRoomId(buildingId, selectedRoom.id),
        ...tempRents,
      ]
    : [];

  /* =========================
   * Handlers
   * ========================= */
  const handleCardClick = (room: Room) => {
    if (room.status === "maintenance") return;

    setSelectedRoom(room);
    setTempRents([]);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setTimeout(() => setSelectedRoom(null), 300);
  };

  return (
    <>
      {/* ===== Header ===== */}
      <Box sx={{ position: "sticky", top: 0, zIndex: 1100 }}>
        <Header isDashboard />
        <Menu />
      </Box>

      {/* ===== Content ===== */}
      <Box sx={{ minHeight: "100vh", bgcolor: "#F9FAFB", py: 5 }}>
        <Container maxWidth="xl">
          {/* ===== Stat ===== */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "repeat(4, 1fr)",
              },
              gap: 3,
              mb: 4,
            }}
          >
            <StatCard
              label="ห้องทั้งหมด"
              value={stats.total}
              icon={<HomeWork />}
              color="#6366F1"
            />
            <StatCard
              label="ห้องว่าง"
              value={stats.empty}
              icon={<CheckCircle />}
              color="#16A34A"
            />
            <StatCard
              label="ไม่ว่าง"
              value={stats.occupied}
              icon={<MeetingRoom />}
              color="#2563EB"
            />
            <StatCard
              label="ค้างชำระ"
              value={stats.unpaid}
              icon={<MoneyOff />}
              color="#DC2626"
            />
          </Box>

          <FilterSection />

          {/* ===== Room List ===== */}
          <Paper
            elevation={0}
            sx={{
              borderRadius: 3,
              border: "1px solid #E5E7EB",
              mt: 3,
            }}
          >
            <Box sx={{ px: 3, py: 2.5, bgcolor: "#F3F4F6" }}>
              <Typography fontSize={16} fontWeight={600}>
                ข้อมูลห้องพัก {building?.name}
              </Typography>
            </Box>

            <Divider />

            <Box sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(2, 1fr)",
                    sm: "repeat(4, 1fr)",
                    md: "repeat(5, 1fr)", // 
                  },
                  gap: 3,
                  justifyItems: "center",
                }}
              >
                {rooms.map((room) => (
                  <RoomCard
                    key={room.id}
                    room={room}
                    onClick={handleCardClick}
                  />
                ))}
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* ===== Room Detail Modal ===== */}
      <RoomDetailModal
        open={openModal}
        onClose={handleCloseModal}
        room={selectedRoom}
        rentList={rentList}
        onAddRent={() => setOpenRentDialog(true)}
        onDeleteRent={(id) =>
          setTempRents((prev) => prev.filter((r) => r.id !== id))
        }
      />

      {/* ===== Add Rent Dialog ===== */}
      <RentInformationDialog
        open={openRentDialog}
        room={
          selectedRoom
            ? {
                roomNo: selectedRoom.name,
                buildingName: building?.name ?? "",
                address: selectedRoom.address ?? "",
              }
            : null
        }
        onClose={() => setOpenRentDialog(false)}
        onSubmit={(data) => {
          setTempRents((prev) => [...prev, data]);
          setOpenRentDialog(false);
        }}
      />
    </>
  );
}
