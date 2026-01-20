"use client";

import {
  Card,
  CardContent,
  Stack,
  Typography,
  Button,
  Box,
  alpha,
} from "@mui/material";
import Grid from "@mui/material/Grid";

import DescriptionIcon from "@mui/icons-material/Description";
import HomeWork from "@mui/icons-material/HomeWork";
import CheckCircle from "@mui/icons-material/CheckCircle";
import MeetingRoom from "@mui/icons-material/MeetingRoom";
import MoneyOff from "@mui/icons-material/MoneyOff";
import BusinessIcon from "@mui/icons-material/Business";

import { Building } from "@/src/models/types";

interface Props {
  building: Building;
  onManage: (id: number) => void;
}

export default function BuildingCard({ building, onManage }: Props) {
  return (
    <Card
      elevation={1}
      sx={{
        height: "100%",
        borderRadius: "10px",
        border: "1px solid",
        borderColor: "rgba(234, 236, 240, 1)",
        bgcolor: "#fff",
        transition: "border-color 0.2s ease-in-out",
        position: "relative",
        overflow: "visible",
        "&:hover": {
          borderColor: "#1976D2",
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{ mb: 3 }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              sx={{
                width: 52,
                height: 52,
                borderRadius: "16px",
                background: "linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)",
                color: "#1976D2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BusinessIcon fontSize="medium" />
            </Box>

            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#101828",
                  lineHeight: 1.3,
                }}
              >
                {building.name}
              </Typography>
            </Box>
          </Stack>

          <Button
            className="manage-btn"
            variant="contained"
            size="small"
            disableElevation
            startIcon={<DescriptionIcon sx={{ fontSize: 18 }} />}
            onClick={() => onManage(building.id)}
            sx={{
              textTransform: "none",
              borderRadius: "px",
              bgcolor: "#1976D2",
              color: "#fff",
              px: 2.5,
              py: 0.8,
              fontWeight: 600,
              transition: "all 0.2s ease",
              "&:hover": { bgcolor: "#1565C0" },
            }}
          >
            จัดการ
          </Button>
        </Stack>

        <Box
          sx={{
            bgcolor: "#F9FAFB",
            borderRadius: "16px",
            p: 2,
            border: "1px solid #F2F4F7",
          }}
        >
          <Grid container spacing={2}>
            <StatItem
              icon={<HomeWork sx={{ fontSize: 18 }} />}
              label="ห้องทั้งหมด"
              value={building.stats.total}
              color="#7C3AED"
            />
            <StatItem
              icon={<CheckCircle sx={{ fontSize: 18 }} />}
              label="ว่าง"
              value={building.stats.empty}
              color="#039855"
            />
            <StatItem
              icon={<MeetingRoom sx={{ fontSize: 18 }} />}
              label="ไม่ว่าง"
              value={building.stats.occupied}
              color="#3355AA"
            />
            <StatItem
              icon={<MoneyOff sx={{ fontSize: 18 }} />}
              label="ค้างชำระ"
              value={building.stats.unpaid}
              color="#D92D20"
            />
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}

function StatItem({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  color: string;
}) {
  return (
    <Grid size={{ xs: 6, sm: 3 }}>
      <Stack spacing={0.5} alignItems="flex-start">
        <Stack direction="row" alignItems="center" spacing={0.8}>
          <Box
            sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: color }}
          />
          <Typography
            variant="caption"
            sx={{ color: "#667085", fontWeight: 600 }}
          >
            {label}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1} sx={{ pl: 1 }}>
          <Box
            sx={{
              color: color,
              display: "flex",
              opacity: 0.9,
              p: 0.5,
              borderRadius: "6px",
              bgcolor: alpha(color, 0.1),
            }}
          >
            {icon}
          </Box>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, color: "#1D2939" }}
          >
            {value}
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
}
