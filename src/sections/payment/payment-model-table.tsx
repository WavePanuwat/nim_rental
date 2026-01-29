"use client";

import React from "react";
import {
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { InvoiceRecord } from "@/src/models/types";

import PaymentIcon from "@mui/icons-material/Payment";

type Props = {
  data: InvoiceRecord[];
};

export default function PaymentModelTable({ data }: Props) {
  const theme = useTheme();

  return (
    <TableContainer
      component={Paper}
      elevation={2}
      sx={{
        borderRadius: 2,
        maxWidth: "1200px",
        width: "100%",
        mx: "auto",
        overflow: "hidden",
      }}
    >
      <Table sx={{ minWidth: 800 }} aria-label="payment model table">
        <TableHead sx={{ backgroundColor: "#1a2b3c" }}>
          <TableRow>
            {[
              { id: "id", label: "ลำดับ", align: "center" },
              { id: "date", label: "วันที่ใบแจ้งหนี้", align: "center" },
              { id: "invoiceNo", label: "เลขที่ใบแจ้งหนี้", align: "center" },
              { id: "property", label: "ห้อง", align: "center" },
              { id: "leaseNo", label: "เลขที่การเช่า", align: "center" },
              { id: "tenant", label: "ผู้เช่า", align: "center" },
              { id: "amount", label: "จำนวนเงิน", align: "center" },
              { id: "action", label: "Action", align: "center" },
            ].map((col) => (
              <TableCell
                key={col.id}
                align={
                  col.align as
                    | "center"
                    | "left"
                    | "right"
                    | "justify"
                    | "inherit"
                }
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  py: 2,
                  whiteSpace: "nowrap",
                }}
              >
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.length > 0 ? (
            data.map((row) => (
              <TableRow
                key={row.id}
                hover
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  transition: "background-color 0.2s",
                  "&:nth-of-type(even)": {
                    bgcolor: alpha(theme.palette.grey[100], 0.3),
                  },
                }}
              >
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.invoiceNo}</TableCell>
                <TableCell align="center">{row.property}</TableCell>
                <TableCell align="center">{row.leaseNo}</TableCell>
                <TableCell align="center">{row.tenant}</TableCell>
                <TableCell align="center">{row.amount}</TableCell>

                <TableCell align="center">
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<PaymentIcon sx={{ fontSize: 18 }} />}
                    sx={{
                      bgcolor: "#2e7d32",
                      color: "#fff",
                      textTransform: "none",
                      borderRadius: "6px",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      boxShadow: "0 2px 4px rgba(46, 125, 50, 0.2)",
                      px: 2,
                      "&:hover": {
                        bgcolor: "#1b5e20",
                        boxShadow: "0 4px 8px rgba(46, 125, 50, 0.4)",
                      },
                    }}
                  >
                    ชำระเงิน
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            // กรณีไม่มีข้อมูล
            <TableRow>
              <TableCell
                colSpan={8}
                align="center"
                sx={{ py: 4, color: "text.secondary" }}
              >
                ไม่พบข้อมูลใบแจ้งหนี้
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
