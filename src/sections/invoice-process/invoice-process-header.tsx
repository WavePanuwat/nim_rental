import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { alpha, useTheme } from "@mui/material/styles";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

import { IInvoiceProcessItem } from "@/src/models/types";

type Props = {
  row: IInvoiceProcessItem | null;
};

export default function InvoiceProcessHeader({ row }: Props) {
  const theme = useTheme();

  // Logic การดึงปี
  const displayYear = row?.period ? row.period.split("/")[2] : "-";

  // Logic เช็คสถานะ
  const isFinished = row?.status === "FINISH";

  return (
    <Card
      sx={{
        p: 2.5,
        mb: 3,
        borderRadius: 2,
        boxShadow: "0px 4px 12px rgba(0,0,0,0.04)",
        borderColor: alpha(theme.palette.divider, 0.6),
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        spacing={2}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: 1.5,
              bgcolor: alpha(theme.palette.primary.main, 0.08),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "primary.main",
            }}
          >
            <CalendarMonthIcon />
          </Box>

          <Box>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "block", mb: 0.5 }}
            >
              ปีงบประมาณ : {displayYear}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography variant="h6" fontWeight={600} lineHeight={1}>
                งวดวันที่: {row?.period || "-"}
              </Typography>
            </Stack>
          </Box>
        </Stack>

        <Box sx={{ alignSelf: { xs: "flex-end", sm: "center" } }}></Box>

        <Stack direction="row" alignItems="center" spacing={2}>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ display: { xs: "none", sm: "block" } }}
          />

          <Box sx={{ textAlign: { xs: "right", sm: "left" } }}>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "block", mb: 0.5 }}
            >
              สถานะดำเนินการ
            </Typography>
            <Chip
              icon={isFinished ? <CheckCircleIcon /> : <AccessTimeFilledIcon />}
              label={row?.status || "UNKNOWN"}
              color={isFinished ? "success" : "warning"}
              variant={isFinished ? "filled" : "outlined"}
              sx={{
                fontWeight: 600,
                borderRadius: "8px",
                minWidth: 100,
                justifyContent: "flex-start",
              }}
            />
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
}
