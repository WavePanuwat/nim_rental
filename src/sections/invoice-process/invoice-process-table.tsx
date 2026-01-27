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
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { alpha, useTheme } from "@mui/material/styles";

import { IInvoiceProcessItem } from "@/src/models/types";
import { INVOICE_PROCESS_MOCK_DATA } from "@/src/data/invoice-process-mock";

import InvoiceProcessModel from "@/src/sections/invoice-process/view/invoice-process-model";

const fCurrency = (number: number) => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
};

export default function InvoiceProcessTable() {
  const theme = useTheme();
  const HEADER_COLOR = "#212B36";

  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<IInvoiceProcessItem | null>(
    null,
  );

  const handleRowClick = (row: IInvoiceProcessItem) => {
    setSelectedRow(row);
    setOpenModal(true);
  };

  return (
    <>
      <Container maxWidth={false} sx={{ maxWidth: "1200px", mx: "auto", p: 0 }}>
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
            overflow: "hidden",
            mt: 3,
          }}
        >
          <TableContainer
            component={Paper}
            elevation={0}
            sx={{ borderRadius: 0 }}
          >
            <Table sx={{ minWidth: 800 }} aria-label="invoice process table">
              <TableHead>
                <TableRow sx={{ bgcolor: HEADER_COLOR }}>
                  {[
                    "ลำดับ",
                    "วันที่ประมวล",
                    "งวดเดือน",
                    "จำนวนใบแจ้งหนี้",
                    "จำนวนเงินรวม",
                    "สถานะ",
                  ].map((head) => (
                    <TableCell
                      key={head}
                      align="center"
                      sx={{ color: "#fff", fontWeight: 600, py: 2 }}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {INVOICE_PROCESS_MOCK_DATA.map((row, index) => {
                  let statusColor = theme.palette.text.primary;
                  switch (row.status) {
                    case "FINISH":
                      statusColor = theme.palette.success.main;
                      break;
                    case "PENDING":
                      statusColor = theme.palette.warning.main;
                      break;
                    case "CANCEL":
                      statusColor = theme.palette.error.main;
                      break;
                    default:
                      statusColor = theme.palette.info.main;
                  }

                  return (
                    <TableRow
                      key={row.id}
                      onClick={() => handleRowClick(row)}
                      sx={{
                        cursor: "pointer",
                        "&:last-child td, &:last-child th": { border: 0 },
                        "&:hover": {
                          bgcolor: alpha(theme.palette.primary.main, 0.04),
                        },
                      }}
                    >
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell align="center">{row.processDate}</TableCell>
                      <TableCell align="center">{row.period}</TableCell>
                      <TableCell align="center">{row.invoiceCount}</TableCell>
                      <TableCell align="center">
                        {fCurrency(row.totalAmount)}
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="subtitle2"
                          sx={{ color: statusColor, fontWeight: 700 }}
                        >
                          {row.status}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}

                {INVOICE_PROCESS_MOCK_DATA.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} align="center" sx={{ py: 3 }}>
                      ไม่พบข้อมูล
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Container>

      {/* เรียกใช้ Modal */}
      <InvoiceProcessModel
        open={openModal}
        onClose={() => setOpenModal(false)}
        row={selectedRow}
      />
    </>
  );
}
