// components/info-row/info-row.tsx
'use client';

import React from 'react';
import { Stack, Typography } from '@mui/material';

type InfoRowProps = {
  label: string;
  value: string;
};

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography
        width={120}
        textAlign="right"        
        fontSize={20}
        fontWeight={600}
        color="text.primary"
      >
        {label} :
      </Typography>

      <Typography fontSize={16}>
        {value}
      </Typography>
    </Stack>
  );
};

export default InfoRow;
