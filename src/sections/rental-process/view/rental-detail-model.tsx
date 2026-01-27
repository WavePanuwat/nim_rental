import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { InvoiceDetail } from "@/src/data/rental-process-mock";
import DialogHeader from "@/src/components/dialog";
import InvoiceInfoCard from "../rental-info-card";
import InvoiceItemTable from "../rental-item-table";

const fCurrency = (num: number) =>
  new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);

type RentalDetailDialogProps = {
  open: boolean;
  onClose: () => void;
  invoice: InvoiceDetail | null;
};

export default function RentalDetailDialog({
  open,
  onClose,
  invoice,
}: RentalDetailDialogProps) {
  if (!invoice) return null;

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
      {/* Header */}
      <DialogHeader onClose={onClose} />

      {/* Content */}
      <DialogContent sx={{ p: 0 }}>
        <Box
          sx={{
            px: 3,
            py: 3,
            flexGrow: 1,
            overflowY: "auto",
          }}
        >
          {/* ข้อมูลสัญญา */}
          <InvoiceInfoCard invoice={invoice} />

          {/* ตารางรายการ */}
          <InvoiceItemTable items={invoice.items} />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
