"use client";

import { Paper, Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import InfoRow from "./info-row";
import RentalHeaderButton from "./rental-header-button";
import {
  ROOM_RENTAL_LEFT,
  ROOM_RENTAL_RIGHT,
} from "@/src/data/room-rental/room-rental.mock";

const RentalInfoRow = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        width: "100%",
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          backgroundColor: "#1f2d3d",
          height: 50,
          px: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <RentalHeaderButton />
      </Box>

      {/* Body */}
      <Box
        sx={{
          p: 2,
          display: "grid",
          gridTemplateColumns: "7fr 5fr",
          columnGap: 6,
        }}
      >
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          sx={{
            position: "absolute",
            top: 72,
            right: 16,
          }}
        >
          แก้ไข
        </Button>

        <Box>
          {ROOM_RENTAL_LEFT.map((item, index) => (
            <InfoRow key={index} label={item.label} value={item.value} />
          ))}
        </Box>

        <Box>
          {ROOM_RENTAL_RIGHT.map((item, index) => (
            <InfoRow key={index} label={item.label} value={item.value} />
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default RentalInfoRow;
