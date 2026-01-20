"use client";

import { Box, Tabs, Tab } from "@mui/material";

interface Props {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export default function BuildingTabs({ value, onChange }: Props) {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
      <Tabs value={value} onChange={onChange}>
        <Tab label="นิ่มขนส่ง" />
        <Tab label="นิ่มลิสซิ่ง" />
        <Tab label="นิ่มซิตี้ เดลี่" />
      </Tabs>
    </Box>
  );
}
