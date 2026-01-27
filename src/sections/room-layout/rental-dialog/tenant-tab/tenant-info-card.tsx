"use client";

import {
  Card,
  Typography,
  Stack,
  Box,
  Button,
  IconButton,
  Tooltip,
  useTheme,
  alpha,
  SxProps,
  Theme,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { TenantInfo } from "@/src/models/types";

type Props = {
  data: TenantInfo;
  onDelete?: () => void;
};

const DataItem = ({
  label,
  value,
  copyable = false,
  sx,
}: {
  label: string;
  value?: string;
  copyable?: boolean;
  sx?: SxProps<Theme>;
}) => {
  const theme = useTheme();
  const hasValue = value && value.trim() !== "";

  return (
    <Box sx={sx}>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{
          fontWeight: 600,
          letterSpacing: 0.8,
          textTransform: "uppercase",
          fontSize: "0.65rem",
          mb: 0.5,
          display: "block",
          opacity: 0.8,
        }}
      >
        {label}
      </Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography
          variant="body2"
          color={hasValue ? "text.primary" : "text.disabled"}
          sx={{
            fontWeight: 500,
            fontSize: "0.925rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%", 
          }}
        >
          {hasValue ? value : "-"}
        </Typography>
        {copyable && hasValue && (
          <Tooltip title="คัดลอก">
            <IconButton
              size="small"
              onClick={() => navigator.clipboard.writeText(value || "")}
              sx={{
                p: 0.5,
                color: theme.palette.grey[300],
                "&:hover": { color: theme.palette.primary.main },
              }}
            >
              <ContentCopyIcon sx={{ fontSize: 14 }} />
            </IconButton>
          </Tooltip>
        )}
      </Stack>
    </Box>
  );
};

const TenantInfoCard: React.FC<Props> = ({ data, onDelete }) => {
  const theme = useTheme();

  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: 900,
        borderRadius: 4,
        bgcolor: "#ffffff",
        border: `1px solid ${alpha(theme.palette.grey[200], 0.6)}`,
        overflow: "hidden",
        boxShadow: `0 4px 24px ${alpha(theme.palette.common.black, 0.06)}`,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: `0 12px 32px ${alpha(theme.palette.common.black, 0.1)}`,
          borderColor: alpha(theme.palette.primary.main, 0.2),
        },
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          px: 3,
          py: 1,
          bgcolor: alpha(theme.palette.primary.main, 0.04),
          borderBottom: `1px solid ${alpha(theme.palette.grey[200], 0.5)}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <PersonOutlineIcon
            sx={{
              fontSize: 32,
              color: "primary.main",
              opacity: 0.8,
            }}
          />

          <Box>
            <Typography
              variant="h6"
              fontWeight={700}
              color="text.primary"
              fontSize="1rem"
              lineHeight={1.2}
            >
              {data.firstName} {data.lastName}
            </Typography>
            <Typography variant="caption" color="text.secondary" fontWeight={500}>
              ผู้เช่า
            </Typography>
          </Box>
        </Stack>

        {onDelete && (
          <Button
            size="small"
            color="error"
            startIcon={<DeleteOutlineIcon sx={{ fontSize: 18 }} />}
            onClick={onDelete}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              fontSize: "0.8rem",
              borderRadius: 2,
              px: 1.5,
              minWidth: "auto",
              "&:hover": { bgcolor: alpha(theme.palette.error.main, 0.08) },
            }}
          >
            ลบ
          </Button>
        )}
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          p: 4,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
          rowGap: 4, 
          columnGap: 4,
        }}
      >
        {/* แถวที่ 1 */}
        <DataItem 
          label="ที่อยู่ปัจจุบัน" 
          value={data.address} 
          sx={{ gridColumn: { md: "span 2" } }} 
        />
        
        <DataItem 
          label="รหัสพนักงาน" 
          value={data.employeeCode} 
          copyable 
        />
        
        <DataItem 
          label="หนังสือเดินทาง (Passport)" 
          value={data.passportNo} 
          copyable 
        />

        {/* แถวที่ 2 */}
        <DataItem 
          label="เบอร์โทรศัพท์" 
          value={data.phone} 
          copyable 
        />
        
        <DataItem 
          label="วันเดือนปีเกิด" 
          value={data.birthDate} 
        />
        
        <DataItem 
          label="เลขที่บัตรประชาชน" 
          value={data.citizenId} 
          copyable 
        />
        
        <DataItem 
          label="บัตรคนไม่มีสัญชาติ" 
          value={data.nonCitizenId} 
          copyable 
        />
      </Box>
    </Card>
  );
};

export default TenantInfoCard;