"use client";

import { Card, Typography, Stack, Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export type TenantInfo = {
  firstName: string;
  lastName: string;
  birthDate: string;
  age?: string;
  phone?: string;
  address?: string;
};

type Props = {
  data: TenantInfo;
  onDelete?: () => void;
};

const TenantInfoCard: React.FC<Props> = ({ data, onDelete }) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 900,
        borderRadius: 2,
        px: 3,
        py: 2,
        position: "relative",
      }}
    >
      {/* ===== Content ===== */}
      <Stack spacing={0.5} alignItems="center">
        <Typography fontWeight={600}>
          ชื่อผู้เช่า : {data.firstName} {data.lastName}
        </Typography>

        {data.birthDate && (
          <Typography color="text.secondary" fontSize={14}>
            วันเกิด : {data.birthDate}
          </Typography>
        )}

        {data.phone && (
          <Typography color="text.secondary" fontSize={14}>
            เบอร์โทร : {data.phone}
          </Typography>
        )}

        {data.address && (
          <Typography
            color="text.secondary"
            fontSize={14}
            textAlign="center"
          >
            ที่อยู่ : {data.address}
          </Typography>
        )}
      </Stack>

      {/* ===== Delete Button ===== */}
      {onDelete && (
        <Box sx={{ position: "absolute", right: 12, bottom: 12 }}>
          <Button
            size="small"
            color="error"
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={onDelete}
          >
            ลบ
          </Button>
        </Box>
      )}
    </Card>
  );
};

export default TenantInfoCard;
