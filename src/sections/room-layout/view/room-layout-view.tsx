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
import Grid from "@mui/material/Grid";

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
import RentInformationDialog from "@/src/sections/room-layout/rent-info-dialog";

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
   * ดึงข้อมูลจาก registry
   * ========================= */
  const building = getBuildingById(buildingId);
  const rooms = getRoomsByBuildingId(buildingId);

  /* =========================
   * คำนวณสถิติ
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
   * Modal State
   * ========================= */
  const [openModal, setOpenModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const [openRentDialog, setOpenRentDialog] = useState(false);

  /* =========================
   * derived state: rentList
   * (ไม่ใช้ useEffect)
   * ========================= */
  const rentList: RentItem[] = selectedRoom
    ? getRentByRoomId(buildingId, selectedRoom.id)
    : [];

  /* =========================
   * Handlers
   * ========================= */
  const handleCardClick = (room: Room) => {
    if (room.status === "maintenance") return;
    setSelectedRoom(room);
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
      <Box sx={{ minHeight: "100vh", bgcolor: "#F9FAFB", py: 5, px: 25 }}>
        <Container maxWidth="xl">
          {/* ===== Stat ===== */}
          <Grid container spacing={3} mb={4}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <StatCard
                label="ห้องทั้งหมด"
                value={stats.total}
                icon={<HomeWork />}
                color="#6366F1"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <StatCard
                label="ห้องว่าง"
                value={stats.empty}
                icon={<CheckCircle />}
                color="#16A34A"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <StatCard
                label="ไม่ว่าง"
                value={stats.occupied}
                icon={<MeetingRoom />}
                color="#2563EB"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <StatCard
                label="ค้างชำระ"
                value={stats.unpaid}
                icon={<MoneyOff />}
                color="#DC2626"
              />
            </Grid>
          </Grid>

          {/* ===== Filter ===== */}
          <FilterSection />

          {/* ===== Room List ===== */}
          <Paper
            elevation={0}
            sx={{
              borderRadius: 3,
              border: "1px solid #E5E7EB",
              backgroundColor: "#FFFFFF",
              overflow: "hidden",
            }}
          >
            <Box sx={{ px: 3, py: 2.5, bgcolor: "#F3F4F6" }}>
              <Typography fontSize={16} fontWeight={600}>
                ข้อมูลห้องพัก {building?.name}
              </Typography>
            </Box>

            <Divider />

            <Box sx={{ p: 3 }}>
              <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 10 }}>
                {rooms.map((room) => (
                  <Grid key={room.id} size={{ xs: 2, sm: 2, md: 2 }}>
                    <RoomCard room={room} onClick={handleCardClick} />
                  </Grid>
                ))}

                {rooms.length === 0 && (
                  <Grid size={12}>
                    <Typography align="center" color="text.secondary">
                      ไม่พบข้อมูลห้องพักในตึกนี้ (ID: {buildingId})
                    </Typography>
                  </Grid>
                )}
              </Grid>
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
        onDeleteRent={() => {}}
      />

      {/* ===== Add Rent Dialog ===== */}
      <RentInformationDialog
        open={openRentDialog}
        onClose={() => setOpenRentDialog(false)}
        onSubmit={() => {
          // mock only
          setOpenRentDialog(false);
        }}
      />
    </>
  );
}
