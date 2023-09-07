import React from "react";

// example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";

// @mui material components
import Grid from "@mui/material/Grid";

// components
import MDBox from "components/MDBox";
import WardCard from "components/Cards/WardCard";
import UserCard from "components/Cards/UserCard";
import MDTypography from "components/MDTypography";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDTypography variant="h3" display="flex">
        Wards
      </MDTypography>
      <MDBox pt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <WardCard icon="weekend" wardName="ICU 1" count={7} />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <WardCard icon="weekend" wardName="ICU 2" count={6} />
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <WardCard icon="store" wardName="ENT" count={4} />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <WardCard icon="store" wardName="Oncology" count={5} />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>

      <MDTypography variant="h3" display="flex">
        Doctors
      </MDTypography>
      <MDBox py={2}>
        <Grid item xs={12} md={4} lg={8}>
          <Grid container spacing={3}>
            <Grid item xs={6} md={3} xl={2}>
              <UserCard
                img="https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg"
                name="David Lee"
                description="Neurologist"
              />
            </Grid>
            <Grid item xs={6} md={3} xl={2}>
              <UserCard
                img="https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg"
                name="David Lee2"
                description="Neurologist"
              />
            </Grid>
            <Grid item xs={6} md={3} xl={2}>
              <UserCard
                img="https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg"
                name="David Lee3"
                description="Neurologist"
              />
            </Grid>
            <Grid item xs={6} md={3} xl={2}>
              <UserCard
                img="https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg"
                name="David Lee4"
                description="Neurologist"
              />
            </Grid>
            <Grid item xs={6} md={3} xl={2}>
              <UserCard
                img="https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg"
                name="David Lee5"
                description="Neurologist"
              />
            </Grid>
            <Grid item xs={6} md={3} xl={2}>
              <UserCard
                img="https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg"
                name="David Lee6"
                description="Neurologist"
              />
            </Grid>
          </Grid>
        </Grid>
      </MDBox>

      <MDTypography variant="h3" display="flex">
        Consultants
      </MDTypography>
      <MDBox py={2}>
        <Grid item xs={12} md={4} lg={8}>
          <Grid container spacing={3}>
            <Grid item xs={6} md={3} xl={2}>
              <UserCard
                img="https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg"
                name="David Lee"
                description="Neurologist"
              />
            </Grid>
            <Grid item xs={6} md={3} xl={2}>
              <UserCard
                img="https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg"
                name="David Lee2"
                description="Neurologist"
              />
            </Grid>
            <Grid item xs={6} md={3} xl={2}>
              <UserCard
                img="https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg"
                name="David Lee3"
                description="Neurologist"
              />
            </Grid>
            <Grid item xs={6} md={3} xl={2}>
              <UserCard
                img="https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg"
                name="David Lee4"
                description="Neurologist"
              />
            </Grid>
            <Grid item xs={6} md={3} xl={2}>
              <UserCard
                img="https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg"
                name="David Lee5"
                description="Neurologist"
              />
            </Grid>
            <Grid item xs={6} md={3} xl={2}>
              <UserCard
                img="https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg"
                name="David Lee6"
                description="Neurologist"
              />
            </Grid>
          </Grid>
        </Grid>
      </MDBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
