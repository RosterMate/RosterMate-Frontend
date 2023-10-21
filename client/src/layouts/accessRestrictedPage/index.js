import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

// Material-UI components
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function AccessRestricted() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "80vh" }}
    >
      <Typography variant="h4" gutterBottom>
        Access to this page is Restricted
      </Typography>
      <Typography variant="body1" paragraph>
        Please log in as a valid user to gain access.
      </Typography>
      <Button
        type="submit"
        component={Link}
        to="/"
        variant="contained"
        sx={{
          m: 3,
          width: "200px",
          padding: "12px",
          backgroundColor: "#1143C4",
          color: "white",
          borderRadius: "40px",
          "&:hover": {
            backgroundColor: "#2555CF",
          },
        }}
      >
        Login
      </Button>
    </Grid>
  );
}

export default AccessRestricted;
