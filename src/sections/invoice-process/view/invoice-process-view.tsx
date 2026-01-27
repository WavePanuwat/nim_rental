"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "@/src/components/header";
import Menu from "@/src/components/menu";

import InvoiceProcessFilter from "../invoice-process-filter";
import InvoiceProcessTable from "../invoice-process-table";

export default function InvoiceProcessView() {
  return (
    <>
      {/* 1. Header & Menu (Sticky) */}
      <Box sx={{ position: "sticky", top: 0, zIndex: 1100 }}>
        <Header isDashboard />
        <Menu />
      </Box>

      {/* 2. Content Container (Width: 1200px) */}
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          mt: 5,
          px: { xs: 2, md: 0 },
        }}
      >
        {/* ส่วน Filter */}
        <InvoiceProcessFilter />

        {/* ส่วน Table */}
        <InvoiceProcessTable />
      </Container>
    </>
  );
}
