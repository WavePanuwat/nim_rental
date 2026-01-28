"use client";

import React, { useMemo } from "react";
import Dialog from "@mui/material/Dialog";
import DialogHeader from "@/src/components/dialog";
import Box from "@mui/material/Box";

import { getInvoicesByPaymentId } from "@/src/data/payment-mock";
import PaymentModelFilter from "../payment-model-filter";
import PaymentModelTable from "../payment-model-table";

type Props = {
  open: boolean;
  onClose: () => void;
  id: number | null;
};

export default function PaymentModel({ open, onClose, id }: Props) {
  const invoiceData = useMemo(() => {
    return getInvoicesByPaymentId(id);
  }, [id]);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          display: "flex",
          flexDirection: "column",
          bgcolor: "#f5f5f5",
        },
      }}
    >
      <DialogHeader onClose={onClose} />

      <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}>
        <PaymentModelFilter />
        <PaymentModelTable data={invoiceData} />
      </Box>
    </Dialog>
  );
}
