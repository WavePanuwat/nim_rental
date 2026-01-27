"use client";

import { useState } from "react";
import { Paper, Box, Tabs, Tab, Typography } from "@mui/material";
import { RENTAL_TABS } from "@/src/data/room-rental/room-rental.mock";

import TenantTab from "./tenant-tab/tenant-tab";

const TAB_HEADER_HEIGHT = 60;

const RentalDialogPaper = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Paper
      elevation={1}
      sx={{
        width: "100%",
        borderRadius: 4,
        overflow: "hidden",
        bgcolor: "#f5f6f8",
      }}
    >
      {/* Header Tabs */}
      <Box
        sx={{
          height: TAB_HEADER_HEIGHT,
          backgroundColor: "#1f2d3d",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Tabs
          value={tabIndex}
          onChange={(_, value) => setTabIndex(value)}
          variant="scrollable"
          scrollButtons="auto"
          textColor="inherit"
          sx={{
            minHeight: TAB_HEADER_HEIGHT,
            "& .MuiTab-root": {
              minHeight: TAB_HEADER_HEIGHT,
              color: "#fff",
              fontSize: 16,
              textTransform: "none",
              px: 3,
            },
            "& .Mui-selected": {
              backgroundColor: "#2f80ed",
            },
          }}
        >
          {RENTAL_TABS.map((label, index) => (
            <Tab key={index} label={label} />
          ))}
        </Tabs>
      </Box>

      {/* Content */}
      <Box sx={{ p: 3 }}>
        {tabIndex === 0 && <TenantTab />}
        {tabIndex !== 0 && (
          <Typography color="text.secondary">ยังไม่มีข้อมูล</Typography>
        )}
      </Box>
    </Paper>
  );
};

export default RentalDialogPaper;
