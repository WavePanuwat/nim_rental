"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
  IconButton,
  Box,
  Typography,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TenantInfo } from "@/src/models/types";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { useState } from "react";


type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: TenantInfo) => void;
};

const TenantAddForm: React.FC<Props> = ({ open, onClose, onSubmit }) => {
  const [form, setForm] = React.useState<TenantInfo>({
    firstName: "",
    lastName: "",
    birthDate: "",
    age: "",
    phone: "",
    address: "",
  });

  const handleSubmit = () => {
    onSubmit(form);
    onClose();
  };

  const handleChange =
    (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

    const DateField = ({
      value,
      onChange,
      placeholder,
    }: {
      value?: string;
      onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
      placeholder: string;
    }) => {
      const [type, setType] = useState<"text" | "date">("text");
    
      return (
        <TextField
          type={type}
          value={value || ""}
          placeholder={placeholder}
          fullWidth
          onFocus={(e) => {
            setType("date");
    
            const input = e.target as HTMLInputElement;
            requestAnimationFrame(() => {
              input.showPicker?.();
            });
          }}
          onBlur={(e) => {
            if (!e.target.value) setType("text");
          }}
          onChange={onChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CalendarTodayOutlinedIcon
                  sx={{ fontSize: 20, color: "text.secondary" }}
                />
              </InputAdornment>
            ),
            sx: {
              "& input::-webkit-calendar-picker-indicator": {
                opacity: 0,
                cursor: "pointer",
              },
            },
          }}
        />
      );
    };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={false}
      PaperProps={{
        sx: {
          maxWidth: 900,
          borderRadius: 3,
        },
      }}
    >
      {/* ===== Header ===== */}
      <Box
        sx={{
          height: 60,
          px: 3,
          py: 2,
          bgcolor: "#f3f6ff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography fontWeight={600} color="primary.main">
          เพิ่มข้อมูลผู้เช่า
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* ===== Content ===== */}
      <DialogContent
        sx={{
          "& .MuiInputBase-root": {
            height: 40,
            fontSize: 14,
          },
          "& .MuiInputBase-input": {
            padding: "8px 12px",
          },
        }}
      >
        <Box sx={{ maxWidth: 700, mx: "auto" }}>
          <Stack spacing={3}>
            {/* ชื่อ-นามสกุล */}
            <Stack direction="row" spacing={2}>
              <Box flex={1}>
                <Typography fontWeight={600} mb={1}>
                  ชื่อ
                </Typography>
                <TextField
                  value={form.firstName}
                  onChange={handleChange("firstName")}
                  placeholder="กรอกชื่อ"
                  fullWidth
                />
              </Box>

              <Box flex={1}>
                <Typography fontWeight={600} mb={1}>
                  นามสกุล
                </Typography>
                <TextField 
                  value={form.lastName}
                  onChange={handleChange("lastName")}
                  placeholder="กรอกนามสกุล"
                  fullWidth
                />
              </Box>
            </Stack>

            {/* วันเดือนปีเกิด อายุ */}
            <Stack direction="row" spacing={2}>
              <Box flex={1}>
                <Typography fontWeight={600} mb={1}>
                  วันเดือนปีเกิด
                </Typography>
                <DateField
                  value={form.birthDate}
                  onChange={handleChange("birthDate")}
                  placeholder="กรอกวันเดือนปีเกิด"
                />
              </Box>

              <Box flex={1}>
                <Typography fontWeight={600} mb={1}>
                  อายุ
                </Typography>
                <TextField
                  value={form.age}
                  onChange={handleChange("age")}
                  placeholder="อายุ"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">ปี</InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Stack>

            {/* ที่อยู่ */}
            <Box>
              <Typography fontWeight={600} mb={1}>
                ที่อยู่ปัจจุบัน
              </Typography>
              <TextField 
                value={form.address}
                onChange={handleChange("address")}
                placeholder="กรอกที่อยู่ปัจจุบัน" fullWidth />
            </Box>

            {/* จังหวัด อำเภอ ตำบล */}
            <Stack direction="row" spacing={2}>
              <Box flex={1}>
                <Typography fontWeight={600} mb={1}>
                  จังหวัด
                </Typography>
                <TextField select fullWidth>
                  <MenuItem value="เชียงใหม่">เชียงใหม่</MenuItem>
                  <MenuItem value="เชียงราย">เชียงราย</MenuItem>
                </TextField>
              </Box>

              <Box flex={1}>
                <Typography fontWeight={600} mb={1}>
                  อำเภอ
                </Typography>
                <TextField select fullWidth>
                  <MenuItem value="เมืองเชียงใหม่">เมืองเชียงใหม่</MenuItem>
                  <MenuItem value="สันทราย">สันทราย</MenuItem>
                </TextField>
              </Box>

              <Box flex={1}>
                <Typography fontWeight={600} mb={1}>
                  ตำบล
                </Typography>
                <TextField select fullWidth>
                  <MenuItem value="สันนาเม็ง">สันนาเม็ง</MenuItem>
                  <MenuItem value="ช้างเผือก">ช้างเผือก</MenuItem>
                </TextField>
              </Box>
            </Stack>

            {/* รหัสไปรษณีย์ เบอร์โทรศัพท์ */}
            <Stack direction="row" spacing={2} mt={3}>
              <Box flex={1}>
                <Typography fontWeight={600} mb={1}>
                  รหัสไปรษณีย์
                </Typography>
                <TextField placeholder="กรอกรหัสไปรษณีย์" fullWidth />
              </Box>

              <Box flex={1}>
                <Typography fontWeight={600} mb={1}>
                  เบอร์โทรศัพท์
                </Typography>
                <TextField 
                  placeholder="กรอกเบอร์โทรศัพท์" 
                  fullWidth 
                  value={form.phone}
                  onChange={handleChange("phone")}
                />
              </Box>
            </Stack>
          </Stack>

          {/* เลบที่บัตรประจำตัวประชาชนและอื่นๆ */}
          <Stack direction="row" spacing={2} mt={3}>
            <Box flex={1}>
              <Typography fontWeight={600} mb={1}>
                เลขที่บัตรประจำตัวประชาชน
              </Typography>
              <TextField
                placeholder="กรอกเลขที่บัตรประจำตัวประชาชน"
                fullWidth
              />
            </Box>

            <Box flex={1}>
              <Typography fontWeight={600} mb={1}>
                เลขที่บัตรประจำตัวคนไม่มีสัญชาติ
              </Typography>
              <TextField
                placeholder="กรอกเลขที่บัตรประจำตัวคนไม่มีสัญชาติ"
                fullWidth
              />
            </Box>
          </Stack>

          {/* เลขประจำตัวบุคคลที่ไม่มีสถานะทางทะเบียน */}
          <Stack direction="row" spacing={2} mt={3}>
            <Box flex={1}>
              <Typography fontWeight={600} mb={1}>
                เลขประจําตัวบุคคลที่ไม่มีสถานะทางทะเบียน
              </Typography>
              <TextField
                placeholder="กรอกเลขประจําตัวบุคคลที่ไม่มีสถานะทางทะเบียน"
                fullWidth
              />
            </Box>

            <Box flex={1}>
              <Typography fontWeight={600} mb={1}>
                เลขที่หนังสือเดินทาง
              </Typography>
              <TextField placeholder="กรอกเลขที่หนังสือเดินทาง" fullWidth />
            </Box>
          </Stack>

          {/* รหัสพนักงาน ทะเบียนนิติบุคคลเลขที่   */}
          <Stack direction="row" spacing={2} mt={3}>
            <Box flex={1}>
              <Typography fontWeight={600} mb={1}>
                รหัสพนักงาน
              </Typography>
              <TextField placeholder="กรอกรหัสพนักงาน" fullWidth />
            </Box>

            <Box flex={1}>
              <Typography fontWeight={600} mb={1}>
                ทะเบียนนิติบุคคลเลขที่
              </Typography>
              <TextField placeholder="กรอกทะเบียนนิติบุคคลเลขที่" fullWidth />
            </Box>
          </Stack>
        </Box>
      </DialogContent>

      {/* ===== Actions ===== */}
      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button onClick={onClose} variant="outlined">
          ยกเลิก
        </Button>
        <Button onClick={handleSubmit} variant="contained">
          บันทึก
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TenantAddForm;
