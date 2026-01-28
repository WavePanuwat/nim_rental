"use client";

import React, { useState } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Header from "@/src/components/header";
import Menu from "@/src/components/menu";

import PaymentFilter from "../payment-filter";
import PaymentActions from "../payment-actions";
import PaymentTable from "../payment-table";

import { mockData } from "@/src/data/payment-mock";
import PaymentModel from "./payment-model";

export default function PaymentView() {
  const [openModel, setOpenModel] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleRowClick = (id: number) => {
    setSelectedId(id);
    setOpenModel(true);
  };

  const handleCloseModel = () => {
    setOpenModel(false);
    setSelectedId(null);
  };

  return (
    <>
      <Box sx={{ position: "sticky", top: 0, zIndex: 1100 }}>
        <Header isDashboard />
        <Menu />
      </Box>

      <Box
        component="main"
        sx={{
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
          py: 5,
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1200px",
            mx: "auto",
            px: { xs: 2, md: 0 },
          }}
        >
          <PaymentFilter />

          <PaymentActions />

          <PaymentTable tableData={mockData} onRowClick={handleRowClick} />
        </Container>
      </Box>

      <PaymentModel
        open={openModel}
        onClose={handleCloseModel}
        id={selectedId}
      />
    </>
  );
}
