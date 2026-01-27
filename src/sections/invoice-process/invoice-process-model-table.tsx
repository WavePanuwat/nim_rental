import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import PrintIcon from "@mui/icons-material/Print";

import { IInvoiceDetailItem } from "@/src/models/types";

const fCurrency = (number: number) =>
  new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);

const getStatusColor = (status: string, theme: any) => {
  switch (status) {
    case "CONFIRM":
      return theme.palette.success.main;
    case "warning":
      return theme.palette.warning.main;
    case "error":
      return theme.palette.error.main;
    default:
      return theme.palette.info.main;
  }
};

type Props = {
  items: IInvoiceDetailItem[];
  onOpenDetail: (item: IInvoiceDetailItem) => void;
  onPrint?: (item: IInvoiceDetailItem) => void;
};

export default function InvoiceProcessTable({
  items,
  onOpenDetail,
  onPrint,
}: Props) {
  const theme = useTheme();

  return (
    <Card sx={{ border: "1px solid #E0E0E0", boxShadow: "none" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#263238" }}>
              {[
                "ลำดับ",
                "วันที่ครบกำหนด",
                "เลขที่ห้อง",
                "ลูกค้า",
                "ค่าเช่า",
                "ค่าไฟ",
                "ค่าน้ำ",
                "อื่นๆ",
                "เป็นเงิน",
                "สถานะ",
                "พิมพ์",
              ].map((head) => (
                <TableCell
                  key={head}
                  align="center"
                  sx={{ color: "#fff", fontWeight: 600 }}
                >
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {items.map((item, index) => (
              <TableRow
                key={item.id}
                hover
                sx={{ cursor: "pointer" }}
                onClick={() => onOpenDetail(item)}
              >
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{item.dueDate}</TableCell>
                <TableCell align="center">{item.roomNumber}</TableCell>
                <TableCell>{item.customerName}</TableCell>

                <TableCell align="right">
                  {fCurrency(item.rentAmount)}
                </TableCell>
                <TableCell align="right">
                  {fCurrency(item.elecAmount)}
                </TableCell>
                <TableCell align="right">
                  {fCurrency(item.waterAmount)}
                </TableCell>
                <TableCell align="right">
                  {fCurrency(item.otherAmount)}
                </TableCell>
                <TableCell align="right">
                  {fCurrency(item.totalAmount)}
                </TableCell>

                <TableCell align="center">
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: getStatusColor(item.status, theme),
                      fontWeight: 700,
                    }}
                  >
                    {item.status}
                  </Typography>
                </TableCell>

                <TableCell align="center">
                  <Button
                    size="small"
                    variant="contained"
                    startIcon={<PrintIcon />}
                    onClick={(e) => {
                      e.stopPropagation();
                      onPrint ? onPrint(item) : console.log("Print:", item.id);
                    }}
                  >
                    พิมพ์
                  </Button>
                </TableCell>
              </TableRow>
            ))}

            {items.length === 0 && (
              <TableRow>
                <TableCell colSpan={11} align="center" sx={{ py: 5 }}>
                  ไม่พบข้อมูล
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
