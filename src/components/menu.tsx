"use client";

import { Box, Container, Stack, Typography } from "@mui/material";

import CampaignIcon from "@mui/icons-material/Campaign";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SpeedIcon from "@mui/icons-material/Speed";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PaymentsIcon from "@mui/icons-material/Payments";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import HandymanIcon from "@mui/icons-material/Handyman";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import PeopleIcon from "@mui/icons-material/People";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BadgeIcon from "@mui/icons-material/Badge";
import CalculateIcon from "@mui/icons-material/Calculate";
import SettingsIcon from "@mui/icons-material/Settings";

const MENU_ITEMS = [
  { label: "ผังห้อง", icon: <ApartmentIcon />, active: true },
  { label: "จดมิเตอร์", icon: <SpeedIcon /> },
  { label: "บิลค่าเช่า", icon: <ReceiptLongIcon /> },
  { label: "จ่ายบิล", icon: <PaymentsIcon /> },
  // { label: "ปฏิทิน", icon: <CalendarMonthIcon /> },
  // { label: "พัสดุ", icon: <Inventory2Icon /> },
  // { label: "สรุปการแจ้ง", icon: <CampaignIcon /> },
  // { label: "อุปกรณ์", icon: <HandymanIcon /> },
  // { label: "รายรับ-จ่าย", icon: <AccountBalanceWalletIcon /> },
  // { label: "วิเคราะห์", icon: <BarChartIcon /> },
  // { label: "รายงานสรุป", icon: <DescriptionIcon /> },
  // { label: "ผู้เช่า", icon: <PeopleIcon /> },
  // { label: "ยานพาหนะ", icon: <DirectionsCarIcon /> },
  // { label: "บุคลากร", icon: <BadgeIcon /> },
  // { label: "บัญชี", icon: <CalculateIcon /> },
  // { label: "ตั้งค่าหอพัก", icon: <SettingsIcon /> },
];

export default function Menu() {
  return (
    <Box sx={{ bgcolor: "#2C353F", width: "100%" }}>
      <Container maxWidth={false} disableGutters>
        <Box
          sx={{
            overflowX: "auto",
            "&::-webkit-scrollbar": { height: "4px" },
            "&::-webkit-scrollbar-track": { background: "#2C353F" },
            "&::-webkit-scrollbar-thumb": {
              background: "#555",
              borderRadius: "2px",
            },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={0.5}
            sx={{
              p: 0.5,
              minWidth: "max-content",
            }}
          >
            {MENU_ITEMS.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",

                  minWidth: 80,
                  height: 70,

                  bgcolor: item.active ? "#BCD3F5" : "transparent",
                  color: item.active ? "#1A2027" : "#F2F2F2",
                  borderRadius: 1,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: item.active ? "#95ADD0" : "rgba(255,255,255,0.05)",
                    color: item.active ? "#1A2027" : "#fff",
                  },
                }}
              >
                <Box sx={{ mb: 0.2, "& svg": { fontSize: 24 } }}>
                  {" "}
                  {item.icon}
                </Box>
                <Typography
                  variant="caption"
                  sx={{ fontSize: "0.7rem", fontWeight: 400 }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
