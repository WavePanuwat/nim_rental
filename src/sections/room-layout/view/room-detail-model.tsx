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
import RoomTenantView from "./room-rental-view";

import { Room, RentItem, RoomInfo } from "@/src/models/types";
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
  /* ===============================
   * State (ต้องอยู่บนสุด)
   * =============================== */
  const [openTenantView, setOpenTenantView] = React.useState(false);
  const [selectedRent, setSelectedRent] = React.useState<RentItem | null>(null);

  if (!room) return null;

  const building = getBuildingById(room.buildingId);

  const roomInfo: RoomInfo = {
    roomNo: room.name,
    branch: room.location,
    location: building?.name ?? "-",
    address: room.address,
  };

  return (
    <>
      {/* ================= Room Detail ================= */}
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
          <Typography fontWeight={600}>ข้อมูลห้อง</Typography>

          <IconButton
            onClick={onClose}
            sx={{ color: "white", ml: "auto", display: "flex", gap: 0.5 }}
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
          <Box sx={{ width: "100%", maxWidth: 1100, mx: "auto" }}>
            <Stack spacing={4}>
              <RoomInfoCard data={roomInfo} />

              <RentInfoCard
                rentList={rentList}
                onAdd={onAddRent}
                onDelete={onDeleteRent}
                onClickRent={(rent) => {
                  setSelectedRent(rent);
                  setOpenTenantView(true);
                }}
              />
            </Stack>
          </Box>
        </Box>
      </Dialog>

      {/* ================= Tenant View ================= */}
      <RoomTenantView
        open={openTenantView}
        rent={selectedRent}
        onClose={() => {
          setOpenTenantView(false);
          setSelectedRent(null);
        }}
      />
    </>
  );
}
