import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

type Props = {
  cycle: string;
  processDate: string;
  status: string;
};

export default function RentalProcessDetailTopBar({
  cycle,
  processDate,
  status,
}: Props) {
  // เช็คสถานะ
  const isConfirm = status === "CONFIRM";

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 1200,
        mx: "auto",
        p: 1.5,
        mb: 2,
        borderRadius: 2,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderLeft: "6px solid #1976D2",
      }}
    >
      {/* ================= ฝั่งซ้าย: รอบการประมวลผล ================= */}
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 48,
            height: 48,
            bgcolor: "#E3F2FD",
            borderRadius: "12px",
            color: "#1976D2",
          }}
        >
          <CalendarMonthIcon />
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary" fontWeight="bold">
            รอบการประมวลผล
          </Typography>
          <Stack direction="row" alignItems="baseline" spacing={1}>
            <Typography variant="h6" fontWeight={700} sx={{ color: "#2c3e50" }}>
              {cycle}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontWeight: 500 }}
            >
              ({processDate})
            </Typography>
          </Stack>
        </Box>
      </Stack>

      {/* ================= ฝั่งขวา: ปุ่มยืนยัน + สถานะ ================= */}
      <Stack direction="column" alignItems="flex-end" spacing={0.5}>
        {/* ★★★ แก้ไขสีปุ่มตรงนี้ ★★★ */}
        <Button
          variant="contained"
          startIcon={<CheckCircleIcon />}
          disabled={isConfirm} // ถ้า Confirm แล้ว ให้ Disable ปุ่ม (กดไม่ได้)
          sx={{
            // ถ้า Confirm (True) -> สีเทา (#9E9E9E)
            // ถ้า Pending (False) -> สีเขียว (#2e7d32)
            bgcolor: isConfirm ? "#9E9E9E" : "#2e7d32",
            color: "#fff",
            px: 3,
            py: 0.5,
            borderRadius: 1,
            fontWeight: "bold",
            fontSize: "0.875rem",
            boxShadow: isConfirm
              ? "none" // สีเทาไม่มีเงา
              : "0 4px 12px rgba(46, 125, 50, 0.3)", // สีเขียวมีเงา
            "&:hover": {
              bgcolor: isConfirm ? "#9E9E9E" : "#1b5e20", // เขียวเข้มตอน Hover
            },
            // ปรับ Style ตอนปุ่ม Disabled (สีเทา) ให้ชัดเจน
            "&.Mui-disabled": {
              bgcolor: "#9E9E9E",
              color: "#fff",
              opacity: 1,
            },
          }}
        >
          {isConfirm ? "ยืนยัน" : "ยืนยัน"}
        </Button>

        {/* ข้อความสถานะ */}
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography
            variant="caption"
            color="text.secondary"
            fontWeight="bold"
          >
            สถานะ :
          </Typography>
          <Typography
            variant="body2"
            fontWeight={800}
            // ข้อความ: Confirm = เขียว, Pending = ส้ม
            sx={{ color: isConfirm ? "#2e7d32" : "#ed6c02" }}
          >
            {status}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
