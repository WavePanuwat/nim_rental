import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { alpha, useTheme } from "@mui/material/styles";

import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PersonIcon from "@mui/icons-material/Person";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { InvoiceDetail } from "@/src/data/rental-process-mock";

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        py: 0.8,
        borderBottom: "1px dashed",
        borderColor: (theme) => alpha(theme.palette.grey[400], 0.3),
        "&:last-child": { borderBottom: 0 },
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          minWidth: 120,
          fontWeight: 500,
          fontSize: "0.875rem",
        }}
      >
        {label}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "text.primary",
          fontWeight: 600,
          textAlign: "right",
          wordBreak: "break-word",
          flex: 1,
          pl: 2,
          fontSize: "0.875rem",
        }}
      >
        {value || "-"}
      </Typography>
    </Box>
  );
}

function SectionHeader({
  title,
  icon,
  color,
}: {
  title: string;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1.5 }}>
      {" "}
      <Avatar
        variant="rounded"
        sx={{
          bgcolor: alpha(color, 0.1),
          color: color,
          width: 32,
          height: 32,
        }}
      >
        {icon}
      </Avatar>
      <Typography
        variant="h6"
        sx={{
          fontSize: "0.95rem",
          fontWeight: 700,
          color: "text.primary",
          letterSpacing: 0.2,
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
}

type Props = {
  invoice: InvoiceDetail;
};

export default function InvoiceInfoCard({ invoice }: Props) {
  const theme = useTheme();

  const isConfirm = invoice.status === "CONFIRM";
  const themeColor = isConfirm ? "#2e7d32" : "#ed6c02";

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 1200,
        mx: "auto",
        borderRadius: 3,
        boxShadow: "0px 10px 40px -10px rgba(0,0,0,0.08)",
        border: "1px solid",
        borderColor: alpha(theme.palette.grey[300], 0.4),
        overflow: "hidden",
        position: "relative",
        mb: 3,
        bgcolor: "#fff",
      }}
    >
      <Box
        sx={{
          height: "6px",
          width: "100%",
          bgcolor: themeColor,
        }}
      />

      <Box
        sx={{
          px: 3,
          pt: 2,
          pb: 0.5,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Chip
          icon={<FiberManualRecordIcon style={{ fontSize: 10 }} />}
          label={invoice.status}
          size="small"
          sx={{
            bgcolor: alpha(themeColor, 0.1),
            color: themeColor,
            fontWeight: 700,
            borderRadius: 1.5,
            border: `1px solid ${alpha(themeColor, 0.2)}`,
            px: 0.5,
            height: 24,
          }}
        />
      </Box>

      <Box sx={{ px: 3, pb: 4 }}>
        {" "}
        <Grid container spacing={{ xs: 3, md: 5 }}>
          {" "}
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionHeader
              title="รายละเอียดเอกสาร"
              icon={<ReceiptLongIcon fontSize="small" />}
              color="#007FFF"
            />
            <Stack spacing={0}>
              <InfoRow label="รอบบิล" value={invoice.cycle} />
              <InfoRow label="เลขที่สัญญา" value={invoice.contractNo} />
              <InfoRow label="วันที่เอกสาร" value={invoice.docDate} />
              <InfoRow label="รหัสทรัพย์สิน" value={invoice.property} />
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionHeader
              title="ข้อมูลผู้เช่า"
              icon={<PersonIcon fontSize="small" />}
              color="#9C27B0"
            />
            <Stack spacing={0}>
              <InfoRow label="ชื่อผู้เช่า" value={invoice.tenant} />
              <InfoRow label="ที่อยู่" value={invoice.address} />
              <InfoRow label="หมายเหตุ" value={invoice.note} />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
