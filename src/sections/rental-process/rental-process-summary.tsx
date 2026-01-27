import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import BoltIcon from "@mui/icons-material/Bolt";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

// --- Helper Component: การ์ดสรุปย่อย (เหมือนเดิม) ---
function SummaryCard({
  title,
  icon,
  total,
  done,
  notDone,
  color = "primary",
}: {
  title: string;
  icon: React.ReactNode;
  total: number;
  done: number;
  notDone: number;
  color?: string;
}) {
  return (
    <Card
      sx={{
        p: 2,
        textAlign: "center",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
        borderRadius: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        borderTop: `4px solid`,
        borderColor: `${color}.main`,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
        sx={{ mb: 1.5 }}
      >
        <Box sx={{ color: `${color}.main`, "& svg": { fontSize: 24 } }}>
          {icon}
        </Box>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", color: "text.primary" }}
        >
          {title}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        spacing={2.5}
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderStyle: "dashed" }}
          />
        }
      >
        <Box>
          <Typography
            variant="h5"
            sx={{ color: `${color}.main`, fontWeight: 700 }}
          >
            {total}
          </Typography>
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
            จดแล้ว
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h5"
            sx={{ color: "text.primary", fontWeight: 700 }}
          >
            {done}
          </Typography>
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
            ยังไม่ได้จด
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h5"
            sx={{ color: "text.disabled", fontWeight: 700 }}
          >
            {notDone}
          </Typography>
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
            ไม่ต้องจด
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}

// 1. กำหนด Type ของ Props ที่จะรับเข้ามา
type Props = {
  totalRooms: number; // จำนวนห้องทั้งหมด
  waterPending: number; // จำนวนที่ยังไม่ได้จดน้ำ
  elecPending: number; // จำนวนที่ยังไม่ได้จดไฟ
};

// --- Main Component ---
export default function RentalProcessDetailSummary({
  totalRooms,
  waterPending,
  elecPending,
}: Props) {
  // คำนวณค่า 'จดแล้ว' (Done) จากข้อมูลที่รับมา
  const waterDone = totalRooms - waterPending;
  const elecDone = totalRooms - elecPending;

  // สมมติค่า 'ไม่ต้องจด' เป็น 0 ไปก่อน หรือจะรับมาเพิ่มก็ได้
  const notDoneFixed = 0;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1200,
        mx: "auto",
        mb: 2,
      }}
    >
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {/* Card 1: มิเตอร์น้ำ (สีฟ้า) */}
        <Grid size={{ xs: 4, sm: 4, md: 4 }}>
          <SummaryCard
            title="มิเตอร์น้ำ"
            icon={<WaterDropIcon />}
            total={totalRooms} // ใช้ค่าจาก Props
            done={waterDone} // ใช้ค่าที่คำนวณ
            notDone={waterPending} // ใช้ค่าจาก Props (ในที่นี้ให้ Pending = ยังไม่จด)
            color="info"
          />
        </Grid>

        {/* Card 2: มิเตอร์ไฟ (สีแดง) */}
        <Grid size={{ xs: 4, sm: 4, md: 4 }}>
          <SummaryCard
            title="มิเตอร์ไฟ"
            icon={<BoltIcon />}
            total={totalRooms} // ใช้ค่าจาก Props
            done={elecDone} // ใช้ค่าที่คำนวณ
            notDone={elecPending} // ใช้ค่าจาก Props
            color="error"
          />
        </Grid>

        {/* Card 3: จำนวนห้อง (สีม่วง) */}
        <Grid size={{ xs: 4, sm: 4, md: 4 }}>
          <Card
            sx={{
              p: 2,
              textAlign: "center",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
              borderRadius: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderTop: "4px solid",
              borderColor: "#9C27B0",
              position: "relative",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ mb: 1, color: "#9C27B0" }}
            >
              <HomeWorkIcon sx={{ fontSize: 32 }} />
            </Stack>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", mb: 0.5, color: "text.secondary" }}
            >
              จำนวนห้องทั้งหมด
            </Typography>
            <Box>
              {/* แสดงค่าจาก Props */}
              <Typography
                variant="h4"
                sx={{ color: "#9C27B0", fontWeight: 800, lineHeight: 1 }}
              >
                {totalRooms}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mt: 0.5, display: "block" }}
              >
                ห้อง
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
