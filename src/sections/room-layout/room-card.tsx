import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { Person, Lock, PersonAdd } from "@mui/icons-material";
import { Room } from "@/src/models/types";

interface RoomCardProps {
  room: Room;
  onClick: (room: Room) => void;
}

const STATUS_STYLE = {
  empty: { bg: "#3F7F46", icon: "#FFFFFF" },
  occupied: { bg: "#3B4FA3", icon: "#FFFFFF" },
  maintenance: { bg: "#B4B4B4", icon: "#FFFFFF" },
};

const BASE_COLOR = {
  border: "#E3E6EA",
  textPrimary: "#263238",
  unpaid: "#C62828",
};

export default function RoomCard({ room, onClick }: RoomCardProps) {
  const style = STATUS_STYLE[room.status];

  const isUnpaid = !room.paid && room.status === "occupied";
  const showLock = room.status === "maintenance";
  const showNextTenant = room.status === "occupied" && room.hasNextTenant;

  const showUser =
    room.status === "occupied" ||
    (room.status === "empty" && !!room.moveOutDate);

  let footerText = "";
  if (room.status === "occupied" && room.moveOutDate) {
    footerText = `สิ้นสุดการเช่าวันที่ ${room.moveOutDate}`;
  }
  if (room.status === "empty" && room.moveOutDate) {
    footerText = `ว่างตั้งแต่วันที่ ${room.moveOutDate}`;
  }

  return (
    <Box
      onClick={() => !showLock && onClick(room)}
      sx={{
        width: "100%",
        cursor: showLock ? "not-allowed" : "pointer",
        transition: "0.25s ease",
        "&:hover": {
          transform: showLock ? "none" : "translateY(-3px)",
        },
      }}
    >
      {/* ชื่อห้อง */}
      <Typography
        align="center"
        sx={{
          fontSize: { xs: "0.85rem", sm: "1rem" },
          fontWeight: 600,
          mb: 0.5,
          color: BASE_COLOR.textPrimary,
        }}
      >
        {room.name}
      </Typography>

      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: { xs: 120, sm: 150, md: 180 },
          mx: "auto",
          aspectRatio: "1 / 1",
          borderRadius: "14px",
          backgroundColor: style.bg,
          border: `1px solid ${BASE_COLOR.border}`,
          position: "relative",
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        }}
      >
        {/* ค้างชำระ */}
        {isUnpaid && (
          <Box
            sx={{
              position: "absolute",
              top: 6,
              left: 6,
              px: 1,
              py: 0.3,
              fontSize: "0.7rem",
              fontWeight: 700,
              borderRadius: "6px",
              bgcolor: BASE_COLOR.unpaid,
              color: "#fff",
              zIndex: 2,
            }}
          >
            ค้างชำระ
          </Box>
        )}

        {/* ผู้เช่าถัดไป */}
        {showNextTenant && (
          <Box sx={{ position: "absolute", top: 6, right: 6 }}>
            <PersonAdd
              sx={{
                fontSize: { xs: 20, sm: 24 },
                color: style.icon,
              }}
            />
          </Box>
        )}

        {/* icon คน */}
        {showUser && (
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <Person
              sx={{
                fontSize: { xs: 70, sm: 90, md: 110 },
                color: style.icon,
              }}
            />
          </Box>
        )}

        {/* icon lock */}
        {showLock && (
          <Box sx={{ position: "absolute", bottom: 6, right: 6 }}>
            <Lock sx={{ fontSize: 18, color: style.icon }} />
          </Box>
        )}

        {/* Footer */}
        {footerText && (
          <Box
            sx={{
              position: "absolute",
              bottom: 6,
              left: 6,
              right: 6,
              backgroundColor: "rgba(0,0,0,0.55)",
              borderRadius: "6px",
              px: 0.8,
              py: 0.4,
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.7rem",
                color: "#FFFFFF",
                fontWeight: 600,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {footerText}
            </Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
}
