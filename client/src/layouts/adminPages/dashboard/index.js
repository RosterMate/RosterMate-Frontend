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
import ScrollableContainer from "components/ScrollableContainer";

const wardDetails = [
  { icon: "weekend", wardName: "ICU 1", count: 7 },
  { icon: "weekend", wardName: "ICU 2", count: 6 },
  { icon: "store", wardName: "ENT 1", count: 4 },
  { icon: "store", wardName: "ENT 2", count: 4 },
  { icon: "store", wardName: "ENT 3", count: 4 },
  { icon: "store", wardName: "Oncology 1", count: 5 },
  { icon: "store", wardName: "Oncology 2", count: 5 },
  { icon: "store", wardName: "Oncology 3", count: 5 },
];

const doctorProfiles = [
  {
    name: "David Lee",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg",
  },
  {
    name: "David Lee2",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg",
  },
  {
    name: "David Lee3",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg",
  },
  {
    name: "David Lee4",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg",
  },
  {
    name: "David Lee5",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg",
  },
  {
    name: "David Lee6",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg",
  },
  {
    name: "David Lee6",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc2.jpeg",
  },
  {
    name: "David Lee",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg",
  },
  {
    name: "David Lee2",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg",
  },
  {
    name: "David Lee3",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg",
  },
  {
    name: "David Lee4",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc4.jpeg",
  },
  {
    name: "David Lee5",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc3.jpeg",
  },
  {
    name: "David Lee6",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc2.jpeg",
  },
];

const consultantProfiles = [
  {
    name: "David Lee",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg",
  },
  {
    name: "David Lee2",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg",
  },
  {
    name: "David Lee3",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg",
  },
  {
    name: "David Lee4",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc4.jpeg",
  },
  {
    name: "David Lee5",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc3.jpeg",
  },
  {
    name: "David Lee6",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc2.jpeg",
  },
  {
    name: "David Lee",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg",
  },
  {
    name: "David Lee2",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg",
  },
  {
    name: "David Lee3",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc1.jpeg",
  },
  {
    name: "David Lee4",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc4.jpeg",
  },
  {
    name: "David Lee5",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc3.jpeg",
  },
  {
    name: "David Lee6",
    description: "Neurologist",
    img: "https://raw.githubusercontent.com/RosterMate/RosterMate-Client/main/client/src/assets/images/profilePictures/Doc2.jpeg",
  },
];

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDTypography variant="h3" display="flex">
        Wards
      </MDTypography>
      <MDBox py={2} mx={-3}>
        <ScrollableContainer itemWidth={240}>
          {wardDetails.map((ward, id) => (
            <Grid item xs={12} md={6} lg={3} key={id}>
              <MDBox mx={1} mb={1} mt={2}>
                <WardCard icon={ward.icon} wardName={ward.wardName} count={ward.count} />
              </MDBox>
            </Grid>
          ))}
        </ScrollableContainer>
      </MDBox>

      <MDTypography variant="h3" display="flex">
        Doctors
      </MDTypography>
      <MDBox py={2} mx={-3}>
        <ScrollableContainer>
          {doctorProfiles.map((user, id) => (
            <Grid key={id} item xs={6} md={3} xl={2}>
              <MDBox mx={1} mb={1}>
                <UserCard img={user.img} name={user.name} description={user.description} />
              </MDBox>
            </Grid>
          ))}
        </ScrollableContainer>
      </MDBox>

      <MDTypography variant="h3" display="flex">
        Consultants
      </MDTypography>
      <MDBox py={2} mx={-3}>
        <ScrollableContainer>
          {consultantProfiles.map((user, id) => (
            <Grid key={id} item xs={6} md={3} xl={2}>
              <MDBox mx={1} mb={1}>
                <UserCard img={user.img} name={user.name} description={user.description} />
              </MDBox>
            </Grid>
          ))}
        </ScrollableContainer>
      </MDBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
