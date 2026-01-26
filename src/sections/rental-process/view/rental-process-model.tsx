import { useMemo } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";

import DialogHeader from "@/src/components/dialog";
import RentalProcessDetailTopBar from "@/src/sections/rental-process/rental-process-topbar";
import RentalProcessDetailSummary from "@/src/sections/rental-process/rental-process-summary";
import RentalProcessDetailTable from "@/src/sections/rental-process/rental-detail-table";

import {
  _rentalProcessMock,
  getRentalProcessDetail,
} from "@/src/data/rental-process-mock";

type RentalProcessDetailDialogProps = {
  open: boolean;
  onClose: () => void;
  rowId: string | null;
};

export default function RentalProcessDetailDialog({
  open,
  onClose,
  rowId,
}: RentalProcessDetailDialogProps) {
  const mainItem = useMemo(() => {
    if (!rowId) return null;
    return _rentalProcessMock.find((item) => item.id === rowId) ?? null;
  }, [rowId]);

  // ข้อมูลตารางรายละเอียด
  const detailData = useMemo(() => {
    return rowId ? getRentalProcessDetail(rowId) : [];
  }, [rowId]);

  // คำนวณข้อมูลสรุป
  const totalRooms = detailData.length;
  const pendingCount = detailData.filter(
    (item) => item.status === "PENDING",
  ).length;

  // ป้องกัน render ตอนยังไม่มีข้อมูล
  if (!mainItem) return null;

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

      {/* ===== Body ===== */}
      <Box
        sx={{
          p: 3,
          flexGrow: 1,
          overflowY: "auto",
        }}
      >
        {/* แถบข้อมูลด้านบน */}
        <RentalProcessDetailTopBar
          cycle={mainItem.cycle}
          processDate={mainItem.processDate}
          status={mainItem.status}
        />

        {/* การ์ดสรุป */}
        <RentalProcessDetailSummary
          totalRooms={totalRooms}
          waterPending={pendingCount}
          elecPending={pendingCount}
        />

        {/* ตารางรายละเอียด */}
        <RentalProcessDetailTable data={detailData} />
      </Box>
    </Dialog>
  );
}
