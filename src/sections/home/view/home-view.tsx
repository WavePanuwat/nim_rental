"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import SearchFilter from "../search-filter";
import Tab from "../tab";
import Card from "../card";

import { MOCK_BUILDINGS } from "@/src/data/mock-data";
import { BuildingGroup, Building } from "@/src/models/types";

export default function HomeView() {
  const router = useRouter();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleManageClick = (id: number) => {
    router.push(`/room-layout?id=${id}`);
  };

  const filteredBuildings = useMemo(() => {
    const groups: BuildingGroup[] = ["transport", "leasing", "daily"];
    return MOCK_BUILDINGS.filter((item) => item.group === groups[tabValue]);
  }, [tabValue]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F9FAFB",
        maxWidth: "1600px",
        mx: "auto",
        px: { xs: 2, md: 4 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1200px",
          py: { xs: 3, md: 6 },
        }}
      >
        {/* 🔍 Search */}
        <SearchFilter />

        {/* 📦 กล่องครอบ Tabs + Cards */}
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "14px",
            boxShadow: "0 6px 18px rgba(0, 0, 0, 0.06)",
            p: { xs: 2, md: 3 },
          }}
        >
          {/* Tabs */}
          <Tab value={tabValue} onChange={handleTabChange} />

          {/* Cards */}
          <Grid container spacing={2}>
            {filteredBuildings.map((building) => (
              <Grid size={{ xs: 12, md: 6 }} key={building.id}>
                <Card building={building} onManage={handleManageClick} />
              </Grid>
            ))}

            {filteredBuildings.length === 0 && (
              <Typography
                sx={{
                  p: 3,
                  color: "text.secondary",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                ไม่พบข้อมูล
              </Typography>
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
