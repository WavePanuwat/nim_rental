"use client";

import React, { useState } from "react";
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
import SearchIcon from "@mui/icons-material/Search"; // Import Icon แว่นขยาย

// Define Type ให้ตรงกับฟอร์มใหม่
export interface LessorFormInput {
  name: string;
  address: string;
  province: string;
  district: string;
  subDistrict: string;
  phone: string;
  idCard: string;
  taxId: string;
}

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: LessorFormInput) => void;
};

const LessorAddForm: React.FC<Props> = ({ open, onClose, onSubmit }) => {
  const [form, setForm] = useState<LessorFormInput>({
    name: "",
    address: "",
    province: "",
    district: "",
    subDistrict: "",
    phone: "",
    idCard: "",
    taxId: "",
  });

  const handleSubmit = () => {
    onSubmit(form);
  };

  const handleChange =
    (key: keyof LessorFormInput) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
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
          เพิ่มข้อมูลผู้ให้เช่า
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
            
            {/* 1. ชื่อ (มี icon แว่นขยาย) */}
            <Box>
              <Typography fontWeight={600} mb={1}>
                ชื่อ (หรือชื่อนิติบุคคล)
              </Typography>
              <TextField
                value={form.name}
                onChange={handleChange("name")}
                placeholder="กรอกชื่อ"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon sx={{ color: "text.secondary" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* 2. ที่อยู่ */}
            <Box>
              <Typography fontWeight={600} mb={1}>
                ที่อยู่
              </Typography>
              <TextField
                value={form.address}
                onChange={handleChange("address")}
                placeholder="กรอกที่อยู่"
                fullWidth
              />
            </Box>

            {/* 3. จังหวัด / อำเภอ / ตำบล (Select) */}
            <Stack direction="row" spacing={2}>
              <Box flex={1}>
                <Typography fontWeight={600} mb={1}>
                  จังหวัด
                </Typography>
                <TextField 
                  select 
                  fullWidth 
                  value={form.province}
                  onChange={handleChange("province")}
                  defaultValue="" // ป้องกัน warning uncontrolled component
                >
                  <MenuItem value="เชียงใหม่">เชียงใหม่</MenuItem>
                  <MenuItem value="เชียงราย">เชียงราย</MenuItem>
                </TextField>
              </Box>

              <Box flex={1}>
                <Typography fontWeight={600} mb={1}>
                  อำเภอ
                </Typography>
                <TextField 
                  select 
                  fullWidth 
                  value={form.district}
                  onChange={handleChange("district")}
                  defaultValue=""
                >
                  <MenuItem value="เมืองเชียงใหม่">เมืองเชียงใหม่</MenuItem>
                  <MenuItem value="สันทราย">สันทราย</MenuItem>
                </TextField>
              </Box>

              <Box flex={1}>
                <Typography fontWeight={600} mb={1}>
                  ตำบล
                </Typography>
                <TextField 
                  select 
                  fullWidth 
                  value={form.subDistrict}
                  onChange={handleChange("subDistrict")}
                  defaultValue=""
                >
                  <MenuItem value="สันนาเม็ง">สันนาเม็ง</MenuItem>
                  <MenuItem value="ช้างเผือก">ช้างเผือก</MenuItem>
                </TextField>
              </Box>
            </Stack>

            {/* 4. เบอร์โทร และ เลขที่บัตรประชาชน */}
            <Stack direction="row" spacing={2}>
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

              <Box flex={1}>
                <Typography fontWeight={600} mb={1}>
                  เลขที่บัตรประชาชน
                </Typography>
                <TextField
                  placeholder="กรอกเลขที่บัตรประชาชน"
                  fullWidth
                  value={form.idCard}
                  onChange={handleChange("idCard")}
                />
              </Box>
            </Stack>

            {/* 5. ทะเบียนนิติบุคคลเลขที่ */}
            <Box>
              <Typography fontWeight={600} mb={1}>
                ทะเบียนนิติบุคคลเลขที่
              </Typography>
              <TextField
                placeholder="กรอกทะเบียนนิติบุคคลเลขที่"
                fullWidth
                value={form.taxId}
                onChange={handleChange("taxId")}
              />
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

export default LessorAddForm;