"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid";

import Header from "@/src/components/header";
import SearchFilter from "../search-filter";
import Tab from "../tab";
import Card from "../card";

import { getAllBuildings } from "@/src/data/room-data/registry";
import { BuildingGroup } from "@/src/models/types";

export default function HomeView() {
  const router = useRouter();
  const [tabValue, setTabValue] = useState(0);

  // ✅ ดึงข้อมูลอาคารทั้งหมดจาก registry
  const buildings = useMemo(() => getAllBuildings(), []);

  // ✅ filter ตาม group (tab)
  const filteredBuildings = useMemo(() => {
    const groups: BuildingGroup[] = ["transport", "leasing", "daily"];
    return buildings.filter(
      (item) => item.group === groups[tabValue]
    );
  }, [buildings, tabValue]);

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
                    onManage={(id) =>
                      router.push(`/room-layout?id=${id}`)
                    }
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
