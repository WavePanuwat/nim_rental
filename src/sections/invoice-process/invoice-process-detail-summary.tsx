import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { alpha, useTheme } from "@mui/material/styles";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PercentIcon from "@mui/icons-material/Percent";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import PaidIcon from "@mui/icons-material/Paid";

import { fCurrency } from "@/src/data/invoice-process-mock";

type SummaryCardProps = {
  label: string;
  value: string;
  icon: React.ReactNode;
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
};

function SummaryCard({
  label,
  value,
  icon,
  color = "primary",
}: SummaryCardProps) {
  const theme = useTheme();

  return (
    <Card
      elevation={0}
      sx={{
        p: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: 3,
        border: "1px solid",
        borderColor: alpha(theme.palette.grey[500], 0.12),
        bgcolor: "background.paper", // พื้นหลังขาว
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
      >
        {/* Text Section */}
        <Box>
          <Typography
            variant="body2"
            sx={{
              mb: 0.5,
              fontWeight: "medium",
              color: "text.secondary", // สีเทา
            }}
          >
            {label}
          </Typography>
          <Typography
            variant="h5"
            fontWeight="800"
            sx={{ color: "text.primary" }} // <-- แก้ไขเป็นสีดำ
          >
            {value}
          </Typography>
        </Box>

        {/* Icon Section (ยังคงสีไว้เพื่อให้แยกหมวดหมู่ได้) */}
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: alpha(theme.palette[color].main, 0.08), // พื้นหลังไอคอนจางๆ
            color: theme.palette[color].main, // สีไอคอน
          }}
        >
          {icon}
        </Box>
      </Stack>
    </Card>
  );
}

type Props = {
  totals: {
    beforeVat: number;
    vat: number;
    wht: number;
    grandTotal: number;
  };
};

export default function InvoiceSummary({ totals }: Props) {
  return (
    <Grid
      container
      spacing={3}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ mb: 4 }}
    >
      {/* 1. ยอดเงินก่อนภาษี */}
      <Grid size={{ xs: 4, sm: 4, md: 3 }}>
        <SummaryCard
          label="ยอดเงินก่อนภาษี"
          value={fCurrency(totals.beforeVat)}
          icon={<AccountBalanceWalletIcon />}
          color="primary"
        />
      </Grid>

      {/* 2. ภาษี */}
      <Grid size={{ xs: 4, sm: 4, md: 3 }}>
        <SummaryCard
          label="ภาษีมูลค่าเพิ่ม (7%)"
          value={fCurrency(totals.vat)}
          icon={<PercentIcon />}
          color="warning"
        />
      </Grid>

      {/* 3. หัก ณ ที่จ่าย */}
      <Grid size={{ xs: 4, sm: 4, md: 3 }}>
        <SummaryCard
          label="หัก ณ ที่จ่าย (5%)"
          value={fCurrency(totals.wht)}
          icon={<ContentCutIcon />}
          color="error"
        />
      </Grid>

      {/* 4. สุทธิ */}
      <Grid size={{ xs: 4, sm: 4, md: 3 }}>
        <SummaryCard
          label="ยอดเงินสุทธิ"
          value={fCurrency(totals.grandTotal)}
          icon={<PaidIcon />}
          color="success"
        />
      </Grid>
    </Grid>
  );
}
