"use client";

import { Box, Stack, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function BuildingFilters() {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        px: { xs: 2, md: 3 },
        py: { xs: 2, md: 2.5 },
        mb: 3,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        justifyContent={{ md: "flex-end" }}
      >
        <TextField
          size="small"
          label="Scope (สาขา)"
          variant="outlined"
          sx={{ width: { xs: "100%", md: 280 } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          size="small"
          label="สถานที่"
          variant="outlined"
          sx={{ width: { xs: "100%", md: 280 } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Box>
  );
}
