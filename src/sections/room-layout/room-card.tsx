import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { Person, Lock, PersonAdd } from "@mui/icons-material";
import { Room } from "@/src/models/types";

// 1. เพิ่ม onClick เข้าไปใน interface
interface RoomCardProps {
  room: Room;
  onClick: (room: Room) => void;
}

const STATUS_STYLE = {
  empty: {
    bg: "#3F7F46",
    icon: "#FFFFFF",
  },
  occupied: {
    bg: "#3B4FA3",
    icon: "#FFFFFF",
  },
  maintenance: {
    bg: "#B4B4B4",
    icon: "#FFFFFF",
  },
};

const BASE_COLOR = {
  border: "#E3E6EA",
  textPrimary: "#263238",
  unpaid: "#C62828",
};

// 2. รับ prop onClick เข้ามาใช้งาน
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
    footerText = `สิ้นสุดการเช่า ${room.moveOutDate}`;
  }
  if (room.status === "empty" && room.moveOutDate) {
    footerText = `ว่างตั้งแต่ ${room.moveOutDate}`;
  }

  return (
    <Box
      // 3. ผูก Event Click ส่งข้อมูลห้องกลับไป
      onClick={() => onClick(room)}
      sx={{
        width: "100%",
        cursor: "pointer", // เปลี่ยนเคอร์เซอร์เป็นรูปมือ
        transition: "0.25s ease",
        "&:hover": {
          transform: showLock ? "none" : "translateY(-4px)",
        },
      }}
    >
      {/* ชื่อห้อง */}
      <Typography
        align="center"
        sx={{
          fontSize: "1rem",
          fontWeight: 600,
          mb: 0.8,
          color: BASE_COLOR.textPrimary,
        }}
      >
        {room.name}
      </Typography>

      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 180,
          mx: "auto",
          aspectRatio: "1 / 1",
          borderRadius: "14px",
          backgroundColor: style.bg,
          border: `1px solid ${BASE_COLOR.border}`,
          position: "relative",
          cursor: showLock ? "not-allowed" : "pointer",
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
              px: 1.8,
              py: 0.5,
              fontSize: "0.8rem",
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
          <Box sx={{ position: "absolute", top: 10, right: 10 }}>
            <PersonAdd sx={{ fontSize: 28, color: style.icon }} />
          </Box>
        )}

        {showUser && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 100,
              height: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <Person sx={{ fontSize: 120, color: style.icon }} />
          </Box>
        )}

        {/* icon lock */}
        {showLock && (
          <Box sx={{ position: "absolute", bottom: 10, right: 10 }}>
            <Lock sx={{ fontSize: 18, color: style.icon }} />
          </Box>
        )}

        {/* Footer */}
        {footerText && (
          <Box
            sx={{
              position: "absolute",
              bottom: 8,
              left: "50%",
              transform: "translateX(-50%)",
              width: 160,
              backgroundColor: "rgba(0,0,0,0.55)",
              borderRadius: "6px",
              px: 1,
              py: 0.6,
              backdropFilter: "blur(3px)",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.8rem",
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
