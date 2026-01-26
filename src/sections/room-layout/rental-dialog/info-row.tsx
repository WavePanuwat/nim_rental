'use client';

import { Box, Typography } from '@mui/material';

interface InfoRowProps {
  label: string;
  value?: string;
}

const InfoRow = ({ label, value }: InfoRowProps) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '180px 12px 1fr',
        alignItems: 'start',
        mb: 1,
      }}
    >
      {/* Label */}
      <Typography
        sx={{
          fontSize: 18,       
          fontWeight: 500,    
          textAlign: 'right',
          pr: 1,
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </Typography>

      {/* Colon */}
      <Typography sx={{ fontSize: 16 }}>
        :
      </Typography>

      {/* Value */}
      <Typography
        sx={{
          fontSize: 16,       
          lineHeight: 1.6,    
        }}
      >
        {value || ''}
      </Typography>
    </Box>
  );
};

export default InfoRow;
