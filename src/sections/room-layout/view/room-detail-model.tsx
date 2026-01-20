"use client";

import React from "react";
import {
  Dialog,
  DialogTitle,
  IconButton,
  Typography,
  Fade,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";
import { Room } from "@/src/models/types";

// 2. แก้ไข Transition ให้ใช้ Fade
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Fade ref={ref} {...props} />;
});

interface RoomDetailModalProps {
  open: boolean;
  onClose: () => void;
  room: Room | null;
}

export default function RoomDetailModal({
  open,
  onClose,
  room,
}: RoomDetailModalProps) {
  if (!room) return null;

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition} // เรียกใช้ Effect Fade
    >
      {/* Header สีแดง */}
      <DialogTitle
        sx={{
          bgcolor: "#D70024",
          color: "white",
          display: "flex",
          alignItems: "center",
          py: 1,
          boxShadow: 2,
          position: "relative",
          zIndex: 1,
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
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "white",
            }}
          >
            ปิด
          </Typography>
        </IconButton>
      </DialogTitle>
    </Dialog>
  );
}
