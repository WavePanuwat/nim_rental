import React, { useMemo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { alpha, useTheme } from "@mui/material/styles";

import { InvoiceItem } from "@/src/data/rental-process-mock";

const fNumber = (num: number) =>
  new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);

type Props = {
  items: InvoiceItem[];
};

// Config columns
const COLUMNS = [
  { id: "index", label: "ลำดับ", align: "center", width: 60 },
  { id: "desc", label: "รายการ", align: "center", minWidth: 200 },
  { id: "serial", label: "Serial No.", align: "center", minWidth: 120 },
  { id: "date", label: "วันที่ที่มีผล", align: "center", minWidth: 180 },
  {
    id: "amount",
    label: "จำนวนเงินก่อนหักภาษี",
    align: "center",
    minWidth: 140,
  },
  { id: "tax", label: "ภาษี", align: "center", minWidth: 80 },
  { id: "wht", label: "หัก ณ ที่จ่าย", align: "center", minWidth: 100 },
  { id: "total", label: "รวม", align: "center", minWidth: 100 },
  { id: "note", label: "หมายเหตุ", align: "center", minWidth: 100 },
] as const;

const HEADER_BG_COLOR = "#222e3c";

export default function InvoiceItemTable({ items }: Props) {
  const theme = useTheme();

  const totalAmount = useMemo(
    () => items.reduce((sum, item) => sum + item.total, 0),
    [items],
  );

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", mb: 6 }}>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          borderRadius: 2,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
          overflow: "hidden",
          border: "1px solid",
          borderColor: alpha(theme.palette.grey[300], 0.5),
        }}
      >
        <Table sx={{ minWidth: 1000 }}>
          {/* ===== Header ===== */}
          <TableHead>
            <TableRow sx={{ bgcolor: HEADER_BG_COLOR }}>
              {COLUMNS.map((col, index) => (
                <TableCell
                  key={col.id}
                  align="center"
                  sx={{
                    color: "#fff",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    py: 2,
                    borderBottom: "none",
                    whiteSpace: "nowrap",
                    verticalAlign: "middle",
                  }}
                >
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* ===== Body ===== */}
          <TableBody>
            {items.map((item, index) => (
              <TableRow
                key={item.id}
                sx={{
                  "&:hover": {
                    bgcolor: alpha(theme.palette.primary.main, 0.04),
                  },
                }}
              >
                <TableCell
                  align="center"
                  sx={{ verticalAlign: "middle", color: "text.secondary" }}
                >
                  {index + 1}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    verticalAlign: "middle",
                    color: "text.primary",
                    fontWeight: 500,
                  }}
                >
                  {item.description}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ verticalAlign: "middle", color: "text.secondary" }}
                >
                  {item.serialNo || "-"}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    verticalAlign: "middle",
                    color: "text.secondary",
                    fontSize: "0.875rem",
                  }}
                >
                  {item.effectiveDate}
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    verticalAlign: "middle",
                    color: "text.secondary",
                    fontFamily: "monospace",
                  }}
                >
                  {fNumber(item.amountBeforeTax)}
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    verticalAlign: "middle",
                    color: "text.secondary",
                    fontFamily: "monospace",
                  }}
                >
                  {fNumber(item.tax)}
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    verticalAlign: "middle",
                    color: "text.secondary",
                    fontFamily: "monospace",
                  }}
                >
                  {fNumber(item.wht)}
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    verticalAlign: "middle",
                    fontWeight: 700,
                    color: "text.primary",
                    fontSize: "1rem",
                  }}
                >
                  {fNumber(item.total)}
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ verticalAlign: "middle", color: "text.secondary" }}
                >
                  {item.note || ""}
                </TableCell>
              </TableRow>
            ))}

            {items.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={COLUMNS.length}
                  align="center"
                  sx={{ py: 8 }}
                >
                  <Typography variant="body1" color="text.secondary">
                    ไม่มีรายการแสดง
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>

          {items.length > 0 && (
            <TableFooter>
              <TableRow sx={{ bgcolor: alpha(theme.palette.grey[100], 0.5) }}>
                <TableCell colSpan={5} sx={{ borderBottom: 0 }} />

                <TableCell
                  colSpan={4}
                  align="center"
                  sx={{
                    py: 2.5,
                    borderBottom: 0,
                    verticalAlign: "middle",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 2,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 600, color: "text.secondary" }}
                    >
                      ยอดรวมสุทธิ (Net Total)
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: HEADER_BG_COLOR }}
                    >
                      {fNumber(totalAmount)}
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </TableContainer>
    </Box>
  );
}
