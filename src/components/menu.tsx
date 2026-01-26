"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import ApartmentIcon from "@mui/icons-material/Apartment";
import SpeedIcon from "@mui/icons-material/Speed";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PaymentsIcon from "@mui/icons-material/Payments";

const MENU_ITEMS = [
  {
    label: "ผังห้อง",
    icon: <ApartmentIcon />,
    path: "/room-layout",
  },
  {
    label: "จดมิเตอร์",
    icon: <SpeedIcon />,
    path: "/meter",
  },
  {
    label: "ประมวลผลค่าเช่า",
    icon: <ReceiptLongIcon />,
    path: "/rental-process",
  },
  {
    label: "ประมวลผลใบเเจ้งหนี้",
    icon: <PaymentsIcon />,
    path: "/invoice-process",
  },
];

export default function Menu() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const buildingId = searchParams.get("id");

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
          <Stack direction="row" spacing={0.5} sx={{ p: 0.5 }}>
            {MENU_ITEMS.map((item) => {
              const active = pathname === item.path;

              return (
                <Box
                  key={item.path}
                  onClick={() => router.push(`${item.path}?id=${buildingId}`)}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",

                    minWidth: 100,
                    height: 70,

                    bgcolor: active ? "#BCD3F5" : "transparent",
                    color: active ? "#1A2027" : "#F2F2F2",
                    borderRadius: 1,
                    cursor: "pointer",
                    transition: "all 0.2s",

                    "&:hover": {
                      bgcolor: active ? "#95ADD0" : "rgba(255,255,255,0.05)",
                      color: active ? "#1A2027" : "#fff",
                    },
                  }}
                >
                  <Box sx={{ mb: 0.2, "& svg": { fontSize: 24 } }}>
                    {item.icon}
                  </Box>

                  <Typography
                    variant="caption"
                    sx={{ fontSize: "0.7rem", fontWeight: 400 }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
