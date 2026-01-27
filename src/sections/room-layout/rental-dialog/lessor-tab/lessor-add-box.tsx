import { Box, Typography } from "@mui/material";

type Props = {
  label: string; // หมายเหตุ: ใน JSX เดิมไม่ได้นำตัวแปร label มาแสดงผล (Hardcode ข้อความไว้)
  onClick?: () => void;
};

const LessorAddBox: React.FC<Props> = ({ label, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: "100%", // ปรับจาก 900 เป็น 100% เพื่อความ Responsive
        height: 150,
        border: "1px dashed",
        borderColor: "divider",
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        bgcolor: "background.paper", // เพิ่มสีพื้นหลัง (Optional)
        "&:hover": {
          bgcolor: "action.hover",
          borderColor: "primary.main",
        },
      }}
    >
      <Typography fontSize={16} fontWeight={600} color="text.secondary">
        + {label || "เพิ่มข้อมูลผู้ให้เช่า"} {/* ใช้ label ที่ส่งเข้ามา หรือใช้ค่า Default */}
      </Typography>
    </Box>
  );
};

export default LessorAddBox;