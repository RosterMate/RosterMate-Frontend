import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Cookies from "js-cookie";
// MUI
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// Images
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "./google.svg";
import FacebookIcon from "./Facebook.png";
import Image1 from "./AdminLogin1.png";

// CSS
import "./LogIn.css";

// components and helpers
import Footer from "components/Footer";
import { isEmailValid } from "../../../helpers/validators";

// base url to connect backend
import BASE_URL from "config/baseUrl";

function Icons() {
  return (
    <Box>
      <center>
        <IconButton>
          <img
            src={FacebookIcon}
            alt="Google Logo"
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
            }}
          />
        </IconButton>
        <IconButton>
          <AppleIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <img
            src={GoogleIcon}
            alt="Google Logo"
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
            }}
          />
        </IconButton>
      </center>
    </Box>
  );
}

const defaultTheme = createTheme();

export const USER_TYPES = {
  PUBLIC_USER: "Public",
  ADMIN_USER: "Admin",
  DOCTOR_USER: "Doctor",
  CONSULTANT_USER: "Consultant",
};

export let USER_TYPE = Cookies.get("userType") || USER_TYPES.PUBLIC_USER;
export let USER_EMAIL = Cookies.get("userEmail") || "";

export function LogOut() {
  USER_TYPE = USER_TYPES.PUBLIC_USER;
  USER_EMAIL = "";
  console.log("User logged out");
}

export default function LogIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (email.trim() === "") {
      setEmailError("*Please enter an email.");
    } else if (!isEmailValid(email)) {
      setEmailError("*Please enter a valid email.");
    } else if (password.trim() === "") {
      setPasswordError("*Please login as a valid user to get Access.");
      setEmailError("");
    } else {
      const data = {
        email: email,
        password: password,
      };
      Axios.post(`${BASE_URL}api/login`, data)
        .then((response) => {
          const userData = response.data;
          // const tokenData = { token: userData.token, type: userData.USERTYPE };
          Cookies.set("roster-mate-token", userData.token, {
            expires: new Date(Date.now() + 1 * 60 * 60 * 1000 * 24 * 30),
          });
          Cookies;

          // localStorage.setItem("userType", userData.USERTYPE);
          // localStorage.setItem("userEmail", email);

          //console.log("User data:", userData);
          if (userData.isAuthenticated) {
            USER_EMAIL = email;
            if (userData.USERTYPE === "Admin") {
              USER_TYPE = USER_TYPES.ADMIN_USER;
              navigate("/adminDashboard");
            } else if (userData.USERTYPE === "Doctor") {
              USER_TYPE = USER_TYPES.DOCTOR_USER;
              navigate("/doctorDashboard");
            } else if (userData.USERTYPE === "Consultant") {
              USER_TYPE = USER_TYPES.CONSULTANT_USER;
              navigate("/consultantDashboard");
            } else {
              //console.log("Login type error");
              USER_TYPE = USER_TYPES.PUBLIC_USER;
              navigate("/error");
            }
            Cookies.set("userType", USER_TYPE, {
              expires: new Date(Date.now() + 1 * 60 * 60 * 1000 * 24 * 30),
            });
            Cookies.set("userEmail", USER_EMAIL, {
              expires: new Date(Date.now() + 1 * 60 * 60 * 1000 * 24 * 30),
            });
          } else {
            //console.log("Not Authenticated User");
            USER_TYPE = USER_TYPES.PUBLIC_USER;
            setPasswordError("*Please login as a valid user to get Access.");
          }
        })
        .catch((error) => {
          // Handle any errors from the backend
          console.error("Login error:", error);
          navigate("/error");
        });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              ml: 5,
              mr: 5,
              mt: 5,
              mb: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h2"
              style={{
                fontWeight: "bold",
                alignSelf: "flex-start",
                fontFamily: "Georgia, sans-serif",
              }}
              sx={{ mb: 0 }}
            >
              Roster Mate
            </Typography>
            <Typography
              variant="h4"
              style={{
                fontFamily: "Georgia, sans-serif",
                fontWeight: "bold",
                alignSelf: "flex-start",
              }}
              sx={{ mb: 3 }}
            >
              Login
            </Typography>

            <Typography variant="h5" style={{ alignSelf: "flex-start" }}>
              Email
              {emailError && (
                <Typography variant="body2" color="error" style={{ alignSelf: "flex-start" }}>
                  {emailError}
                </Typography>
              )}
            </Typography>
            <TextField
              type="text"
              autoComplete="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              InputProps={{
                style: { borderRadius: "100px" },
              }}
              style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}
            />

            <Typography variant="h5" style={{ alignSelf: "flex-start" }}>
              Password
            </Typography>
            <TextField
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              InputProps={{
                style: { borderRadius: "100px" },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}
            />
            {passwordError && (
              <Typography variant="body2" color="error" style={{ alignSelf: "flex-start" }}>
                {passwordError}
              </Typography>
            )}

            <Grid item style={{ marginTop: "10px", alignSelf: "flex-start" }}>
              <Link href="#" variant="body1">
                Forgot password?
              </Link>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                padding: "12px",
                backgroundColor: "#1143C4",
                color: "white",
                borderRadius: "40px",
                "&:hover": {
                  backgroundColor: "#2555CF",
                },
              }}
              onClick={handleLogin}
            >
              Login
            </Button>

            <Icons />

            <Footer sx={{ mt: 5 }} />
          </Box>
        </Grid>

        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: `url(${Image1})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "#ffffff",
            backgroundSize: "auto 100%",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
