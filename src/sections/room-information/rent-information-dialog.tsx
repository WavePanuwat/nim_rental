"use client";

import React, { useState } from "react";
import {
  Dialog,
  Box,
  Typography,
  IconButton,
  InputAdornment,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
  RadioGroup,
  FormControlLabel,
  Radio,
  Tabs,
  Tab,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { RentItem } from "./types";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";

type RentInformationDialogProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: RentItem) => void;
};

const RentInformationDialog: React.FC<RentInformationDialogProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  const [tab, setTab] = useState(0);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 5,
        },
      }}
    >
      {/* ================= Header ================= */}
      <Box
        sx={{
          px: 3,
          py: 2,
          bgcolor: "#f3f6ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography fontWeight={600} fontSize={20} color="primary">
          ข้อมูลการเช่า
        </Typography>

        <IconButton onClick={onClose} size="medium">
          <CloseIcon />
        </IconButton>
      </Box>

      {/* ================= Tabs ================= */}
      <Tabs
        value={tab}
        onChange={(_, value) => setTab(value)}
        sx={{
          px: 3,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Tab label="ข้อมูลการเช่า" />
        <Tab label="ข้อมูลสัญญา" />
      </Tabs>

      {/* ================= Content ================= */}
      <DialogContent>
        {/* ===== Tab 1 : ข้อมูลการเช่า ===== */}
        {tab === 0 && (
          <Stack spacing={3}>
            <TextField label="เลขที่การเช่า" fullWidth />

            <TextField
              label="วันที่เอกสาร"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />

            <Box>
              <Typography fontWeight={600} mb={1}>
                ประเภทผู้เช่า
              </Typography>
              <RadioGroup row sx={{ pl: 2 }}>
                <FormControlLabel
                  value="employee"
                  control={<Radio />}
                  label="พนักงาน"
                />
                <FormControlLabel
                  value="person"
                  control={<Radio />}
                  label="บุคคลธรรมดา"
                />
                <FormControlLabel
                  value="company"
                  control={<Radio />}
                  label="นิติบุคคล"
                />
              </RadioGroup>
            </Box>

            <Stack direction="row" spacing={2}>
              <TextField
                label="สถานที่เช่า"
                value="บ้านเพื่อน แมนชั่น"
                disabled
                fullWidth
                InputLabelProps={{ shrink: true }}
              />

              <TextField
                label="ห้อง"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>

            <Stack direction="row" spacing={2}>
              <TextField
                label="เช่าพื้นที่"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">ตารางเมตร</InputAdornment>
                  ),
                }}
              />
            </Stack>

            <TextField label="ที่ตั้ง" multiline minRows={3} fullWidth />

            <Stack direction="row" spacing={2}>
              <TextField
                label="วันที่เริ่มเช่า"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
              <TextField
                label="วันที่สิ้นสุดการคิดค่าเช่า"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Stack>

            <TextField label="หมายเหตุ" multiline minRows={3} fullWidth />
          </Stack>
        )}

        {/* ===== Tab 2 : ข้อมูลสัญญา ===== */}
        {tab === 1 && (
          <Stack spacing={3}>
            <TextField select label="การออกสัญญา" fullWidth>
              <MenuItem value=""></MenuItem>
              <MenuItem value=""></MenuItem>
              <MenuItem value=""></MenuItem>
            </TextField>

            <TextField select label="วัตถุประสงค์" fullWidth>
              <MenuItem value=""></MenuItem>
              <MenuItem value=""></MenuItem>
              <MenuItem value=""></MenuItem>
            </TextField>

            <TextField select label="วัตถุประสงค์" fullWidth>
              <MenuItem value=""></MenuItem>
              <MenuItem value=""></MenuItem>
              <MenuItem value=""></MenuItem>
            </TextField>
          </Stack>
        )}
      </DialogContent>

      {/* ================= Actions ================= */}
      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button onClick={onClose} variant="outlined">
          ยกเลิก
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            // mock submit (เตรียมต่อ API)
            onSubmit({
              id: crypto.randomUUID(),
              renterType: "บุคคลธรรมดา",
              rentNo: "CT01251487",
              startDate: "01/12/2568",
              endDate: "30/11/2569",
              status: "Approved",
            });
            onClose();
          }}
        >
          บันทึก
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RentInformationDialog;
