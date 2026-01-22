"use client";

import React, { useState } from "react";
import { Box, Container, IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import Header from "@/src/components/header";
import Menu from "@/src/components/menu";

import { MOCK_METER_DATA } from "@/src/data/mock-data";
import MeterHeader from "@/src/sections/meter/meter-filter";
import MeterToggle from "@/src/sections/meter/meter-toggle";
import MeterActions from "@/src/sections/meter/meter-actions";
import MeterTable from "@/src/sections/meter/meter-table";

export default function MeterReadingView() {
  const [meterType, setMeterType] = useState<"water" | "electric">("water");

  return (
    <>
      <Box sx={{ position: "sticky", top: 0, zIndex: 1100 }}>
        <Header isDashboard />
        <Menu />
      </Box>

      <Box sx={{ bgcolor: "#F9FAFB", minHeight: "100vh", pb: 5 }}>
        <Container
          maxWidth={false}
          sx={{
            mt: 4,
            maxWidth: "1200px",
          }}
        >
          <MeterHeader />
          <MeterToggle value={meterType} onChange={setMeterType} />
          <MeterActions />
          <MeterTable data={MOCK_METER_DATA} meterType={meterType} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              mt: 3,
              gap: 1.5, // เพิ่มช่องว่างให้ดูไม่อึดอัด
            }}
          >
            {/* ปุ่มย้อนกลับ */}
            <IconButton
              size="small"
              sx={{
                bgcolor: "#F2F2F2", // สีเทาอ่อนแบบนุ่มนวล
                color: "#637381",
                borderRadius: "8px", // โค้งมนแบบทันสมัย
                width: 34,
                height: 34,
                transition: "0.2s",
                "&:hover": {
                  bgcolor: "#E0E0E0",
                  transform: "translateX(-2px)", // มีลูกเล่นขยับเล็กน้อยตอน hover
                },
              }}
            >
              <NavigateBeforeIcon fontSize="small" />
            </IconButton>

            {/* เลขหน้าปัจจุบัน (Active) */}
            <Box
              sx={{
                minWidth: 34,
                height: 34,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "white",
                color: "#1976D2", // สีน้ำเงินหลัก
                border: "1px solid #E0E0E0",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "0.875rem",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.04)", // เพิ่มเงาจางๆ ให้ดูมีมิติ
              }}
            >
              1
            </Box>

            {/* เลขหน้าอื่นๆ (Inactive) */}
            <Box
              sx={{
                minWidth: 34,
                height: 34,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#637381",
                fontSize: "0.875rem",
                fontWeight: 500,
                cursor: "pointer",
                borderRadius: "8px",
                transition: "0.2s",
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              11
            </Box>

            {/* ปุ่มถัดไป */}
            <IconButton
              size="small"
              sx={{
                bgcolor: "#F2F2F2",
                color: "#637381",
                borderRadius: "8px",
                width: 34,
                height: 34,
                transition: "0.2s",
                "&:hover": {
                  bgcolor: "#E0E0E0",
                  transform: "translateX(2px)",
                },
              }}
            >
              <NavigateNextIcon fontSize="small" />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </>
  );
}
