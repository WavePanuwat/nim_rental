"use client";

import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/th";

// MUI Components
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import { alpha, useTheme } from "@mui/material/styles";

// Icons
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import DescriptionIcon from "@mui/icons-material/Description";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";

// Date handling
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// ----------------------------------------------------------------------

export default function InvoiceProcessFilter() {
  const theme = useTheme();

  // State
  const [periodDate, setPeriodDate] = useState<Dayjs | null>(dayjs());
  const [openPeriod, setOpenPeriod] = useState(false);

  // สี Icon (Semantic Colors)
  const COLORS = {
    primary: theme.palette.primary.main, // สีน้ำเงิน
    invoice: theme.palette.warning.main, // สีส้ม
    rental: theme.palette.secondary.main, // สีม่วง
    person: theme.palette.info.main, // สีฟ้าอ่อน
    phone: theme.palette.success.main, // สีเขียว
    text: theme.palette.text.secondary,
  };

  // --- สไตล์ Input ---
  // กรอบปกติเป็นสีเทา -> กดแล้วเป็นสีน้ำเงิน
  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#fff",
      // 1. Default State: สีเทาจางๆ
      "& fieldset": {
        borderColor: alpha(theme.palette.grey[400], 0.3),
        transition: "all 0.2s ease-in-out",
      },
      // 2. Hover State: สีน้ำเงิน
      "&:hover fieldset": {
        borderColor: COLORS.primary,
      },
      // 3. Focus/Active State: สีน้ำเงิน (ตามที่ต้องการ)
      "&.Mui-focused fieldset": {
        borderColor: COLORS.primary,
        borderWidth: "1.5px",
        boxShadow: `0 0 0 3px ${alpha(COLORS.primary, 0.1)}`, // เพิ่มเงาตอนกดเล็กน้อย
      },
    },
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="th">
      <Container maxWidth={false} sx={{ maxWidth: "1200px", mx: "auto", p: 0 }}>
        <Card
          sx={{
            mb: 2,
            borderRadius: 2,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
            overflow: "visible",
          }}
        >
          {/* --- HEADER --- */}
          <Box sx={{ p: 2, pb: 0 }}>
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              justifyContent="center"
            >
              <Avatar
                variant="rounded"
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: COLORS.primary,
                  boxShadow: `0 8px 16px ${alpha(COLORS.primary, 0.24)}`,
                }}
              >
                <ReceiptLongIcon sx={{ fontSize: 22, color: "#fff" }} />
              </Avatar>

              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  ประมวลผลใบแจ้งหนี้
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontSize: "0.75rem" }}
                >
                  ระบบคำนวณและจัดการใบแจ้งหนี้ประจำเดือน
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* --- CONTENT --- */}
          <Box sx={{ p: 2 }}>
            <Grid container spacing={2}>
              {/* === ฝั่งซ้าย === */}
              <Grid size={{ xs: 12, md: 5 }}>
                <Stack spacing={1}>
                  {/* งวดประจำเดือน */}
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ color: COLORS.text, mb: 0.25, display: "block" }}
                    >
                      งวดประจำเดือน
                    </Typography>
                    <DatePicker
                      views={["year", "month"]}
                      value={periodDate}
                      onChange={(newValue) => {
                        setPeriodDate(newValue);
                        setOpenPeriod(false);
                      }}
                      open={openPeriod}
                      onOpen={() => setOpenPeriod(true)}
                      onClose={() => setOpenPeriod(false)}
                      format="MMMM YYYY"
                      disableOpenPicker
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          size: "small",
                          onClick: () => setOpenPeriod(true),
                          sx: inputStyle,
                          placeholder: "เลือกเดือน/ปี...",
                          InputProps: {
                            readOnly: true,
                            startAdornment: (
                              <InputAdornment position="start">
                                <CalendarTodayIcon
                                  sx={{ color: COLORS.primary }}
                                  fontSize="small"
                                />
                              </InputAdornment>
                            ),
                          },
                        },
                      }}
                    />
                  </Box>

                  {/* วันที่สร้างเอกสาร */}
                  <Grid container spacing={1}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography
                        variant="caption"
                        sx={{ color: COLORS.text, mb: 0.25, display: "block" }}
                      >
                        ตั้งแต่วันที่
                      </Typography>
                      <DatePicker
                        slotProps={{
                          textField: {
                            size: "small",
                            fullWidth: true,
                            sx: inputStyle,
                            placeholder: "DD/MM/YYYY",
                          },
                        }}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography
                        variant="caption"
                        sx={{ color: COLORS.text, mb: 0.25, display: "block" }}
                      >
                        ถึงวันที่
                      </Typography>
                      <DatePicker
                        slotProps={{
                          textField: {
                            size: "small",
                            fullWidth: true,
                            sx: inputStyle,
                            placeholder: "DD/MM/YYYY",
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                </Stack>
              </Grid>

              {/* === DIVIDER === */}
              <Grid
                size={{ xs: 12, md: 1 }}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    borderStyle: "dashed",
                    borderColor: alpha(theme.palette.grey[400], 0.5),
                    display: { xs: "none", md: "block" },
                  }}
                />
                <Divider
                  sx={{
                    width: "100%",
                    borderStyle: "dashed",
                    display: { xs: "block", md: "none" },
                    my: 1,
                  }}
                />
              </Grid>

              {/* === ฝั่งขวา === */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={1}>
                  {/* Invoice No */}
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ color: COLORS.text, mb: 0.25, display: "block" }}
                    >
                      เลขที่ใบแจ้งหนี้
                    </Typography>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="ระบุเลขที่ใบแจ้งหนี้"
                      sx={inputStyle}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <DescriptionIcon
                              sx={{ color: COLORS.invoice }}
                              fontSize="small"
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>

                  {/* Rental No */}
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ color: COLORS.text, mb: 0.25, display: "block" }}
                    >
                      เลขที่การเช่า
                    </Typography>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="ระบุเลขที่การเช่า"
                      sx={inputStyle}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <ConfirmationNumberIcon
                              sx={{ color: COLORS.rental }}
                              fontSize="small"
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>

                  {/* Name & Phone */}
                  <Grid container spacing={1}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography
                        variant="caption"
                        sx={{ color: COLORS.text, mb: 0.25, display: "block" }}
                      >
                        ชื่อผู้เช่า
                      </Typography>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="ชื่อผู้เช่า"
                        sx={inputStyle}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonIcon
                                sx={{ color: COLORS.person }}
                                fontSize="small"
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography
                        variant="caption"
                        sx={{ color: COLORS.text, mb: 0.25, display: "block" }}
                      >
                        เบอร์โทรศัพท์
                      </Typography>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="เบอร์โทรศัพท์"
                        sx={inputStyle}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PhoneIcon
                                sx={{ color: COLORS.phone }}
                                fontSize="small"
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
    </LocalizationProvider>
  );
}
