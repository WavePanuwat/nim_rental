"use client";

import React from "react";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { TableCell as MuiTableCell } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import { PaymentRecord } from "@/src/models/types";

type Props = {
  tableData: PaymentRecord[];
  onRowClick: (id: number) => void;
};

export default function PaymentTable({ tableData, onRowClick }: Props) {
  const theme = useTheme();

  return (
    <TableContainer
      component={Paper}
      elevation={2}
      sx={{ borderRadius: 2, maxWidth: "1200px", mx: "auto" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="payment table">
        <TableHead sx={{ backgroundColor: "#1a2b3c" }}>
          <TableRow>
            <MuiTableCell
              align="center"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              ลำดับ
            </MuiTableCell>
            <MuiTableCell
              align="center"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              วันที่ประมวลผล
            </MuiTableCell>
            <MuiTableCell
              align="center"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              รอบการประมวลผล
            </MuiTableCell>
            <MuiTableCell
              align="center"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              จำนวนใบแจ้งหนี้
            </MuiTableCell>
            <MuiTableCell
              align="center"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              จำนวนเงินรวม
            </MuiTableCell>
            <MuiTableCell
              align="center"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              สถานะ
            </MuiTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              hover
              onClick={() => onRowClick(row.id)}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
            >
              <MuiTableCell component="th" scope="row" align="center">
                {row.id}
              </MuiTableCell>
              <MuiTableCell align="center">{row.processDate}</MuiTableCell>
              <MuiTableCell align="center">{row.cycle}</MuiTableCell>
              <MuiTableCell align="center">{row.invoiceCount}</MuiTableCell>
              <MuiTableCell align="center">{row.totalAmount}</MuiTableCell>
              <MuiTableCell align="center">
                <Box
                  sx={{
                    color: "success.main",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                  }}
                >
                  {row.status}
                </Box>
              </MuiTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
