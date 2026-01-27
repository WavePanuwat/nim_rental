'use client';

import { Box, Button } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';
import PrintIcon from '@mui/icons-material/Print';

const RentalHeaderButton = () => {
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Button
        variant="contained"
        startIcon={<DoneIcon />}
        sx={{
          height: 40,
          px: 2,
          fontSize: 14,        
        }}
      >
        ยืนยัน
      </Button>

      <Button
        variant="contained"
        startIcon={<CheckCircleIcon />}
        sx={{
          height: 40,
          px: 2,
          fontSize: 14,
        }}
      >
        อนุมัติ
      </Button>

      <Button
        variant="contained"
        startIcon={<CloseIcon />}
        sx={{
          height: 40,
          px: 2,
          fontSize: 14,
        }}
      >
        ปิดข้อมูลการเช่า
      </Button>

      <Button
        color="error"
        variant="contained"
        startIcon={<CancelIcon />}
        sx={{
          height: 40,
          px: 2,
          fontSize: 14,
        }}
      >
        ยกเลิก
      </Button>

      <Button
        variant="contained"
        startIcon={<PrintIcon />}
        sx={{
          height: 40,
          px: 2,
          fontSize: 14,
        }}
      >
        พิมพ์สัญญาเช่า
      </Button>
    </Box>
  );
};

export default RentalHeaderButton;
