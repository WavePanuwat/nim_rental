"use client";

import React, { useState } from "react";
import { Dayjs } from "dayjs";
import "dayjs/locale/th";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import { alpha, useTheme } from "@mui/material/styles";

import CalculateIcon from "@mui/icons-material/Calculate";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from "@mui/icons-material/Person";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function PaymentFilter() {
  const theme = useTheme();

  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const handleSearch = () => {
    console.log("Searching logic inside Filter...", { startDate, endDate });
  };

  const COLORS = {
    primary: theme.palette.primary.main,
    receipt: theme.palette.warning.main,
    contract: theme.palette.secondary.main,
    person: theme.palette.info.main,
    text: theme.palette.text.secondary,
  };

  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#fff",
      transition: "all 0.2s ease-in-out",
      "& fieldset": { borderColor: alpha(theme.palette.grey[400], 0.3) },
      "&:hover fieldset": { borderColor: COLORS.primary },
      "&.Mui-focused fieldset": {
        borderColor: COLORS.primary,
        borderWidth: "1.5px",
        boxShadow: `0 0 0 3px ${alpha(COLORS.primary, 0.1)}`,
      },
    },
  };

  const renderLabel = (text: string) => (
    <Typography
      variant="caption"
      sx={{ color: COLORS.text, mb: 0.5, display: "block", fontWeight: 500 }}
    >
      {text}
    </Typography>
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="th">
      <Card
        sx={{
          mb: 2,
          borderRadius: 3,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          overflow: "visible",
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        <Box sx={{ p: 3, pb: 1 }}>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              variant="rounded"
              sx={{
                width: 48,
                height: 48,
                bgcolor: COLORS.primary,
                boxShadow: `0 8px 16px ${alpha(COLORS.primary, 0.24)}`,
              }}
            >
              <CalculateIcon sx={{ fontSize: 28, color: "#fff" }} />
            </Avatar>
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "#1a2b3c" }}
              >
                ชำระค่าเช่า
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ระบบบันทึกและตรวจสอบข้อมูลการชำระค่าเช่า
              </Typography>
            </Box>
          </Stack>
        </Box>

        <Box sx={{ p: 3, pt: 0 }}>
          <Grid container spacing={3}>
            {/* Left: Dates */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={2}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    {renderLabel("ตั้งแต่วันที่")}
                    <DatePicker
                      value={startDate}
                      onChange={(newValue) => setStartDate(newValue)}
                      slotProps={{
                        textField: {
                          size: "small",
                          fullWidth: true,
                          placeholder: "DD/MM/YYYY",
                          sx: inputStyle,
                        },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    {renderLabel("ถึงวันที่")}
                    <DatePicker
                      value={endDate}
                      onChange={(newValue) => setEndDate(newValue)}
                      slotProps={{
                        textField: {
                          size: "small",
                          fullWidth: true,
                          placeholder: "DD/MM/YYYY",
                          sx: inputStyle,
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </Stack>
            </Grid>

            {/* Divider */}
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
                  my: 2,
                }}
              />
            </Grid>

            {/* Right: Inputs */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    {renderLabel("เลขที่ใบเสร็จ")}
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="ระบุเลขที่ใบเสร็จ"
                      sx={inputStyle}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <ReceiptLongIcon
                              sx={{ color: COLORS.receipt }}
                              fontSize="small"
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    {renderLabel("เลขที่สัญญา")}
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="ระบุเลขที่สัญญา"
                      sx={inputStyle}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AssignmentIcon
                              sx={{ color: COLORS.contract }}
                              fontSize="small"
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
                <Box>
                  {renderLabel("ชื่อผู้เช่า")}
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="ระบุชื่อผู้เช่า"
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
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </LocalizationProvider>
  );
}
