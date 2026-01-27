"use client";

import React from "react";
import {
  Dialog,
  DialogTitle,
  IconButton,
  Typography,
  Fade,
  Box,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";

import RentalInfoRow from "@/src/sections/room-layout/rental-dialog/rental-info-row";
import RentalDialogPaper from "@/src/sections/room-layout/rental-dialog/rental-dialog-paper";
import { RentItem } from "@/src/models/types";

/* ===== Transition ===== */
const Transition = React.forwardRef<
  unknown,
  TransitionProps & { children: React.ReactElement }
>(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />;
});

type Props = {
  open: boolean;
  rent: RentItem | null;
  onClose: () => void;
};

const CONTENT_WIDTH = 1200;

export default function RoomRentalView({ open, rent, onClose }: Props) {
  if (!rent) return null;

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
        <Typography fontWeight={600}>
          ข้อมูลการเช่า
        </Typography>

        <IconButton
          onClick={onClose}
          sx={{ color: "white", ml: "auto", gap: 0.5 }}
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
          bgcolor: "#f5f6f8",
          py: 4,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: CONTENT_WIDTH,
            mx: "auto",
            px: 3,
          }}
        >
          {/* Title */}
          <Typography variant="h6" fontWeight={600} mb={2}>
            รายละเอียดผู้เช่า
          </Typography>

          {/* Info */}
          <RentalInfoRow />

          {/* Tabs */}
          <Box sx={{ mt: 5 }}>
            <RentalDialogPaper />
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}
