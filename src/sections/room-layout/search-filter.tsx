"use client";

import React, { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  InputAdornment,
  Stack,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  CalendarToday,
  ReceiptLong,
  PersonOutline,
  MeetingRoom,
  FilterList,
} from "@mui/icons-material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/th";

export default function FilterSection() {
  const [startMonth, setStartMonth] = useState<Dayjs | null>(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="th">
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mt: 3,
          mb: 4,
          border: "1px solid #E5E7EB",
          borderRadius: 3,
          backgroundColor: "#fff",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 3, gap: 1.5 }}>
          <Box
            sx={{
              display: "flex",
              p: 1,
              borderRadius: "10px",
              bgcolor: "#E0F2FE",
              color: "#0284C7",
            }}
          >
            <FilterList fontSize="small" />
          </Box>
          <Typography variant="subtitle1" fontWeight={700} color="#1E293B">
            ตัวกรองข้อมูลเช่า
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* วันที่เริ่มเช่า - สีคราม (Indigo) */}
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Stack spacing={0.5}>
              <Typography fontSize={14} fontWeight={600} color="text.secondary">
                วันที่เริ่มเช่า
              </Typography>
              <DatePicker
                views={["year", "month"]}
                value={startMonth}
                onChange={(newValue) => setStartMonth(newValue)}
                open={isDatePickerOpen}
                onOpen={() => setIsDatePickerOpen(true)}
                onClose={() => setIsDatePickerOpen(false)}
                disableOpenPicker={true}
                slotProps={{
                  textField: {
                    size: "small",
                    fullWidth: true,
                    placeholder: "เดือน / ปี",
                    onClick: () => setIsDatePickerOpen(true),
                    InputProps: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarToday
                            fontSize="small"
                            sx={{ color: "#3355AA" }}
                          />
                        </InputAdornment>
                      ),
                    },
                  },
                }}
              />
            </Stack>
          </Grid>

          {/* เลขที่การเช่า - สีเขียว (Emerald) */}
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Stack spacing={0.5}>
              <Typography fontSize={14} fontWeight={600} color="text.secondary">
                เลขที่การเช่า
              </Typography>
              <TextField
                size="small"
                fullWidth
                placeholder="ระบุเลขที่การเช่า"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ReceiptLong fontSize="small" sx={{ color: "#10B981" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          </Grid>

          {/* ชื่อผู้เช่า - สีส้ม (Amber) */}
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Stack spacing={0.5}>
              <Typography fontSize={14} fontWeight={600} color="text.secondary">
                ชื่อผู้เช่า
              </Typography>
              <TextField
                size="small"
                fullWidth
                placeholder="ชื่อ - นามสกุล"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutline
                        fontSize="small"
                        sx={{ color: "#F59E0B" }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          </Grid>

          {/* ห้อง - สีม่วง (Purple) */}
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Stack spacing={0.5}>
              <Typography fontSize={14} fontWeight={600} color="text.secondary">
                ห้อง
              </Typography>
              <TextField
                size="small"
                fullWidth
                placeholder="ระบุเลขที่ห้อง"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MeetingRoom fontSize="small" sx={{ color: "#8B5CF6" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </LocalizationProvider>
  );
}
