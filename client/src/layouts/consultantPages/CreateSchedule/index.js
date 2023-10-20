import React, { useEffect, useState } from "react";
import Axios from "axios";

// components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";
import MDTypography from "components/MDTypography";
import CreateScheduleForm from "layouts/consultantPages/CreateSchedule/CreateScheduleForm";
import Card from "@mui/material/Card";
import BASE_URL from "config/baseUrl";
import { USER_EMAIL } from "layouts/authentication/sign-in";
import { Typography } from "@mui/material";

function CreateSchedule() {
  const [numDoc, setNumDoc] = useState("");
  const [wardName, setWardName] = useState("");

  useEffect(() => {
    Axios.post(`${BASE_URL}mainApp/getScheduleConstraints`, { email: USER_EMAIL })
      .then((response) => {
        setWardName(response.data.wardName);
        setNumDoc(response.data.NoOfDoctors);
      })
      .catch((error) => {
        console.error("Error fetching doctor details:", error);
      });
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDTypography variant="h3" display="flex">
        Create Schedule for {wardName || "ward"}
      </MDTypography>

      <Card
        sx={{
          mt: 1,
          mx: 1,
          px: 2,
          pb: 2,
        }}
      >
        <div style={{ marginTop: "10px" }}>
          <Typography>Number of doctors in ward : {numDoc}</Typography>
        </div>
        <CreateScheduleForm numDoc={parseInt(numDoc, 10)} />
      </Card>

      <Footer />
    </DashboardLayout>
  );
}

export default CreateSchedule;
