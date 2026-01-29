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
      sx={{
        borderRadius: 2,
        maxWidth: "1200px",
        width: "100%",
        mx: "auto",
        mt: 3,
        overflowX: "auto",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="payment table">
        {/* --- ส่วนหัวตาราง --- */}
        <TableHead sx={{ backgroundColor: "#1a2b3c" }}>
          <TableRow>
            <MuiTableCell
              align="center"
              sx={{ color: "white", fontWeight: "bold", width: "10%" }}
            >
              ลำดับ
            </MuiTableCell>

            <MuiTableCell
              align="center"
              sx={{ color: "white", fontWeight: "bold", width: "20%" }}
            >
              วันที่รับชำระ
            </MuiTableCell>

            <MuiTableCell
              align="center"
              sx={{ color: "white", fontWeight: "bold", width: "20%" }}
            >
              เลขที่สัญญา
            </MuiTableCell>

            <MuiTableCell
              align="center"
              sx={{ color: "white", fontWeight: "bold", width: "20%" }}
            >
              ผู้เช่า
            </MuiTableCell>

            <MuiTableCell
              align="center"
              sx={{ color: "white", fontWeight: "bold", width: "10%" }}
            >
              จำนวนเงิน
            </MuiTableCell>

            {/* 6. สถานะ: 15% (เท่าเดิม) */}
            <MuiTableCell
              align="center"
              sx={{ color: "white", fontWeight: "bold", width: "20%" }}
            >
              สถานะ
            </MuiTableCell>
          </TableRow>
        </TableHead>

        {/* --- ส่วนเนื้อหา --- */}
        <TableBody>
          {tableData.length > 0 ? (
            tableData.map((row, index) => (
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
                  {index + 1}
                </MuiTableCell>

                <MuiTableCell align="center" sx={{ whiteSpace: "nowrap" }}>
                  {row.date}
                </MuiTableCell>

                <MuiTableCell align="center">{row.leaseNo}</MuiTableCell>

                <MuiTableCell align="center">{row.tenant}</MuiTableCell>

                <MuiTableCell align="center">{row.amount}</MuiTableCell>

                <MuiTableCell align="center">
                  <Box
                    sx={{
                      color:
                        row.status === "CONFIRM"
                          ? "success.main"
                          : row.status === "CANCEL"
                            ? "error.main"
                            : "warning.main",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                    }}
                  >
                    {row.status}
                  </Box>
                </MuiTableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <MuiTableCell colSpan={6} align="center" sx={{ py: 3 }}>
                ไม่พบข้อมูล
              </MuiTableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
