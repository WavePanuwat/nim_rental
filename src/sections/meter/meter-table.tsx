import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import { MeterData } from "@/src/models/types";

interface MeterTableProps {
  data: MeterData[];
  meterType: "water" | "electric";
}

export default function MeterTable({ data, meterType }: MeterTableProps) {
  const isElectric = meterType === "electric";

  // กำหนดชุดสีตามประเภท
  const themeColor = isElectric ? "#D32F2F" : "#1976D2"; // สีหลัก (ขอบ/ตัวหนังสือ)
  const hoverBgColor = isElectric ? "#FFF1F1" : "#F0F7FF"; // สีพื้นหลังตอน Hover (เข้มกว่าขาว)

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        borderRadius: 3,
        border: "1px solid #E0E0E0",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
        overflow: "hidden",
      }}
    >
      <Table sx={{ minWidth: 950 }}>
        <TableHead sx={{ bgcolor: "#2C353F" }}>
          <TableRow>
            {[
              { label: "ห้อง", width: "7%" },
              { label: "เลขที่สัญญา", width: "12%" },
              { label: "Serial No.", width: "12%" },
              { label: "ชื่อผู้เช่า", align: "left", width: "16%" },
              { label: "วันที่จดล่าสุด", width: "10%" },
              { label: "ครั้งก่อน", width: "10%" },
              { label: "ครั้งนี้ (ล่าสุด)", width: "12%" },
              { label: "หมายเหตุ", width: "11%" },
              { label: "", width: "10%" },
            ].map((head, index) => (
              <TableCell
                key={index}
                align={(head.align as "center" | "left" | "right") || "center"}
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  width: head.width,
                  py: 2.5,
                  borderBottom: "1px solid #E0E0E0",
                }}
              >
                {head.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              hover
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "&:hover": { bgcolor: "#F9FAFB" },
                "& td": { py: 2 },
              }}
            >
              <TableCell align="center">
                <Typography variant="body2" color="#1A202C">
                  {row.room}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body2" color="#1A202C">
                  {row.contractId}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Chip
                  label={row.serialNo}
                  size="small"
                  sx={{
                    bgcolor: "#EDF7ED",
                    color: "#2E7D32",
                    fontWeight: 600,
                    borderRadius: 1,
                  }}
                />
              </TableCell>
              <TableCell align="left">
                <Typography variant="body2" color="#1A202C">
                  {row.tenant}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body2" color="#4A5568">
                  {row.lastDate}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body2" color="#4A5568">
                  {row.lastReading.toLocaleString()}
                </Typography>
              </TableCell>

              <TableCell align="center">
                <TextField
                  size="small"
                  placeholder="0"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    sx: {
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: themeColor,
                      bgcolor: "white",
                      borderRadius: "8px",
                      transition: "all 0.2s ease-in-out",
                      "& fieldset": {
                        borderColor: themeColor,
                        borderWidth: "1.5px",
                      },
                      // เมื่อ Hover: เปลี่ยนสีพื้นหลังให้เข้มขึ้นตามประเภท และเน้นขอบ
                      "&:hover": {
                        bgcolor: hoverBgColor,
                      },
                      "&:hover fieldset": {
                        borderColor: `${themeColor} !important`,
                        borderWidth: "2px !important",
                      },
                      // เมื่อ Focus: กลับเป็นสีขาวเพื่อให้พิมพ์ง่าย
                      "&.Mui-focused": {
                        bgcolor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: `${themeColor} !important`,
                        borderWidth: "2px !important",
                      },
                      "& input": {
                        textAlign: "center",
                        py: 1,
                      },
                    },
                  }}
                />
              </TableCell>

              <TableCell align="center">
                <TextField
                  size="small"
                  variant="standard"
                  fullWidth
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: "0.85rem",
                      textAlign: "center",
                    },
                  }}
                />
              </TableCell>

              <TableCell align="center">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        size="small"
                        sx={{
                          p: 0,
                          color: "#9E9E9E",
                          "&.Mui-checked": { color: "#1976D2" },
                        }}
                      />
                    }
                    label={
                      <Typography
                        fontSize="0.75rem"
                        fontWeight={500}
                        color="#4A5568"
                        sx={{ ml: 0.5 }}
                      >
                        Reset
                      </Typography>
                    }
                    sx={{ m: 0 }}
                  />
                  <Box
                    sx={{ width: "1px", height: "14px", bgcolor: "#E0E0E0" }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        size="small"
                        sx={{
                          p: 0,
                          color: "#9E9E9E",
                          "&.Mui-checked": { color: "#1976D2" },
                        }}
                      />
                    }
                    label={
                      <Typography
                        fontSize="0.75rem"
                        fontWeight={500}
                        color="#4A5568"
                        sx={{ ml: 0.5 }}
                      >
                        เปลี่ยน
                      </Typography>
                    }
                    sx={{ m: 0 }}
                  />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
