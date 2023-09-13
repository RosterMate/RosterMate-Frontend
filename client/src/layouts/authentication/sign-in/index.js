import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

// MUI
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton } from "@mui/material";

// Images
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "./google.svg";
import FacebookIcon from "./Facebook.png";
import Image1 from "./AdminLogin1.png";

// CSS
import "./LogIn.css";

// components
import Footer from "components/Footer";

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

export let USER_TYPE = USER_TYPES.PUBLIC_USER;

export default function LogIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    //console.log("Email:", email);
    //console.log("Password:", password);

    if (email.trim() !== "" && password.trim() !== "") {
      const apiUrl = "http://127.0.0.1:8000/api/login";

      const data = {
        email: email,
        password: password,
      };

      Axios.post(apiUrl, data)
        .then((response) => {
          const userData = response.data;
          console.log("User data:", userData);
          if (userData.isAuthenticated) {
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
              console.log("Login type error");
              USER_TYPE = USER_TYPES.PUBLIC_USER;
              navigate("/error");
            }
          } else {
            console.log("Not Authenticated User");
            USER_TYPE = USER_TYPES.PUBLIC_USER;
            navigate("/error");
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
              style={{ fontWeight: "bold", alignSelf: "flex-start" }}
              sx={{ mb: 3 }}
            >
              Login
            </Typography>

            <Typography variant="h5" style={{ alignSelf: "flex-start" }}>
              Email
            </Typography>
            <input
              type="text"
              className="rounded-input"
              placeholder="Email"
              id="email"
              autoComplete="email"
              required
              value={email}
              onChange={handleEmailChange}
            />

            <Typography variant="h5" style={{ alignSelf: "flex-start" }}>
              Password
            </Typography>
            <input
              type="password"
              className="rounded-input"
              placeholder="Password"
              id="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={handlePasswordChange}
            />

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
