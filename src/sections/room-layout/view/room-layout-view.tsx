"use client";

import React, { useState } from "react"; // 1. เพิ่ม useState
import { useSearchParams } from "next/navigation";
import { Box, Container, Paper, Typography, Divider } from "@mui/material";
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
import RoomDetailModal from "./room-detail-model"; // 2. Import Modal ที่สร้างไว้

import { MOCK_ROOMS, calculateBuildingStats } from "@/src/data/mock-data";
import { Room } from "@/src/models/types"; // 3. Import Type Room

export default function RoomLayoutView() {
  const searchParams = useSearchParams();
  const buildingId = Number(searchParams.get("id") ?? 1);

  const stats = calculateBuildingStats(buildingId, MOCK_ROOMS);
  const displayRooms = MOCK_ROOMS.filter((r) => r.buildingId === buildingId);

  // --- 4. เพิ่ม State สำหรับจัดการ Modal ---
  const [openModal, setOpenModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  // ฟังก์ชันเปิด
  const handleCardClick = (room: Room) => {
    // ถ้าห้องสถานะ maintenance (ปิดปรับปรุง) ไม่ต้องเปิด Modal
    if (room.status === "maintenance") return;

    setSelectedRoom(room);
    setOpenModal(true);
  };

  // ฟังก์ชันปิด
  const handleCloseModal = () => {
    setOpenModal(false);
    setTimeout(() => setSelectedRoom(null), 300);
  };
  // ----------------------------------------

  return (
    <>
      <Box sx={{ position: "sticky", top: 0, zIndex: 1100 }}>
        <Header isDashboard />
        <Menu />
      </Box>

      <Box sx={{ minHeight: "100vh", bgcolor: "#F9FAFB", py: 5, px: 25 }}>
        <Container maxWidth="xl">
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

          <FilterSection />

          <Paper
            elevation={0}
            sx={{
              borderRadius: 3,
              border: "1px solid #E5E7EB",
              backgroundColor: "#FFFFFF",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                px: 3,
                py: 2.5,
                backgroundColor: "#F3F4F6",
              }}
            >
              <Typography fontSize={16} fontWeight={600} color="#111827">
                ข้อมูลห้องพัก
              </Typography>
            </Box>

            <Divider />

            <Box sx={{ p: 3 }}>
              <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 10 }}>
                {displayRooms.map((room) => (
                  <Grid key={room.id} size={{ xs: 2, sm: 2, md: 2 }}>
                    {/* 5. ส่งฟังก์ชัน handleCardClick เข้าไป */}
                    <RoomCard room={room} onClick={handleCardClick} />
                  </Grid>
                ))}

                {displayRooms.length === 0 && (
                  <Grid size={12}>
                    <Typography
                      align="center"
                      color="text.secondary"
                      fontSize={14}
                    >
                      ไม่พบข้อมูลห้องพักในตึกนี้ (ID: {buildingId})
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* 6. วาง Component Modal ไว้ตรงนี้ */}
      <RoomDetailModal
        open={openModal}
        onClose={handleCloseModal}
        room={selectedRoom}
      />
    </>
  );
}
