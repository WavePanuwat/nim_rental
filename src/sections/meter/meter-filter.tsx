import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  InputAdornment,
  Stack,
  Avatar,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

// Icons
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SpeedIcon from "@mui/icons-material/Speed"; // ไอคอนเกจวัด (สื่อถึงมิเตอร์)
// หรือถ้าอยากได้ไอคอนน้ำ/ไฟ สามารถเปลี่ยนเป็น WaterDrop หรือ ElectricBolt ได้ครับ

// Date handling
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import "dayjs/locale/th";

export default function MeterRecordingHeader() {
  const [meterDate, setMeterDate] = useState<dayjs.Dayjs | null>(dayjs());
  const [isOpen, setIsOpen] = useState(false);

  // สีหลัก (ฟ้าสดใส สื่อถึงน้ำ/มิเตอร์)
  const PRIMARY_COLOR = "#0288D1";

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="th">
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 3,
          borderRadius: 3,
          bgcolor: "#fff",
          border: "1px solid",
          borderColor: (theme) => alpha(theme.palette.grey[300], 0.5),
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.03)",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {/* --- ฝั่งซ้าย: Icon และ Title --- */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ width: "100%" }}
        >
          {/* Icon Box */}
          <Avatar
            variant="rounded"
            sx={{
              width: 56,
              height: 56,
              bgcolor: alpha(PRIMARY_COLOR, 0.1), // พื้นหลังจางๆ
              color: PRIMARY_COLOR, // ไอคอนสีเข้ม
              border: `1px solid ${alpha(PRIMARY_COLOR, 0.2)}`,
              borderRadius: 2,
            }}
          >
            {/* ใช้ SpeedIcon สื่อถึงหน้าปัดมิเตอร์ */}
            <SpeedIcon sx={{ fontSize: 32 }} />
          </Avatar>

          {/* Text Content */}
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "text.primary",
                lineHeight: 1.2,
                mb: 0.5,
                fontSize: { xs: "1.1rem", md: "1.35rem" },
              }}
            >
              จดมิเตอร์
            </Typography>
            <Typography variant="caption" color="text.secondary">
              บันทึกเลขมิเตอร์น้ำและไฟฟ้าประจำเดือน
            </Typography>
          </Box>
        </Stack>

        {/* --- ฝั่งขวา: Date Picker --- */}
        <Box sx={{ minWidth: 240, width: { xs: "100%", md: "auto" } }}>
          <Typography
            variant="caption"
            sx={{
              display: "block",
              mb: 0.5,
              color: "text.secondary",
              fontWeight: 500,
            }}
          >
            เลือกวันที่จดมิเตอร์
          </Typography>
          <DatePicker
            views={["year", "month"]}
            value={meterDate}
            onChange={(newValue) => {
              setMeterDate(newValue);
              setIsOpen(false);
            }}
            open={isOpen}
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            disableOpenPicker
            format="MMMM YYYY"
            slotProps={{
              textField: {
                size: "small",
                fullWidth: true,
                onClick: () => setIsOpen(true),
                placeholder: "เลือกเดือน...",
                sx: {
                  bgcolor: "#f9f9f9",
                  borderRadius: 1,
                  "& .MuiOutlinedInput-root": {
                    height: 44,
                    cursor: "pointer",
                    "& fieldset": { borderColor: "#E0E0E0" },
                    "&:hover fieldset": { borderColor: PRIMARY_COLOR },
                    "&.Mui-focused fieldset": {
                      borderColor: PRIMARY_COLOR,
                      borderWidth: 1.5,
                    },
                    "& input": {
                      cursor: "pointer",
                      fontWeight: 600,
                      color: "#333",
                      fontSize: 15,
                    },
                  },
                },
                InputProps: {
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarTodayIcon
                        fontSize="small"
                        sx={{
                          color: PRIMARY_COLOR,
                          cursor: "pointer",
                        }}
                        onClick={() => setIsOpen(true)}
                      />
                    </InputAdornment>
                  ),
                },
              },
            }}
          />
        </Box>
      </Paper>
    </LocalizationProvider>
  );
}
