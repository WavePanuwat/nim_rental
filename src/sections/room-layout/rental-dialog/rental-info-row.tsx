"use client";

import React from "react";
import { Paper, Box, Button, Typography, Stack, Chip, ChipProps } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ArticleIcon from "@mui/icons-material/Article";
import {
  ROOM_RENTAL_LEFT,
  ROOM_RENTAL_RIGHT,
} from "@/src/data/room-rental/room-rental.mock";

// ----------------------------------------------------------------------
// ปรับ Logic สีตาม 4 สถานะที่ระบุ
const getStatusColor = (value: string | number | null | undefined): ChipProps['color'] => {
  const status = String(value).toLowerCase();

  // 1. อนุมัติ (Approved) -> สีเขียว
  if (status.includes("approve") || status.includes("อนุมัติ")) {
    return "success";
  }

  // 2. ยืนยัน (Confirm) -> สีฟ้า (Primary)
  if (status.includes("confirm") || status.includes("ยืนยัน")) {
    return "primary"; 
  }

  // 3. ยกเลิก (Canceled) -> สีแดง
  if (status.includes("cancel") || status.includes("ยกเลิก")) {
    return "error";
  }

  // 4. ปิดสัญญา (Closed) -> สีเทา (Default)
  if (status.includes("close") || status.includes("ปิดสัญญา")) {
    return "default";
  }

  // กรณีอื่นๆ (Fallback)
  return "default";
};
// ----------------------------------------------------------------------

interface InfoLineProps {
  label: string;
  value?: string | number | null;
  isStatus?: boolean;
}

const InfoLine: React.FC<InfoLineProps> = ({ label, value, isStatus }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px dashed",
      borderColor: "divider",
      pb: 0.5,           // Reduced padding
      minHeight: 32,     // Reduced height
    }}
  >
    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
      {label}
    </Typography>
    
    {isStatus ? (
      <Chip 
        label={value ?? "-"} 
        color={getStatusColor(value)} 
        size="small" 
        variant="filled" 
        sx={{ 
            fontWeight: 'bold', 
            height: 24, 
            fontSize: '0.75rem' 
        }}
      />
    ) : (
      <Typography variant="body2" fontWeight="medium" color="text.primary" sx={{ fontSize: '0.875rem' }}>
        {value ?? "-"}
      </Typography>
    )}
  </Box>
);

const RentalInfoRow: React.FC = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          px: 3,
          py: 1.5,
          bgcolor: "grey.50",
          borderBottom: "1px solid",
          borderColor: "divider",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <ArticleIcon color="primary" />
          <Typography variant="subtitle1" fontWeight="bold">
            ข้อมูลสัญญาเช่า (Contract Info)
          </Typography>
        </Stack>

        <Button
          size="small"
          variant="outlined"
          startIcon={<EditIcon />}
          sx={{ borderRadius: 2, bgcolor: "white", height: 32 }}
        >
          แก้ไขข้อมูล
        </Button>
      </Box>

      {/* Body */}
      <Box sx={{ p: 3 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
            columnGap: { md: 6 },
          }}
        >
          {/* Column ซ้าย */}
          <Box>
            <Stack spacing={1}>
              {ROOM_RENTAL_LEFT.map((item, index) => (
                <InfoLine 
                    key={index} 
                    label={item.label} 
                    value={item.value as string | number | null | undefined} 
                />
              ))}
            </Stack>
          </Box>

          {/* Column ขวา */}
          <Box>
            <Stack spacing={1}>
              {ROOM_RENTAL_RIGHT.map((item, index) => {
                // เช็คว่าเป็นฟิลด์ "สถานะ" หรือไม่
                const isStatusField = item.label.includes("สถานะ") || item.label.includes("Status");
                return (
                  <InfoLine 
                    key={index} 
                    label={item.label} 
                    value={item.value as string | number | null | undefined}
                    isStatus={isStatusField} 
                  />
                );
              })}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default RentalInfoRow;