"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Alert from "@mui/material/Alert";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// Import ข้อมูล Mock
import { MOCK_USER } from "../../data/user-mock";

export default function LoginForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
    setError(""); // พิมพ์ใหม่ให้หาย Error
  };

  const handleRememberMeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = async () => {
    // Logic ตรวจสอบ Mock Data
    if (
      formValues.username === MOCK_USER.username &&
      formValues.password === MOCK_USER.password
    ) {
      // ล็อกอินผ่าน -> ไปหน้า Home
      router.push("/home");
    } else {
      // ล็อกอินไม่ผ่าน -> แจ้งเตือน
      setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <Stack spacing={3}>
      {/* แสดง Error ถ้ามี */}
      {error && <Alert severity="error">{error}</Alert>}

      <TextField
        name="username"
        label="Username"
        fullWidth
        variant="outlined"
        onChange={handleChange}
      />

      <TextField
        name="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        fullWidth
        variant="outlined"
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={rememberMe}
            onChange={handleRememberMeChange}
            sx={{
              color: "text.secondary",
              "&.Mui-checked": { color: "#2C66D0" },
            }}
          />
        }
        label="Remember me"
        sx={{ color: "text.secondary" }}
      />

      <Button
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleSubmit}
        sx={{
          mt: 2,
          bgcolor: "#D32F2F",
          color: "common.white",
          fontWeight: "bold",
          "&:hover": { bgcolor: "#B71C1C" },
        }}
      >
        Login
      </Button>
    </Stack>
  );
}
