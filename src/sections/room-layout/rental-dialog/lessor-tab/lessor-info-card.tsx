"use client";

import React from "react";
import { Paper, Box, Typography, Stack, IconButton, Avatar } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BadgeIcon from "@mui/icons-material/Badge";

// Define Type (เพิ่ม idCard และ taxId ให้ครบ)
export interface LessorData {
  name: string;
  type: string;
  address: string;
  phone: string;
  idCard: string; // เลขบัตรประชาชน
  taxId: string;  // เลขนิติบุคคล
}

interface Props {
  data: LessorData;
  onDelete?: () => void;
}

const InfoField = ({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) => (
  <Box sx={{ minWidth: 0 }}>
    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
      {icon && <Box sx={{ color: "text.secondary", display: "flex", flexShrink: 0 }}>{icon}</Box>}
      <Typography variant="caption" color="text.secondary" noWrap>
        {label}
      </Typography>
    </Stack>
    <Typography variant="body2" fontWeight="medium" color="text.primary" sx={{ wordBreak: 'break-word' }}>
      {value || "-"}
    </Typography>
  </Box>
);

export default function LessorInfoCard({ data, onDelete }: Props) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        position: "relative",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 3 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            sx={{
              width: 48,
              height: 48,
              bgcolor: "primary.main",
              color: "primary.contrastText",
            }}
          >
            <BusinessIcon />
          </Avatar>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              {data.name}
            </Typography>
            <Typography variant="body2" color="primary" fontWeight="medium">
              {data.type}
            </Typography>
          </Box>
        </Stack>
        <IconButton color="error" size="small" onClick={onDelete}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Stack>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "2fr 1fr 1fr 1fr" },
          gap: 3,
        }}
      >
        <InfoField
          label="ที่อยู่"
          value={data.address}
          icon={<LocationOnIcon sx={{ fontSize: 16 }} />}
        />
        <InfoField
          label="เบอร์โทร"
          value={data.phone}
          icon={<PhoneIcon sx={{ fontSize: 16 }} />}
        />
        <InfoField
          label="เลขที่บัตรประชาชน"
          value={data.idCard}
          icon={<BadgeIcon sx={{ fontSize: 16 }} />}
        />
        <InfoField
          label="ทะเบียนนิติบุคคลเลขที่"
          value={data.taxId}
          icon={<BusinessIcon sx={{ fontSize: 16 }} />}
        />
      </Box>
    </Paper>
  );
}