import React from "react";
import { Paper, Button, Box } from "@mui/material";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import BoltIcon from "@mui/icons-material/Bolt";

interface MeterToggleProps {
  value: "water" | "electric";
  onChange: (type: "water" | "electric") => void;
}

export default function MeterToggle({ value, onChange }: MeterToggleProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        position: "relative",
        p: 0.7,
        mb: 3,
        borderRadius: 50,
        display: "flex",

        bgcolor: "#fff",
        backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #F1F2F4 100%)",
        boxShadow: `
          0 4px 12px rgba(0,0,0,0.08),
          inset 0 1px 0 rgba(255,255,255,0.8)
        `,
        border: "1px solid #E0E0E0",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          zIndex: 1,
          top: 5,
          bottom: 5,
          left: 5,
          width: "calc(50% - 10px)",
          borderRadius: 50,

          transition:
            "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s",
          transform:
            value === "electric" ? "translateX(100%)" : "translateX(0%)",

          bgcolor: value === "water" ? "#4285F4" : "#D32F2F",

          boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
        }}
      />

      {/* ปุ่มจดมิเตอร์น้ำ */}
      <Button
        startIcon={<WaterDropIcon />}
        onClick={() => onChange("water")}
        disableRipple
        sx={{
          flex: 1,
          zIndex: 2,
          py: 1.2,
          fontSize: "0.9rem",
          fontWeight: 500,
          borderRadius: 50,
          textTransform: "none",
          transition: "color 0.3s",

          color: value === "water" ? "white" : "#4285F4",

          "&:hover": { bgcolor: "transparent" },
        }}
      >
        จดมิเตอร์น้ำ
      </Button>

      {/* ปุ่มจดมิเตอร์ไฟฟ้า */}
      <Button
        startIcon={<BoltIcon />}
        onClick={() => onChange("electric")}
        disableRipple
        sx={{
          flex: 1,
          zIndex: 2,
          py: 1.2,
          fontSize: "0.9rem",
          fontWeight: 500,
          borderRadius: 50,
          textTransform: "none",
          transition: "color 0.3s",

          // สีตัวหนังสือ: ถ้าเลือกอยู่เป็นสีขาว, ถ้าไม่เลือกเป็นสีแดงเข้ม
          color: value === "electric" ? "white" : "#C62828",

          "&:hover": { bgcolor: "transparent" },
        }}
      >
        จดมิเตอร์ไฟฟ้า
      </Button>
    </Paper>
  );
}
