"use client";

import { useState } from "react";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { RentalProcessItem } from "@/src/data/rental-process-mock";

// ★★★ แก้ไข Import ตรงนี้ครับ ★★★
// ให้ชี้ไปที่ไฟล์ Component Dialog ที่เราสร้างไว้ (สมมติว่าอยู่โฟลเดอร์เดียวกันใช้ ./)
import RentalProcessDetailDialog from "@/src/sections/rental-process/view/rental-process-model";

const TABLE_HEAD = [
  { id: "index", label: "ลำดับ", width: 100, align: "center" },
  { id: "processDate", label: "วันที่ประมวลผล", width: 220, align: "center" },
  { id: "cycle", label: "รอบการประมวลผล", width: 200, align: "center" },
  { id: "invoiceCount", label: "จำนวนใบแจ้งหนี้", width: 200, align: "center" },
  { id: "totalAmount", label: "จำนวนเงินรวม", width: 280, align: "center" },
  { id: "status", label: "สถานะ", width: 200, align: "center" },
] as const;

const fCurrency = (number: number) =>
  new Intl.NumberFormat("th-TH", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
  }).format(number);

const getStatusColor = (status: string) => {
  switch (status) {
    case "CONFIRM":
      return "#2e7d32";
    case "PENDING":
      return "#ed6c02";
    case "CANCEL":
      return "#d32f2f";
    default:
      return "text.primary";
  }
};

type Props = {
  tableData: RentalProcessItem[];
};

export default function RentalProcessTable({ tableData }: Props) {
  // 3. สร้าง State สำหรับ Dialog
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // 4. ฟังก์ชันเปิด Dialog
  const handleRowClick = (id: string) => {
    setSelectedId(id);
    setOpenDialog(true);
  };

  // 5. ฟังก์ชันปิด Dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedId(null);
  };

  return (
    <>
      <Card
        sx={{
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          borderRadius: 1,
          overflow: "hidden",
        }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 1200 }} aria-label="rental process table">
            <TableHead sx={{ bgcolor: "#1e293b" }}>
              <TableRow>
                {TABLE_HEAD.map((head, index) => (
                  <TableCell
                    key={head.id}
                    align={head.align as "center" | "right" | "left"}
                    sx={{
                      color: "white",
                      py: 2,
                      width: head.width,
                      minWidth: head.width,
                      fontWeight: "normal",
                      fontSize: "0.95rem",
                    }}
                  >
                    {head.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {tableData.map((row, index) => (
                <TableRow
                  key={row.id}
                  hover
                  // 6. ใส่ onClick ที่นี่
                  onClick={() => handleRowClick(row.id)}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:hover": { bgcolor: "#f8fafc" },
                    cursor: "pointer", // เปลี่ยนเมาส์เป็นรูปนิ้ว
                    transition: "all 0.2s",
                  }}
                >
                  <TableCell align="center" sx={{ color: "text.secondary" }}>
                    {index + 1}
                  </TableCell>
                  <TableCell align="center">{row.processDate}</TableCell>
                  <TableCell align="center">{row.cycle}</TableCell>
                  <TableCell align="center">{row.invoiceCount}</TableCell>
                  <TableCell align="center">
                    {fCurrency(row.totalAmount)}
                  </TableCell>
                  <TableCell align="center">
                    <Typography
                      variant="body2"
                      sx={{
                        color: getStatusColor(row.status),
                        fontWeight: "bold",
                      }}
                    >
                      {row.status}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}

              {/* Empty State */}
              {tableData.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={TABLE_HEAD.length}
                    align="center"
                    sx={{ py: 4 }}
                  >
                    <Typography variant="body1" color="text.secondary">
                      ไม่พบข้อมูล
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {/* 7. เรียกใช้ Dialog Component */}
      {/* ตอนนี้ import ถูกต้องแล้ว Props จะไม่แดงครับ */}
      <RentalProcessDetailDialog
        open={openDialog}
        onClose={handleCloseDialog}
        rowId={selectedId}
      />
    </>
  );
}
