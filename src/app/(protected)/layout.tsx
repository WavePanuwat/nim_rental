"use client";

import { Suspense } from "react";
import Box from "@mui/material/Box";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#F9FAFB",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>
      </Box>
    </Suspense>
  );
}
