"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";

import Grid from "@mui/material/Grid";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import "dayjs/locale/th";

import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import CalculateIcon from "@mui/icons-material/Calculate";

export default function RentalProcessFilter() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="th">
      <Card
        sx={{
          p: 3,
          mb: 3,
          borderRadius: 3,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {/* --- Header Section --- */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1.5}
          sx={{ mb: 3 }}
        >
          <CalculateIcon sx={{ fontSize: 40 }} color="primary" />
          <Stack>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, color: "text.primary" }}
            >
              ประมวลผลค่าเช่า
            </Typography>
            <Typography variant="caption" color="text.secondary">
              ระบบคำนวณและจัดการค่าเช่าประจำเดือน
            </Typography>
          </Stack>
        </Stack>

        {/* --- Filter Form Section --- */}
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={4} sx={{ justifyContent: "center" }}>
            {/* === ฝั่งซ้าย: วันที่ (ปรับตามรูปภาพ) === */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Grid container spacing={2}>
                {/* ตั้งแต่วันที่ */}
                <Grid size={{ xs: 12, md: 6 }}>
                  {/* แยก Label ออกมาด้านบน */}
                  <Stack spacing={0.5}>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ ml: 0.5 }}
                    >
                      ตั้งแต่วันที่
                    </Typography>
                    <DatePicker
                      format="DD/MM/YYYY" // กำหนด format ให้เป็น DD/MM/YYYY ตามรูป
                      slotProps={{
                        textField: {
                          size: "small",
                          fullWidth: true,
                          // ไม่ใส่ InputProps -> ไอคอนจะกลับไปอยู่ด้านขวา (default)
                        },
                      }}
                    />
                  </Stack>
                </Grid>

                {/* ถึงวันที่ */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <Stack spacing={0.5}>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ ml: 0.5 }}
                    >
                      ถึงวันที่
                    </Typography>
                    <DatePicker
                      format="DD/MM/YYYY"
                      slotProps={{
                        textField: {
                          size: "small",
                          fullWidth: true,
                        },
                      }}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Grid>

            {/* === เส้นคั่นกลาง === */}
            <Grid
              size={{ xs: 12, md: 1 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  display: { xs: "none", md: "block" },
                  borderStyle: "dashed",
                  borderColor: "divider",
                }}
              />
              <Divider
                flexItem
                sx={{
                  display: { xs: "block", md: "none" },
                  width: "100%",
                  borderStyle: "dashed",
                  my: 2,
                }}
              />
            </Grid>

            {/* === ฝั่งขวา: ข้อมูลผู้เช่า === */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Grid container spacing={2}>
                {/* เลขที่การเช่า */}
                <Grid size={{ xs: 12 }}>
                  <Stack spacing={0.5}>
                    {/* เพิ่ม Label ให้เหมือนฝั่งซ้าย (Optional: ถ้าต้องการให้เหมือนกันทั้งหน้า) */}
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ ml: 0.5 }}
                    >
                      เลขที่การเช่า
                    </Typography>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="ระบุเลขที่การเช่า"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <ReceiptLongIcon
                              fontSize="small"
                              color="secondary"
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Stack>
                </Grid>

                {/* ชื่อผู้เช่า */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <Stack spacing={0.5}>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ ml: 0.5 }}
                    >
                      ชื่อผู้เช่า
                    </Typography>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="ชื่อผู้เช่า"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon fontSize="small" color="info" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Stack>
                </Grid>

                {/* เบอร์โทรศัพท์ */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <Stack spacing={0.5}>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ ml: 0.5 }}
                    >
                      เบอร์โทรศัพท์
                    </Typography>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="เบอร์โทรศัพท์"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon fontSize="small" color="success" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </LocalizationProvider>
  );
}
