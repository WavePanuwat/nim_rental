"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";

import { IInvoiceProcessItem, IInvoiceDetailItem } from "@/src/models/types";
import { INVOICE_DETAILS_DB } from "@/src/data/invoice-process-mock";

import DialogHeader from "@/src/components/dialog";
import InvoiceProcessDetailModel from "./invoice-process-detail-model";

// Import Components ที่แยกออกไป
import InvoiceProcessHeader from "../invoice-process-header";
import InvoiceProcessSummary from "../invoice-process-summary";
import InvoiceProcessTable from "../invoice-process-model-table";

type Props = {
  open: boolean;
  onClose: () => void;
  row: IInvoiceProcessItem | null;
};

export default function InvoiceProcessModel({ open, onClose, row }: Props) {
  const [openDetail, setOpenDetail] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IInvoiceDetailItem | null>(
    null,
  );

  const handleOpenDetail = (item: IInvoiceDetailItem) => {
    setSelectedItem(item);
    setOpenDetail(true);
  };

  const handleCloseDetail = () => setOpenDetail(false);

  // Prepare Data
  const detailData =
    row && INVOICE_DETAILS_DB[row.id]
      ? INVOICE_DETAILS_DB[row.id]
      : {
          summary: {
            grandTotal: 0,
            totalRent: 0,
            totalWater: 0,
            totalElec: 0,
            totalOther: 0,
          },
          items: [],
        };

  const { summary, items } = detailData;

  // [เพิ่ม] ดึงวันที่จาก row (ถ้าไม่มีให้ใส่ขีด -)
  const currentProcessDate = row?.processDate || "-";

  return (
    <>
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
          {/* ---------------- Info Header ---------------- */}
          <InvoiceProcessHeader row={row} />

          {/* ---------------- Summary Section ---------------- */}
          <InvoiceProcessSummary summary={summary} />

          {/* ---------------- Table Section ---------------- */}
          <InvoiceProcessTable items={items} onOpenDetail={handleOpenDetail} />
        </Box>
      </Dialog>

      {/* ---------------- Nested Detail Modal ---------------- */}
      <InvoiceProcessDetailModel
        open={openDetail}
        onClose={handleCloseDetail}
        data={selectedItem}
        processDate={currentProcessDate} // [เพิ่ม] ส่งวันที่เข้าไปที่ Modal ลูก
      />
    </>
  );
}
