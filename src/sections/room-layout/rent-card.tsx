"use client";

import { Box, Card, Typography, Stack, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { RentItem } from "@/src/models/types";

type Props = {
  item: RentItem;
  onDelete: (id: string) => void;
  onClick: (item: RentItem) => void;
};

const RentCard: React.FC<Props> = ({ item, onDelete, onClick }) => {
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(item.id);
  };

  return (
    <Card
      onClick={() => onClick(item)} // เปิด tenant dialog
      sx={{
        width: "100%",
        maxWidth: 900,
        minHeight: 130,
        padding: "2",
        borderRadius: 2.5,
        position: "relative",
        display: "flex",
        alignItems: "center",
        px: 5,
        cursor: "pointer",
        // Animation 
        transition: "all 0.25s ease",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0px 10px 24px rgba(0,0,0,0.15)",
          borderColor: "primary.main",
        },
        border: "1px solid transparent",
      }}
    >
      {/* Status */}
      <Typography
        fontSize={11}
        fontWeight={600}
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          bgcolor: "#e8f5e9",
          color: "#2e7d32",
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
        }}
      >
        {item.status}
      </Typography>

      {/* Delete */}
      <IconButton
        onClick={handleDelete}
        sx={{
          position: "absolute",
          bottom: 12,
          right: 12,
          bgcolor: "#e53935",
          color: "#fff",
          borderRadius: 1,
          px: 1.5,
          "&:hover": {
            bgcolor: "#d32f2f",
          },
        }}
      >
        <DeleteOutlineIcon fontSize="small" />
      </IconButton>

      {/* Content */}
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "420px 1px 1fr",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <Stack direction="row" spacing={3} alignItems="center">
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              bgcolor: "#c5d6f2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PersonOutlineIcon sx={{ fontSize: 45, color: "#1f3349" }} />
          </Box>

          <Box>
            <Typography fontWeight={600} fontSize={22}>
              {item.renterType}
            </Typography>
            <Typography fontSize={16} color="text.secondary">
              ประเภทผู้เช่า
            </Typography>
          </Box>
        </Stack>

        <Box sx={{ height: 90, bgcolor: "divider" }} />

        {/* Right */}
        <Stack spacing={1} sx={{ pl: 4 }}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <DescriptionOutlinedIcon fontSize="small" />
            <Typography fontSize={14}>เลขที่การเช่า : {item.rentNo}</Typography>
          </Stack>

          <Stack direction="row" spacing={1.5} alignItems="center">
            <CalendarTodayOutlinedIcon fontSize="small" />
            <Typography fontSize={14}>
              วันที่เริ่มต้น : {item.startDate}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1.5} alignItems="center">
            <CalendarTodayOutlinedIcon fontSize="small" />
            <Typography fontSize={14}>
              วันที่สิ้นสุด : {item.endDate}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
};

export default RentCard;
