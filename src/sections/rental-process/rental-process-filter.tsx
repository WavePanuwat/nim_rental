"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

// Icons
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import CalculateIcon from "@mui/icons-material/Calculate";

export default function RentalProcessFilter() {
  return (
    <Card
      sx={{
        p: 3, // เพิ่ม padding ให้ดูโปร่งขึ้น
        mb: 3,
        borderRadius: 3, // เพิ่มความโค้งมน
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
        maxWidth: 1200, // กำหนดความกว้างสูงสุด ไม่ให้ฟอร์มแบะออกจนเกินไป
        mx: "auto", // จัด Card ให้อยู่กึ่งกลางหน้าจอแนวนอน
      }}
    >
      {/* --- Header Section (CENTERED) --- */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1.5}
        sx={{ mb: 4, color: "primary.main" }}
      >
        <CalculateIcon sx={{ fontSize: 40 }} />
        <Stack>
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
            ประมวลผลค่าเช่า
          </Typography>
          <Typography variant="caption" color="text.secondary">
            ระบบคำนวณและจัดการค่าเช่าประจำเดือน
          </Typography>
        </Stack>
      </Stack>

      {/* --- Filter Form Section --- */}
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={4} justifyContent="center">
          {/* --- ฝั่งซ้าย: วันที่ --- */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2.5}>
              <TextField
                fullWidth
                size="small"
                type="date"
                label="ตั้งแต่วันที่"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarTodayIcon fontSize="small" color="action" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                size="small"
                type="date"
                label="ถึงวันที่"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarTodayIcon fontSize="small" color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          </Grid>

          {/* --- เส้นคั่นกลาง (แสดงเฉพาะจอใหญ่) --- */}
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
            {/* เส้นคั่นแนวนอนสำหรับมือถือ */}
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

          {/* --- ฝั่งขวา: ข้อมูลผู้เช่า --- */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2.5}>
              <TextField
                fullWidth
                size="small"
                placeholder="ระบุเลขที่การเช่า"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ReceiptLongIcon fontSize="small" color="action" />
                    </InputAdornment>
                  ),
                }}
              />

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="ชื่อผู้เช่า"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon fontSize="small" color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  size="small"
                  placeholder="เบอร์โทรศัพท์"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon fontSize="small" color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
