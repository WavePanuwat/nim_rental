import React from "react";
import { Paper, Box, Typography, Avatar } from "@mui/material";
import { alpha } from "@mui/material/styles";

interface StatCardProps {
  label: string;
  value: number;
  icon?: React.ReactNode;
  color?: string;
}

export default function StatCard({
  label,
  value,
  icon,
  color = "#1976d2",
}: StatCardProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: "100%",
        borderRadius: "16px",
        border: "1px solid",
        borderColor: alpha(color, 0.1),
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.03)",
        transition: "all 0.3s ease",
        cursor: "default",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          fontWeight="800"
          sx={{
            color: color,
            mb: 0.5,
            lineHeight: 1,
          }}
        >
          {value}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight="500"
          sx={{ fontSize: "0.85rem" }}
        >
          {label}
        </Typography>
      </Box>

      {icon && (
        <Avatar
          variant="rounded"
          sx={{
            bgcolor: alpha(color, 0.1),
            color: color,
            width: 56,
            height: 56,
            borderRadius: "12px",
          }}
        >
          <Box sx={{ fontSize: 30 }}>{icon}</Box>
        </Avatar>
      )}
    </Paper>
  );
}
