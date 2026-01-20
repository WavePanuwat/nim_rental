"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import Header from "@/src/components/header";
import SearchFilter from "../search-filter";
import Tab from "../tab";
import Card from "../card";

import { MOCK_BUILDINGS } from "@/src/data/mock-data";
import { BuildingGroup } from "@/src/models/types";

export default function HomeView() {
  const router = useRouter();
  const [tabValue, setTabValue] = useState(0);

  const filteredBuildings = useMemo(() => {
    const groups: BuildingGroup[] = ["transport", "leasing", "daily"];
    return MOCK_BUILDINGS.filter((item) => item.group === groups[tabValue]);
  }, [tabValue]);

  return (
    <>
      <Header isDashboard={false} />

      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#F9FAFB",
          maxWidth: "1600px",
          mx: "auto",
          px: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth={false} sx={{ maxWidth: "1200px", py: 6 }}>
          <SearchFilter />

          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "14px",
              boxShadow: "0 6px 18px rgba(0, 0, 0, 0.06)",
              p: 3,
            }}
          >
            <Tab value={tabValue} onChange={(_, v) => setTabValue(v)} />

            <Grid container spacing={2}>
              {filteredBuildings.map((building) => (
                <Grid size={{ xs: 12, md: 6 }} key={building.id}>
                  <Card
                    building={building}
                    onManage={(id) => router.push(`/room-layout?id=${id}`)}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
