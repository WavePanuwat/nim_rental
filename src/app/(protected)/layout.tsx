"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Header from "../../components/header";
import Menu from "../../components/menu";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isHomePage = pathname === "/home" || pathname?.startsWith("/home/");

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          bgcolor: "#F0F2F5",
        }}
      >
        <Box sx={{ position: "sticky", top: 0, zIndex: 1100, bgcolor: "#fff" }}>
          {/* Header */}
          <Header isDashboard={!isHomePage} />

          {/* Menu */}
          {!isHomePage && <Menu />}
        </Box>

        {/* เนื้อหา Page */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>
      </Box>
    </Suspense>
  );
}
