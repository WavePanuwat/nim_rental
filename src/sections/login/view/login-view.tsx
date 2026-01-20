"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import LoginForm from "../login-form";

export default function LoginView() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#F0F2F5",
        p: 2,
      }}
    >
      <Card
        sx={{
          width: 1,
          maxWidth: 900,
          borderRadius: 3,
          boxShadow: theme.shadows[10],
          overflow: "hidden",
          display: "flex",
          bgcolor: "common.white",
          p: 4,
        }}
      >
        <Grid container sx={{ width: "100%" }} spacing={2}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                minHeight: { xs: 300, md: 500 },
                maxWidth: 300,
                mx: "auto",
                borderRadius: 2,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                pt: 15,
              }}
            >
              {/* Background Image */}
              <Box
                component="img"
                src="/background-logo.svg"
                alt="background-logo"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 0,
                }}
              />

              {/* Logo */}
              <Box
                component="img"
                src="/logo.png"
                alt="company-logo"
                sx={{
                  position: "relative",
                  zIndex: 1,
                  width: "45%",
                  height: "auto",
                  filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))",
                  mb: 1,
                }}
              />

              {/* Text Block */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  color: "#F5F5F5",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    lineHeight: 1.0,
                    textShadow: "0px 2px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  NIM RENTAL
                </Typography>

                {/* Link คลิกได้ */}
                <Typography
                  component="a"
                  href="https://www.nimtransport.com"
                  target="_blank" // เปิดหน้าใหม่
                  rel="noopener noreferrer"
                  variant="body2"
                  sx={{
                    mt: 0.5,
                    opacity: 0.8,
                    color: "rgba(255, 255, 255, 0.9)",
                    fontWeight: 400,
                    textDecoration: "none", // เอาขีดเส้นใต้ออก
                    cursor: "pointer",
                    "&:hover": {
                      opacity: 1, // เมื่อชี้เมาส์ให้สีชัดขึ้น
                      textDecoration: "underline", // และมีขีดเส้นใต้
                    },
                  }}
                >
                  www.nimtransport.com
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: { xs: 2, md: 6 },
              py: { xs: 4, md: 0 },
            }}
          >
            <Box sx={{ maxWidth: 480, width: "100%", mx: "auto" }}>
              <Typography
                variant="h4"
                sx={{ mb: 1, fontWeight: "bold", color: "text.primary" }}
              >
                Login
              </Typography>

              <Typography
                variant="body2"
                sx={{ mb: 5, color: "text.secondary" }}
              >
                Welcome back! Please login to your account.
              </Typography>

              <LoginForm />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
