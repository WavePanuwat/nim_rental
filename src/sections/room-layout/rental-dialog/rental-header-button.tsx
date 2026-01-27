"use client";

import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import CancelIcon from "@mui/icons-material/Cancel";
import PrintIcon from "@mui/icons-material/Print";

const RentalHeaderButton: React.FC = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems={{ xs: "start", md: "center" }}
      spacing={2}
      sx={{ mb: 3 }}
    >
      {/* ส่วนหัวข้อหน้า */}
      <Box>
        <Typography variant="h5" fontWeight="bold" color="text.primary">
          รายละเอียดการเช่า
        </Typography>
        <Typography variant="body2" color="text.secondary">
          จัดการข้อมูลสัญญาและการอนุมัติ
        </Typography>
      </Box>

      {/* ส่วนปุ่ม Action */}
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {/* 1. ยืนยัน */}
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<DoneIcon />}
        >
          ยืนยัน
        </Button>

        {/* 2. อนุมัติ */}
        <Button
          variant="contained"
          color="primary"
          startIcon={<CheckCircleIcon />}
        >
          อนุมัติ
        </Button>

        {/* 3. ปิดข้อมูลการเช่า */}
        <Button
          variant="contained"
          color="primary"
          startIcon={<CloseIcon />}
        >
          ปิดข้อมูลการเช่า
        </Button>

        {/* 4. ยกเลิก */}
        <Button 
          variant="contained" 
          color="error" 
          startIcon={<CancelIcon />}
        >
          ยกเลิก
        </Button>

        {/* 5. พิมพ์สัญญาเช่า */}
        <Button
          variant="outlined"
          startIcon={<PrintIcon />}
          color="inherit"
          sx={{ bgcolor: "white", borderColor: "rgba(0, 0, 0, 0.12)" }}
        >
          พิมพ์สัญญาเช่า
        </Button>
      </Stack>
    </Stack>
  );
};

export default RentalHeaderButton;