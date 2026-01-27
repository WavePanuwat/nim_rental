import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

// Icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import RestoreIcon from "@mui/icons-material/Restore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Import Type & Helper
import {
  RentalProcessDetail,
  InvoiceDetail,
  getInvoiceDetail,
} from "@/src/data/rental-process-mock";

// Import Dialog ใบแจ้งหนี้
import InvoiceDetailDialog from "@/src/sections/rental-process/view/rental-detail-model";

// --- Helper & Config ---
const fCurrency = (number: number) =>
  new Intl.NumberFormat("th-TH", { minimumFractionDigits: 2 }).format(number);

const TABLE_HEAD = [
  { id: "index", label: "ลำดับ", align: "center", width: 60 },
  { id: "contract", label: "เลขที่สัญญา", align: "center", width: 140 },
  { id: "room", label: "เลขที่ห้อง", align: "center", width: 100 },
  { id: "rent", label: "ค่าเช่า", align: "right", width: 120 },
  { id: "water", label: "ค่าน้ำ", align: "right", width: 100 },
  { id: "electric", label: "ค่าไฟ", align: "right", width: 100 },
  { id: "total", label: "จำนวนเงิน", align: "right", width: 140 },
  { id: "status", label: "สถานะ", align: "center", width: 120 },
  { id: "action", label: "", align: "center", width: 160 },
] as const;

type Props = {
  data: RentalProcessDetail[];
};

export default function RentalProcessDetailTable({ data }: Props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // --- 1. State สำหรับ Dialog ใบแจ้งหนี้ ---
  const [openInvoice, setOpenInvoice] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<InvoiceDetail | null>(
    null,
  );

  // --- 2. ฟังก์ชันกดปุ่ม "ดูรายละเอียด" ---
  const handleViewInvoice = (rowId: string) => {
    const invoiceData = getInvoiceDetail(rowId); // ดึงข้อมูลจาก Mock โดยใช้ ID
    setSelectedInvoice(invoiceData);
    setOpenInvoice(true);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Card
        sx={{
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
          boxShadow: "0px 12px 24px -4px rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
          overflow: "hidden",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 900 }}>
            <TableHead sx={{ bgcolor: "#1e293b" }}>
              <TableRow>
                {TABLE_HEAD.map((head) => (
                  <TableCell
                    key={head.id}
                    align={head.align as "center" | "right" | "left"}
                    width={head.width}
                    sx={{
                      color: "white",
                      fontWeight: 600,
                      py: 1.8,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {head.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={row.id} hover>
                    <TableCell align="center" sx={{ color: "text.secondary" }}>
                      {page * rowsPerPage + index + 1}
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: 500 }}>
                      {row.contractNo}
                    </TableCell>
                    <TableCell align="center">{row.roomNo}</TableCell>
                    <TableCell align="right" sx={{ color: "text.secondary" }}>
                      {fCurrency(row.rent)}
                    </TableCell>
                    <TableCell align="right" sx={{ color: "text.secondary" }}>
                      {fCurrency(row.water)}
                    </TableCell>
                    <TableCell align="right" sx={{ color: "text.secondary" }}>
                      {fCurrency(row.electric)}
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 700, color: "text.primary" }}
                      >
                        {fCurrency(row.total)}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        spacing={0.5}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            color:
                              row.status === "CONFIRM"
                                ? "success.main"
                                : "warning.main",
                            fontWeight: "bold",
                            border: "1px solid",
                            borderColor:
                              row.status === "CONFIRM"
                                ? "success.main"
                                : "warning.main",
                            px: 1,
                            borderRadius: 0.5,
                            bgcolor:
                              row.status === "CONFIRM"
                                ? "rgba(46, 125, 50, 0.08)"
                                : "rgba(237, 108, 2, 0.08)",
                          }}
                        >
                          {row.status}
                        </Typography>
                      </Stack>
                    </TableCell>

                    <TableCell align="center">
                      <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="center"
                      >
                        <Tooltip title="ดูรายละเอียด">
                          <Button
                            variant="outlined"
                            size="small"
                            startIcon={<VisibilityIcon />}
                            // --- 3. ผูก event onClick ---
                            onClick={() => handleViewInvoice(row.id)}
                            sx={{
                              minWidth: 80,
                              py: 0.5,
                              fontSize: "0.75rem",
                              color: "text.secondary",
                              borderColor: "rgba(145, 158, 171, 0.32)",
                              whiteSpace: "nowrap",
                            }}
                          >
                            ดูรายละเอียด
                          </Button>
                        </Tooltip>

                        <Tooltip title="คำนวณใหม่">
                          <Button
                            size="small"
                            startIcon={<RestoreIcon />}
                            sx={{
                              minWidth: 80,
                              py: 0.5,
                              fontSize: "0.75rem",
                              bgcolor: "action.hover",
                              color: "text.primary",
                              "&:hover": { bgcolor: "action.selected" },
                              whiteSpace: "nowrap",
                            }}
                          >
                            Re-Process
                          </Button>
                        </Tooltip>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ borderTop: "1px solid", borderColor: "divider" }}
        />
      </Card>

      {/* --- 4. แสดง Dialog ใบแจ้งหนี้ --- */}
      <InvoiceDetailDialog
        open={openInvoice}
        onClose={() => setOpenInvoice(false)}
        invoice={selectedInvoice}
      />
    </>
  );
}
