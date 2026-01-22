"use client";

import React from "react";
import {
  Dialog,
  DialogTitle,
  IconButton,
  Typography,
  Fade,
  Box,
  Stack,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";

import RoomInfoCard from "@/src/sections/room-layout/room-info-card";
import RentInfoCard from "@/src/sections/room-layout/rent-info-card";

import { Room, RentItem, RoomInfo } from "@/src/models/types";

//  ดึง building จาก registry
import { getBuildingById } from "@/src/data/room-data/registry";

/* ===== Transition (Fade) ===== */
const Transition = React.forwardRef<
  unknown,
  TransitionProps & { children: React.ReactElement }
>(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />;
});

interface RoomDetailModalProps {
  open: boolean;
  onClose: () => void;
  room: Room | null;
  rentList: RentItem[];
  onAddRent: () => void;
  onDeleteRent: (id: string) => void;
}

export default function RoomDetailModal({
  open,
  onClose,
  room,
  rentList,
  onAddRent,
  onDeleteRent,
}: RoomDetailModalProps) {
  if (!room) return null;

  //  ดึงข้อมูลอาคารจาก registry
  const building = getBuildingById(room.buildingId);

  /* ===============================
   * Map Room + Building -> RoomInfo
   * =============================== */
  const roomInfo: RoomInfo = {
    roomNo: room.name,                 // เลขห้อง
    branch: room.location,             // สาขา
    location: building?.name ?? "-",   // สถานที่
    address: room.address,             // ที่อยู่
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      {/* ===== Header ===== */}
      <DialogTitle
        sx={{
          bgcolor: "#D70024",
          color: "white",
          display: "flex",
          alignItems: "center",
          py: 1,
          boxShadow: 2,
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            color: "white",
            ml: "auto",
            display: "flex",
            gap: 0.5,
          }}
        >
          <CloseIcon />
          <Typography fontWeight={600}>ปิด</Typography>
        </IconButton>
      </DialogTitle>

      {/* ===== Content ===== */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          justifyContent: "center",
          py: 4,
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 1200 }}>
          <Stack spacing={4}>
            {/* รายละเอียดห้อง */}
            <RoomInfoCard data={roomInfo} />

            {/* ข้อมูลการเช่า */}
            <RentInfoCard
              rentList={rentList}
              onAdd={onAddRent}
              onDelete={onDeleteRent}
            />
          </Stack>
        </Box>
      </Box>
    </Dialog>
  );
}
