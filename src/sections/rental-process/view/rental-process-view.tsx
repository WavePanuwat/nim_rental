"use client";

import { Container, Box } from "@mui/material";
import RentalProcessFilter from "@/src/sections/rental-process/rental-process-filter";
import RentalProcessTable from "@/src/sections/rental-process/rental-process-table";
import { _rentalProcessMock } from "@/src/data/rental-process-mock";
import Header from "@/src/components/header";
import Menu from "@/src/components/menu";

export default function RentalProcessView() {
  return (
    <>
      <Box sx={{ position: "sticky", top: 0, zIndex: 1100 }}>
        <Header isDashboard />
        <Menu />
      </Box>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          mt: 5,
          px: { xs: 2, md: 0 },
        }}
      >
        {/* 1. ส่วน Filter ด้านบน */}
        <RentalProcessFilter />

        {/* 2. ส่วน Table ด้านล่าง */}
        <RentalProcessTable tableData={_rentalProcessMock} />
      </Container>
    </>
  );
}
