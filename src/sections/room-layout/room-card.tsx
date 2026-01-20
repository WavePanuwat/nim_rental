import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { Person, Lock, PersonAdd } from "@mui/icons-material";
import { Room } from "@/src/models/types";

interface RoomCardProps {
  room: Room;
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
  textSecondary: "#607D8B",
  unpaid: "#C62828",
};

export default function RoomCard({ room }: RoomCardProps) {
  let showLock = false;
  let showUser = false;
  let showNextTenant = false;
  let footerText = "";
  let isUnpaid = !room.paid && room.status === "occupied";

  const style = STATUS_STYLE[room.status];

  if (room.status === "maintenance") {
    showLock = true;
  } else if (room.status === "occupied") {
    showUser = true;
    if (room.moveOutDate) footerText = `สิ้นสุดการเช่า ${room.moveOutDate}`;
    if (room.hasNextTenant) showNextTenant = true;
  } else if (room.status === "empty" && room.moveOutDate) {
    showUser = true;
    footerText = `ว่างตั้งแต่ ${room.moveOutDate}`;
  }

  return (
    <Box
      sx={{
        width: "100%",
        transition: "0.25s ease",
        "&:hover": {
          transform: showLock ? "none" : "translateY(-4px)",
        },
      }}
    >
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: showLock ? "not-allowed" : "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        }}
      >
        {isUnpaid && (
          <Box
            sx={{
              position: "absolute",
              top: 5,
              left: 5,
              px: 1.6,
              py: 0.6,
              fontSize: "0.7rem",
              fontWeight: 700,
              borderRadius: "6px",
              bgcolor: BASE_COLOR.unpaid,
              color: "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
              zIndex: 2,
            }}
          >
            ค้างชำระ
          </Box>
        )}

        {showNextTenant && (
          <Box sx={{ position: "absolute", top: 10, right: 10 }}>
            <PersonAdd sx={{ fontSize: 30, color: style.icon }} />
          </Box>
        )}

        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {showUser && (
            <Person
              sx={{
                fontSize: 100,
                color: style.icon,
              }}
            />
          )}
        </Box>

        {showLock && (
          <Box sx={{ position: "absolute", bottom: 10, right: 10 }}>
            <Lock sx={{ fontSize: 18, color: style.icon }} />
          </Box>
        )}

        {footerText && (
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "6px",
              py: 0.8,
              px: 0.6,
              mx: 1,
              mb: 1.2,
              textAlign: "center",
              backdropFilter: "blur(3px)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
              display: "inline-block",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.75rem",
                color: "#FFFFFF",
                fontWeight: 600,
                letterSpacing: "0.3px",
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
