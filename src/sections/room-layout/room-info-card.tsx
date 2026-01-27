"use client";

import React from "react";
import { Card, Typography, Stack, Divider } from "@mui/material";
import RoomInfoItem from "./room-info-item";
import { RoomInfo } from "@/src/models/types";

type Props = {
  data: RoomInfo;
};

const RoomInfoCard: React.FC<Props> = ({ data }) => {
  return (
    <Card
      sx={{
        maxWidth: 1100,
        width: "100%",
        height: 180, // คุมขนาด card
        mx: "auto", // card กลางจอ
        borderRadius: 4,
        border: "1px solid",
        borderColor: "grey.300",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.08)",
        px: 4,
        py: 3,
        bgcolor: "#fff",
      }}
    >
      {/* ===== Title ===== */}
      <Typography fontSize={18} fontWeight={600} mb={2}>
        รายละเอียดห้อง
      </Typography>

      <Divider
        sx={{
          mb: 3,
          borderColor: "grey.300",
        }}
      />

      {/* ===== Content ===== */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        divider={<Divider orientation="vertical" flexItem sx={{ mx: 3 }} />}
      >
        <RoomInfoItem label="เลขห้อง" value={data.roomNo} icon="room" />

        <RoomInfoItem label="สาขา" value={data.branch} icon="branch" />

        <RoomInfoItem label="สถานที่" value={data.location} icon="location" />

        <RoomInfoItem label="ที่ตั้ง" value={data.address} icon="address" />
      </Stack>
    </Card>
  );
};

export default RoomInfoCard;
