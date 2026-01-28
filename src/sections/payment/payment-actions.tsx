"use client";

import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DescriptionIcon from "@mui/icons-material/Description";

export default function PaymentActions() {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        mb: 2,
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Button
        variant="contained"
        color="success"
        startIcon={<DescriptionIcon />}
        sx={{
          backgroundColor: "#66bb6a",
          "&:hover": { backgroundColor: "#57a05b" },
          fontWeight: 600,
        }}
      >
        ส่งออก Excel
      </Button>
    </Box>
  );
}
