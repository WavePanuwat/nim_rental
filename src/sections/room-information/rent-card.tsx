// sections/room-information/rent-card.tsx
import { Box, Card, Typography, Stack } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { RentItem } from "./types";

type Props = {
  item: RentItem;
  onDelete: (id: string) => void;
};

const RentCard: React.FC<Props> = ({ item, onDelete }) => {
  return (
    <Card
      sx={{
        width: 1300,
        height: 200,
        borderRadius: 4,
        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        px: 5,
      }}
    >
      {/* Approved */}
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
      <Box
        onClick={() => onDelete(item.id)}
        sx={{
          position: "absolute",
          bottom: 12,
          right: 12,
          bgcolor: "#e53935",
          color: "#fff",
          px: 2,
          py: 0.8,
          borderRadius: 1,
          display: "flex",
          alignItems: "center",
          gap: 0.8,
          cursor: "pointer",
          "&:hover": {
            bgcolor: "#d32f2f",
          },
        }}
      >
        <DeleteOutlineIcon sx={{ fontSize: 18 }} />
        <Typography fontSize={14} fontWeight={600}>
          ลบ
        </Typography>
      </Box>

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
              width: 120,
              height: 120,
              borderRadius: "50%",
              bgcolor: "#c5d6f2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PersonOutlineIcon sx={{ fontSize: 60, color: "#1f3349" }} />
          </Box>

          <Box>
            <Typography fontWeight={700} fontSize={24}>
              {item.renterType}
            </Typography>
            <Typography fontSize={18} color="text.secondary">
              ประเภทผู้เช่า
            </Typography>
          </Box>
        </Stack>

        <Box sx={{ height: 150, bgcolor: "divider" }} />

        {/* Right */}
        <Stack spacing={1} sx={{ pl: 4 }}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <DescriptionOutlinedIcon fontSize="small" />
            <Typography fontSize={16}>
              เลขที่การเช่า : {item.rentNo}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1.5} alignItems="center">
            <CalendarTodayOutlinedIcon fontSize="small" />
            <Typography fontSize={16}>
              วันที่เริ่มต้น : {item.startDate}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1.5} alignItems="center">
            <CalendarTodayOutlinedIcon fontSize="small" />
            <Typography fontSize={16}>
              วันที่สิ้นสุด : {item.endDate}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
};

export default RentCard;
