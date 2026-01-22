import React from "react";
import { Box, Button, Typography, Chip } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";

export default function MeterActions() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 3,
      }}
    >
      <Box sx={{ display: "flex", gap: 1.5 }}>
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          sx={{
            height: 40,
            px: 3,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,

            bgcolor: "#1976D2",
            color: "white",
            boxShadow: "0 4px 12px rgba(25, 118, 210, 0.25)",

            "&:hover": {
              bgcolor: "#1565C0",
              boxShadow: "0 6px 16px rgba(25, 118, 210, 0.35)",
            },
          }}
        >
          บันทึก
        </Button>

        <Button
          variant="contained"
          startIcon={<CheckCircleIcon />}
          sx={{
            height: 40,
            px: 3,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
            bgcolor: "#2E7D32",
            boxShadow: "0 4px 12px rgba(46, 125, 50, 0.25)",
            "&:hover": {
              bgcolor: "#1B5E20",
              boxShadow: "0 6px 16px rgba(46, 125, 50, 0.35)",
            },
          }}
        >
          ยืนยัน
        </Button>
      </Box>

      {/* --- ส่วนสถานะ (Right) --- */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Typography variant="body2" color="text.secondary" fontWeight={500}>
          สถานะ :
        </Typography>

        <Chip
          icon={
            <CircleIcon
              sx={{ fontSize: "10px !important", color: "#1B5E20" }}
            />
          }
          label="CONFIRM"
          sx={{
            height: 32,
            px: 0.5,
            bgcolor: "#E8F5E9",
            color: "#1B5E20",
            fontWeight: 700,
            fontSize: "0.85rem",
            borderRadius: 2,
            border: "1px solid #C8E6C9",
          }}
        />
      </Box>
    </Box>
  );
}
