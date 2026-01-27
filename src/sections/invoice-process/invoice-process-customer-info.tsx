import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { alpha, useTheme } from "@mui/material/styles";

// --- Icons ---
import ArticleIcon from "@mui/icons-material/Article";
import BusinessIcon from "@mui/icons-material/Business";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FingerprintIcon from "@mui/icons-material/Fingerprint";

import { IInvoiceDetailItem } from "@/src/models/types";

// --- Helper Functions ---
const getStatusConfig = (status: string) => {
  switch (status) {
    case "CONFIRM":
      return {
        label: "CONFIRM",
        color: "success" as const,
        mainColor: "#2e7d32",
        lightColor: "#e8f5e9", // สีพื้นหลังอ่อนๆ
      };
    case "PENDING":
      return {
        label: "PENDING",
        color: "warning" as const,
        mainColor: "#ed6c02",
        lightColor: "#fff3e0",
      };
    case "CANCEL":
      return {
        label: "CANCEL",
        color: "error" as const,
        mainColor: "#d32f2f",
        lightColor: "#ffebee",
      };
    case "FINISH":
      return {
        label: "เสร็จสิ้น",
        color: "info" as const,
        mainColor: "#0288d1",
        lightColor: "#e1f5fe",
      };
    default:
      return {
        label: status,
        color: "default" as const,
        mainColor: "#757575",
        lightColor: "#f5f5f5",
      };
  }
};

type Props = {
  data: IInvoiceDetailItem;
  processDate: string;
};

export default function InvoiceFullCard({ data, processDate }: Props) {
  const { label, color, mainColor, lightColor } = getStatusConfig(data.status);

  return (
    <Card
      elevation={0}
      sx={{
        mb: 3,
        borderRadius: 4, // มุมโค้งมนมากหน่อย ให้ดู Modern
        border: "1px solid",
        borderColor: "divider",
        p: 3,
        position: "relative",
        overflow: "hidden",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.04)", // เงาฟุ้งๆ
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>
        {/* ================= HEADER ================= */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={2}
          sx={{ mb: 3 }}
        >
          {/* Left: Invoice ID */}
          <Stack direction="row" gap={2} alignItems="center">
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "14px",
                bgcolor: lightColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: mainColor,
              }}
            >
              <ArticleIcon sx={{ fontSize: 24 }} />
            </Box>
            <Box>
              <Typography
                variant="caption"
                color="text.secondary"
                fontWeight="bold"
              >
                ใบแจ้งหนี้ / INVOICE
              </Typography>
              <Typography
                variant="h5"
                fontWeight="800"
                sx={{ color: "text.primary", lineHeight: 1.2 }}
              >
                INV202601-{data.id}
              </Typography>
            </Box>
          </Stack>

          {/* Right: Date & Status */}
          <Stack
            alignItems={{ xs: "flex-start", sm: "flex-end" }}
            spacing={0.5}
          >
            <Chip
              label={label}
              color={color}
              size="small"
              sx={{ fontWeight: "bold", borderRadius: "8px", px: 1 }}
            />
            <Stack direction="row" alignItems="center" gap={0.5}>
              <CalendarTodayIcon
                sx={{ fontSize: 14, color: "text.secondary" }}
              />
              <Typography variant="body2" color="text.secondary">
                {processDate}
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Divider sx={{ mb: 3, borderStyle: "dashed" }} />

        {/* ================= BODY ================= */}
        <Grid container spacing={4}>
          {/* --- LEFT: Customer Info (Clean Text) --- */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{
                textTransform: "uppercase",
                letterSpacing: 1,
                mb: 2,
                fontSize: 11,
              }}
            >
              BILL TO CUSTOMER
            </Typography>

            <Stack direction="row" gap={2}>
              <Box sx={{ mt: 0.5, color: "text.secondary" }}>
                <BusinessIcon />
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {data.customerName}
                </Typography>
                <Stack direction="row" gap={1} alignItems="flex-start">
                  <PlaceIcon
                    sx={{ fontSize: 16, color: "text.disabled", mt: 0.3 }}
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ maxWidth: 350 }}
                  >
                    368/2 ถ.เชียงใหม่-ลำปาง ตำบลฟ้าฮ่าม <br />
                    อำเภอเมืองเชียงใหม่ จังหวัดเชียงใหม่
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Grid>

          {/* --- RIGHT: Room Info (Highlighted Box) --- */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                bgcolor: "#fafafa", // สีพื้นหลังเทาอ่อนมาก
                borderRadius: 3,
                p: 2,
                border: "1px solid",
                borderColor: "grey.200",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* รายละเอียดสัญญา */}
              <Box>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                >
                  เลขที่สัญญา / Contract
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  gap={0.5}
                  sx={{ mt: 0.5, mb: 1 }}
                >
                  <FingerprintIcon
                    sx={{ fontSize: 16, color: "text.disabled" }}
                  />
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    color="text.primary"
                  >
                    CT312513{data.id}
                  </Typography>
                </Stack>
              </Box>

              {/* เลขห้อง (Hero) */}
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%", // วงกลม
                  border: `3px solid ${lightColor}`, // ขอบสีตามสถานะ
                  bgcolor: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
              >
                <Typography
                  variant="caption"
                  color="text.disabled"
                  sx={{ fontSize: 9, mb: -0.5 }}
                >
                  ROOM
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight="800"
                  sx={{ color: mainColor }}
                >
                  {data.roomNumber}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
