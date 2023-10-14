import React, { useEffect, useState } from "react";
import Axios from "axios";

// React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// components
import MDBox from "components/MDBox";
import ProfileCard from "components/ProfileCard";
import Configurator from "components/Settings";
import { USER_TYPE, USER_EMAIL } from "layouts/authentication/sign-in";

// base url to connect backend
import BASE_URL from "config/baseUrl";
import Loading from "components/Loading";

function Profile() {
  const [details, setDetails] = useState({
    img: "",
    name: "",
    position: "",
    address: "",
    Specialization: "",
    mobile: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  const data = {
    email: USER_EMAIL,
    type: USER_TYPE,
  };
  useEffect(() => {
    Axios.post(`${BASE_URL}mainApp/view_profile`, data)
      .then((response) => {
        setDetails(response.data);
        console.log("view_profile data:", response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching view_profile details:", error);
      });
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={7}>
          <MDBox mb={1.5}>
            {isLoading ? (
              <Loading />
            ) : (
              <ProfileCard
                img={details.img}
                name={details.name}
                email={USER_EMAIL}
                position={details.position}
                address={details.address}
                information={details.Specialization}
                mobile={details.mobile}
              />
            )}
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <MDBox mb={1.5}>
            <Card
              style={{
                width: "100%",
                padding: "1rem",
              }}
            >
              <Configurator />
            </Card>
          </MDBox>
        </Grid>
      </Grid>

      <Footer />
    </DashboardLayout>
  );
}

export default Profile;
