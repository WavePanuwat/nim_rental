import React, { useState } from "react";
import { Box, Paper, Typography, InputAdornment } from "@mui/material";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import "dayjs/locale/th";

export default function MeterHeaderClean() {
  const [meterDate, setMeterDate] = useState<dayjs.Dayjs | null>(dayjs());
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="th">
      <Paper
        elevation={0}
        sx={{
          p: 2,
          mb: 2,
          borderRadius: 2,
          bgcolor: "#fff",
          border: "1px solid #E0E0E0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 1.2,
          }}
        >
          <Box sx={{ flex: 1 }} />

          <Typography
            fontSize={16}
            fontWeight={600}
            color="#333"
            sx={{ whiteSpace: "nowrap" }}
          >
            เลือกรอบจดมิเตอร์
          </Typography>

          <Box sx={{ flex: 1 }} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
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
                onClick: () => setIsOpen(true),
                sx: {
                  width: 210,
                  bgcolor: "white",
                  borderRadius: 1,
                  "& .MuiOutlinedInput-root": {
                    height: 36,
                    cursor: "pointer",
                    "& fieldset": { borderColor: "#D0D0D0" },
                    "&:hover fieldset": { borderColor: "#3355AA" },
                    "&.Mui-focused fieldset": {
                      borderColor: "#3355AA",
                    },
                    "& input": {
                      cursor: "pointer",
                      textAlign: "center",
                      fontSize: 14,
                      py: 0,
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
                          color: "action.active",
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
