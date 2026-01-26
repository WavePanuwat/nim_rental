"use client";

import React, { useState } from "react";
import {
  Dialog,
  Box,
  Typography,
  IconButton,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
  Tabs,
  Tab,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { RentItem } from "@/src/models/types";

import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

//Types
type RoomInfo = {
  roomNo: string;
  buildingName: string;
  address: string;
};

type Props = {
  open: boolean;
  room: RoomInfo | null;
  onClose: () => void;
  onSubmit: (data: RentItem) => void;
};

//Date field with placeholder
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
        startAdornment: (
          <InputAdornment position="start">
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

// Component
export default function RentInAddForm({
  open,
  room,
  onClose,
  onSubmit,
}: Props) {
  const [tab, setTab] = useState(0);

  const [form, setForm] = useState({
    rentNo: "",
    documentDate: "",
    renterType: "",
    area: "",
    startDate: "",
    endDate: "",
    remark: "",
    contractIssue: "",
    objective: "",
    condition: "",
  });

  const handleChange =
    (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleSubmit = () => {
    onSubmit({
      id: crypto.randomUUID(),
      renterType: form.renterType,
      rentNo: form.rentNo,
      startDate: form.startDate,
      endDate: form.endDate,
      status: "active",
    });
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={false}
      PaperProps={{
        sx: {
          maxWidth: 950, // ขนาด dialog
          borderRadius: 3,
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
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography fontWeight={600} color="primary.main">ข้อมูลการเช่า</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* ================= Tabs ================= */}
      <Tabs
        value={tab}
        onChange={(_, v) => setTab(v)}
        sx={{ px: 3, borderBottom: 1, borderColor: "divider" }}
      >
        <Tab label="ข้อมูลการเช่า" />
        <Tab label="ข้อมูลสัญญา" />
      </Tabs>

      <DialogContent
        sx={{
          "& .MuiTextField-root": {
            fontSize: 14,
          },
          "& .MuiInputBase-root": {
            height: 40, // ลดความสูงช่องกรอก
            fontSize: 14,
          },
          "& .MuiInputBase-input": {
            padding: "8px 12px",
          },
          "& .MuiInputAdornment-root svg": {
            fontSize: 18,
          },
        }}
      >
        {/* คุมความกว้างฟอร์ม */}
        <Box sx={{ maxWidth: 750, mx: "auto" }}>
          {/* ================= TAB 1 : ข้อมูลการเช่า ================= */}
          {tab === 0 && (
            <Stack spacing={4}>
              {/* ข้อมูลการเช่า */}
              <Box>
                <Stack spacing={3}>
                  <Stack direction="row" spacing={2}>
                    <Box flex={1}>
                      <Typography fontWeight={600} mb={1}>
                        เลขที่การเช่า
                      </Typography>
                      <TextField
                        placeholder="กรอกเลขที่การเช่า"
                        value={form.rentNo}
                        onChange={handleChange("rentNo")}
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <DescriptionOutlinedIcon
                                sx={{ fontSize: 20, color: "text.secondary" }}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                    <Box width={300}>
                      <Typography fontWeight={600} mb={1}>
                        วันที่เอกสาร
                      </Typography>
                      <DateField
                        placeholder="เลือกวันที่เอกสาร"
                        value={form.documentDate}
                        onChange={handleChange("documentDate")}
                      />
                    </Box>
                  </Stack>

                  <Box>
                    <Typography fontWeight={600} mb={1}>
                      ประเภทผู้เช่า
                    </Typography>
                    <RadioGroup
                      row
                      value={form.renterType}
                      onChange={handleChange("renterType")}
                    >
                      <FormControlLabel
                        value="พนักงาน"
                        control={<Radio />}
                        label="พนักงาน"
                      />
                      <FormControlLabel
                        value="บุคคลธรรมดา"
                        control={<Radio />}
                        label="บุคคลธรรมดา"
                      />
                      <FormControlLabel
                        value="นิติบุคคล"
                        control={<Radio />}
                        label="นิติบุคคล"
                      />
                    </RadioGroup>
                  </Box>
                </Stack>
              </Box>

              <Box>
                <Stack spacing={3}>
                  <Stack direction="row" spacing={2}>
                    <Box flex={1}>
                      <Typography fontWeight={600} mb={1}>
                        สถานที่
                      </Typography>
                      <TextField
                        value={room?.buildingName ?? ""}
                        disabled
                        fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "#f1f3f6",
                          },
                        }}
                      />
                    </Box>

                    <Box width={300}>
                      <Typography fontWeight={600} mb={1}>
                        ห้อง
                      </Typography>
                      <TextField
                        value={room?.roomNo ?? ""}
                        disabled
                        fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "#f1f3f6",
                          },
                        }}
                      />
                    </Box>
                  </Stack>

                  <Box>
                    <Typography fontWeight={600} mb={1}>
                      เช่าพื้นที่
                    </Typography>
                    <TextField
                      placeholder="กรอกพื้นที่"
                      value={form.area}
                      onChange={handleChange("area")}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            ตารางเมตร
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                    />
                  </Box>

                  <Box>
                    <Typography fontWeight={600} mb={1}>
                      ที่ตั้ง
                    </Typography>
                    <TextField
                      value={room?.address ?? ""}
                      disabled
                      fullWidth
                      minRows={1}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "#f1f3f6",
                        },
                      }}
                    />
                  </Box>
                </Stack>
              </Box>

              <Box>
                <Stack direction="row" spacing={5}>
                  <Box flex={1}>
                    <Typography fontWeight={600} mb={1}>
                      วันที่เริ่มเช่า
                    </Typography>
                    <DateField
                      placeholder="เลือกวันที่เริ่มเช่า"
                      value={form.startDate}
                      onChange={handleChange("startDate")}
                    />
                  </Box>

                  <Box flex={1}>
                    <Typography fontWeight={600} mb={1}>
                      วันที่สิ้นสุดการคิดค่าเช่า
                    </Typography>
                    <DateField
                      placeholder="เลือกวันที่สิ้นสุด"
                      value={form.endDate}
                      onChange={handleChange("endDate")}
                    />
                  </Box>
                </Stack>
              </Box>

              <Box>
                <Typography fontWeight={600} mb={1}>
                  หมายเหตุ
                </Typography>
                <TextField
                  placeholder="หมายเหตุเพิ่มเติม"
                  value={form.remark}
                  onChange={handleChange("remark")}
                  multiline
                  minRows={1}
                  fullWidth
                />
              </Box>
            </Stack>
          )}

          {/* ================= TAB 2 : ข้อมูลสัญญา ================= */}
          {tab === 1 && (
            <Stack spacing={4}>
              <Box>
                <Typography fontWeight={600} mb={1}>
                  การออกสัญญา
                </Typography>
                <TextField
                  select
                  value={form.contractIssue}
                  onChange={handleChange("contractIssue")}
                  fullWidth
                >
                  <MenuItem value="null">-</MenuItem>
                  <MenuItem value="ใหม่">สัญญาใหม่</MenuItem>
                  <MenuItem value="ต่อสัญญา">ต่อสัญญา</MenuItem>
                </TextField>
              </Box>

              <Box>
                <Typography fontWeight={600} mb={1}>
                  วัตถุประสงค์
                </Typography>
                <TextField
                  select
                  value={form.objective}
                  onChange={handleChange("objective")}
                  fullWidth
                >
                  <MenuItem value="null">-</MenuItem>
                  <MenuItem value="พักอาศัย">พักอาศัย</MenuItem>
                  <MenuItem value="สำนักงาน">สำนักงาน</MenuItem>
                  <MenuItem value="ร้านค้า">ร้านค้า</MenuItem>
                </TextField>
              </Box>

              <Box>
                <Typography fontWeight={600} mb={1}>
                  เงื่อนไขอื่น ๆ
                </Typography>
                <TextField
                  select
                  value={form.condition}
                  onChange={handleChange("condition")}
                  fullWidth
                >
                  <MenuItem value="null">-</MenuItem>
                  <MenuItem value="ไม่มี">ไม่มี</MenuItem>
                  <MenuItem value="ตามสัญญา">ตามสัญญา</MenuItem>
                </TextField>
              </Box>
            </Stack>
          )}
        </Box>
      </DialogContent>

      {/* ================= Actions ================= */}
      <DialogActions sx={{ px: 13, py: 2 }}>
        <Button onClick={onClose} variant="outlined">
          ยกเลิก
        </Button>
        <Button onClick={handleSubmit} variant="contained">
          บันทึก
        </Button>
      </DialogActions>
    </Dialog>
  );
}
