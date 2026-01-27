"use client";

import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";

import { IInvoiceDetailItem } from "@/src/models/types";
import DialogHeader from "@/src/components/dialog";
import { calculateInvoiceDetails } from "@/src/data/invoice-process-mock";

// เปลี่ยนจาก CustomerInfo เป็น FullCard ตัวใหม่ที่เราทำ
import InvoiceSummary from "../invoice-process-detail-summary";
import InvoiceItemsTable from "../invoice-process-detail-table";
import InvoiceFullCard from "../invoice-process-customer-info";

type Props = {
  open: boolean;
  onClose: () => void;
  data: IInvoiceDetailItem | null;
  processDate: string; // [เพิ่ม] รับค่าวันที่
};

export default function InvoiceProcessDetailModel({
  open,
  onClose,
  data,
  processDate, // [เพิ่ม]
}: Props) {
  if (!data) return null;

  // Logic calculation
  const calculations = calculateInvoiceDetails(data);

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

      <Box sx={{ p: 3, maxWidth: 1200, mx: "auto", width: "100%" }}>
        {/* ใช้ Component ใหม่ และส่งวันที่เข้าไป */}
        <InvoiceFullCard data={data} processDate={processDate} />

        {/* 3. Summary Cards */}
        <InvoiceSummary totals={calculations.totals} />

        {/* 4. Items Table */}
        <InvoiceItemsTable calculations={calculations} />
      </Box>
    </Dialog>
  );
}
