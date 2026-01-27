import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { fCurrency } from "@/src/data/invoice-process-mock";

// รับ Props เป็นข้อมูลที่คำนวณแล้ว (Calculated Data)
type Props = {
  calculations: {
    rent: any;
    elec: any;
    water: any;
  };
};

export default function InvoiceItemsTable({ calculations }: Props) {
  const { rent, elec, water } = calculations;

  return (
    <Card sx={{ overflow: "hidden", borderRadius: 1 }}>
      <Box sx={{ bgcolor: "#212B36", px: 2 }}>
        <Button
          sx={{
            color: "#fff",
            borderRadius: 0,
            borderBottom: "2px solid #448AFF",
            py: 2,
          }}
        >
          รายการ
        </Button>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#919EAB29" }}>
              <TableCell align="center">#</TableCell>
              <TableCell>รายการ</TableCell>
              <TableCell>รายละเอียด</TableCell>
              <TableCell align="right">จำนวนเงิน</TableCell>
              <TableCell align="right">ภาษี</TableCell>
              <TableCell align="right">หัก ณ จ่าย</TableCell>
              <TableCell align="right">ยอดรวม</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* 1. ค่าเช่า */}
            <TableRow>
              <TableCell align="center">1</TableCell>
              <TableCell>ค่าเช่า</TableCell>
              <TableCell>01/01/2569 - 31/01/2569</TableCell>
              <TableCell align="right">{fCurrency(rent.price)}</TableCell>
              <TableCell align="right">{fCurrency(rent.vat)}</TableCell>
              <TableCell align="right">{fCurrency(rent.wht)}</TableCell>
              <TableCell align="right">{fCurrency(rent.net)}</TableCell>
            </TableRow>

            {/* 2. ค่าไฟ */}
            <TableRow>
              <TableCell align="center">2</TableCell>
              <TableCell>ค่าไฟ</TableCell>
              <TableCell>01/12/2568 - 31/12/2568</TableCell>
              <TableCell align="right">{fCurrency(elec.price)}</TableCell>
              <TableCell align="right">{fCurrency(elec.vat)}</TableCell>
              <TableCell align="right">{fCurrency(elec.wht)}</TableCell>
              <TableCell align="right">{fCurrency(elec.net)}</TableCell>
            </TableRow>

            {/* 3. ค่าน้ำ */}
            <TableRow>
              <TableCell align="center">3</TableCell>
              <TableCell>ค่าน้ำ</TableCell>
              <TableCell>01/12/2568 - 31/12/2568</TableCell>
              <TableCell align="right">{fCurrency(water.price)}</TableCell>
              <TableCell align="right">{fCurrency(water.vat)}</TableCell>
              <TableCell align="right">{fCurrency(water.wht)}</TableCell>
              <TableCell align="right">{fCurrency(water.net)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
