"use client";

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

type IconType = "room" | "branch" | "location" | "address";

type RoomInfoItemProps = {
  label: string;
  value: string;
  icon: IconType;
};

const iconMap: Record<IconType, React.ReactNode> = {
  room: <BedOutlinedIcon />,
  branch: <LocationOnOutlinedIcon />,
  location: <ApartmentOutlinedIcon />,
  address: <PlaceOutlinedIcon />,
};

const RoomInfoItem: React.FC<RoomInfoItemProps> = ({
  label,
  value,
  icon,
}) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {/* Icon */}
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          bgcolor: "#e8f0ff",
          color: "#4c6ef5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {iconMap[icon]}
      </Box>

      {/* Text */}
      <Box>
        <Typography fontSize={13} color="text.secondary">
          {label}
        </Typography>
        <Typography fontSize={18} fontWeight={600}>
          {value}
        </Typography>
      </Box>
    </Stack>
  );
};

export default RoomInfoItem;
