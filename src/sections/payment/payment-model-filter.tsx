"use client";

import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

import {
  Box,
  Card,
  Stack,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Divider,
  Container,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DescriptionIcon from "@mui/icons-material/Description";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function PaymentModelFilter() {
  const theme = useTheme();
  const [periodDate, setPeriodDate] = useState<Dayjs | null>(dayjs());
  const [openDate, setOpenDate] = useState(false);

  const COLORS = {
    primary: theme.palette.primary.main,
    invoice: "#ed6c02",
    rental: "#9c27b0",
    person: "#0288d1",
    phone: "#2e7d32",
    label: theme.palette.text.secondary,
  };

  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#fff",
      borderRadius: 2,
      transition: "all .2s ease",
      "& fieldset": {
        borderColor: alpha(theme.palette.grey[500], 0.25),
      },
      "&:hover fieldset": {
        borderColor: COLORS.primary,
      },
      "&.Mui-focused fieldset": {
        borderColor: COLORS.primary,
        boxShadow: `0 0 0 3px ${alpha(COLORS.primary, 0.15)}`,
      },
    },
    "& .MuiInputBase-input": {
      fontSize: "0.9rem",
    },
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="th">
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 1, md: 0 },
          mb: 2,
        }}
      >
        <Card
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            border: `1px solid ${alpha(theme.palette.grey[300], 0.6)}`,
            boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
          }}
        >
          <Grid container spacing={4}>
            {/* LEFT : Period */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Stack spacing={2.5}>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{ color: COLORS.label, mb: 1, fontWeight: 500 }}
                  >
                    งวดประจำเดือน
                  </Typography>
                  <DatePicker
                    views={["year", "month"]}
                    value={periodDate}
                    onChange={setPeriodDate}
                    format="MMMM YYYY"
                    open={openDate}
                    onOpen={() => setOpenDate(true)}
                    onClose={() => setOpenDate(false)}
                    disableOpenPicker
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        size: "small",
                        sx: inputStyle,
                        placeholder: "เลือกเดือน / ปี",
                        onClick: () => setOpenDate(true),
                        InputProps: {
                          readOnly: true,
                          startAdornment: (
                            <InputAdornment position="start">
                              <CalendarTodayIcon
                                fontSize="small"
                                sx={{ color: COLORS.primary }}
                              />
                            </InputAdornment>
                          ),
                        },
                      },
                    }}
                  />
                </Box>
              </Stack>
            </Grid>

            {/* DIVIDER */}
            <Grid
              size={{ xs: 12, md: 1 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  borderStyle: "dashed",
                  display: { xs: "none", md: "block" },
                }}
              />
              <Divider
                flexItem
                sx={{
                  borderStyle: "dashed",
                  display: { xs: "block", md: "none" },
                }}
              />
            </Grid>

            {/* RIGHT : Filters */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack spacing={3}>
                <Grid container spacing={2.5}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="caption" sx={{ color: COLORS.label }}>
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
                              fontSize="small"
                              sx={{ color: COLORS.invoice }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="caption" sx={{ color: COLORS.label }}>
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
                              fontSize="small"
                              sx={{ color: COLORS.rental }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2.5}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="caption" sx={{ color: COLORS.label }}>
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
                              fontSize="small"
                              sx={{ color: COLORS.person }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="caption" sx={{ color: COLORS.label }}>
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
                              fontSize="small"
                              sx={{ color: COLORS.phone }}
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
        </Card>
      </Container>
    </LocalizationProvider>
  );
}
