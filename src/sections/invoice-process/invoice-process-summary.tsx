import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { alpha, useTheme } from "@mui/material/styles";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ApartmentIcon from "@mui/icons-material/Apartment";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

const fCurrency = (number: number) =>
  new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);

type SummaryCardProps = {
  title: string;
  value: string;
  color: string;
  icon: React.ReactNode;
};

function SummaryCard({ title, value, color, icon }: SummaryCardProps) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        p: 2, // Padding กระชับ
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 2,
        boxShadow: "none",
        border: "1px solid",
        borderColor: alpha(theme.palette.grey[400], 0.3),
        bgcolor: "common.white",
      }}
    >
      <Box sx={{ minWidth: 0, mr: 1 }}>
        <Typography
          variant="body2"
          sx={{ mb: 0.5, color: "text.secondary", fontWeight: 500 }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: "text.primary" }}
        >
          {value}
        </Typography>
      </Box>

      <Avatar
        variant="rounded"
        sx={{
          width: 44,
          height: 44,
          bgcolor: alpha(color, 0.1),
          color: color,
        }}
      >
        {React.cloneElement(icon as React.ReactElement, {})}
      </Avatar>
    </Card>
  );
}

type Props = {
  summary: {
    grandTotal: number;
    totalRent: number;
    totalWater: number;
    totalElec: number;
    totalOther: number;
  };
};

export default function InvoiceProcessSummary({ summary }: Props) {
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={2}
      columns={{ xs: 12, sm: 12, md: 10 }}
      sx={{ mb: 4 }}
    >
      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
        <SummaryCard
          title="ยอดรวมสุทธิ"
          value={fCurrency(summary.grandTotal)}
          color={theme.palette.primary.main}
          icon={<AccountBalanceWalletIcon />}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
        <SummaryCard
          title="ค่าเช่า"
          value={fCurrency(summary.totalRent)}
          color={theme.palette.success.main}
          icon={<ApartmentIcon />}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
        <SummaryCard
          title="ค่าน้ำ"
          value={fCurrency(summary.totalWater)}
          color={theme.palette.info.main}
          icon={<WaterDropIcon />}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
        <SummaryCard
          title="ค่าไฟ"
          value={fCurrency(summary.totalElec)}
          color={theme.palette.warning.main}
          icon={<ElectricBoltIcon />}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
        <SummaryCard
          title="ค่าอื่นๆ"
          value={fCurrency(summary.totalOther)}
          color={theme.palette.secondary.main}
          icon={<PlaylistAddCheckIcon />}
        />
      </Grid>
    </Grid>
  );
}
