// ไฟล์: components/header.tsx
"use client";

import { useState, useMemo } from "react";
// ✅ 1. Import useRouter เพื่อใช้เปลี่ยนหน้า
import { useSearchParams, useRouter } from "next/navigation";

import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Stack,
  Button,
  Avatar,
  Container,
  Divider,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

import { MOCK_USER, MOCK_BUILDINGS } from "../data/mock-data";

interface HeaderProps {
  isDashboard?: boolean;
}

export default function Header({ isDashboard = false }: HeaderProps) {
  // ✅ 2. ประกาศตัวแปร router
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const searchParams = useSearchParams();
  const buildingId = searchParams.get("id");

  const selectedBuildingName = useMemo(() => {
    if (!buildingId || !isDashboard) return "";
    const building = MOCK_BUILDINGS.find((b) => b.id === Number(buildingId));
    return building ? building.name : "";
  }, [buildingId, isDashboard]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // ✅ 3. แก้ไขฟังก์ชัน Logout ให้เด้งไปหน้า Login
  const handleLogout = () => {
    handleClose();
    console.log("Logging out...");
    // ล้างค่า Token หรือ Session ตรงนี้ (ถ้ามี)
    router.push("/login"); // ส่งไปหน้า Login
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#D70024", boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: "50px !important",
            justifyContent: "space-between",
          }}
        >
          {/* ✅ 4. เพิ่ม onClick ที่ Stack ของ Logo เพื่อกลับหน้า Home */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            onClick={() => router.push("/home")} // กดแล้วกลับหน้า Home
            sx={{ cursor: "pointer" }} // เปลี่ยนเมาส์เป็นรูปมือ
          >
            <Box
              component="img"
              src="/logo.png"
              alt="Company Logo"
              sx={{ height: 40, width: "auto", objectFit: "contain" }}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: 500, letterSpacing: 0.5, color: "#fff" }}
            >
              NIM RENTAL
            </Typography>
          </Stack>

          {/* User & Info */}
          <Stack direction="row" alignItems="center" sx={{ height: "50px" }}>
            {isDashboard && selectedBuildingName && (
              <>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  sx={{ mr: 1, display: { xs: "none", md: "flex" } }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: "#fff", fontSize: "0.95rem" }}
                  >
                    {selectedBuildingName}
                  </Typography>
                </Stack>

                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    mx: 2,
                    height: 30,
                    alignSelf: "center",
                    bgcolor: "rgba(255, 255, 255, 0.8)",
                  }}
                />
              </>
            )}

            {/* ปุ่ม Profile */}
            <Button
              color="inherit"
              endIcon={<ExpandMoreIcon fontSize="small" />}
              onClick={handleClick}
              sx={{ textTransform: "none", px: 1, color: "#fff" }}
            >
              <Avatar sx={{ width: 24, height: 24, mr: 1, bgcolor: "#eee" }} />

              <Typography
                variant="body2"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                {MOCK_USER.first_name} {MOCK_USER.last_name}
              </Typography>
            </Button>

            {/* Menu Dropdown */}
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ "aria-labelledby": "basic-button" }}
              PaperProps={{
                elevation: 4,
                sx: { mt: 1, minWidth: 200, borderRadius: 1 },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose} sx={{ py: 1 }}>
                <ListItemIcon>
                  <PersonIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="body2">แก้ไขข้อมูลส่วนตัว</Typography>
              </MenuItem>
              <Divider />

              {/* ปุ่มออกจากระบบ เรียกใช้ handleLogout ที่แก้ไว้ด้านบน */}
              <MenuItem onClick={handleLogout} sx={{ py: 1 }}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" color="error" />
                </ListItemIcon>
                <Typography variant="body2" color="error">
                  ออกจากระบบ
                </Typography>
              </MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
