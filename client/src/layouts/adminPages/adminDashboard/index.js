import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

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

// base url to connect backend
import BASE_URL from "config/baseUrl";
import Loading from "components/Loading";

function AdminDashboard() {
  const [wardDetails, setWardDetails] = useState([]);
  const [docDetails, setDocDetails] = useState([]);
  const [conDetails, setConDetails] = useState([]);
  const [isLoadingWardDetails, setIsLoadingWardDetails] = useState(true);
  const [isLoadingDocDetails, setIsLoadingDocDetails] = useState(true);
  const [isLoadingConDetails, setIsLoadingConDetails] = useState(true);

  useEffect(() => {
    Axios.post(`${BASE_URL}mainApp/wardDetails`, {})
      .then((response) => {
        setWardDetails(response.data);
        //console.log("wardDetails data:", wardDetails);
        setIsLoadingWardDetails(false);
      })
      .catch((error) => {
        console.error("Error fetching ward details:", error);
      });

    Axios.post(`${BASE_URL}mainApp/doctorDetails`)
      .then((response2) => {
        setDocDetails(response2.data);
        //console.log("doctorDetails data:", response2.data);
        setIsLoadingDocDetails(false);
      })
      .catch((error) => {
        console.error("Error fetching doctor details:", error);
      });

    Axios.post(`${BASE_URL}mainApp/consultantDetails`, {})
      .then((response3) => {
        setConDetails(response3.data);
        //console.log("consultantDetails data:", conDetails);
        setIsLoadingConDetails(false);
      })
      .catch((error) => {
        console.error("Error fetching doctor details:", error);
      });
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDTypography variant="h3" display="flex">
        Wards
      </MDTypography>
      <MDBox py={2} mx={-3}>
        {isLoadingWardDetails ? (
          <Loading />
        ) : (
          <ScrollableContainer itemWidth={240}>
            {wardDetails.map((ward, id) => (
              <Grid item xs={12} md={6} lg={3} key={id}>
                <MDBox mx={1} mb={1} mt={2}>
                  <WardCard
                    wardName={ward.wardName}
                    wardNumber={ward.wardNumber}
                    Doctors={ward.Doctors}
                    count={ward.NoOfDoctors}
                  />
                </MDBox>
              </Grid>
            ))}
          </ScrollableContainer>
        )}
      </MDBox>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <MDTypography variant="h3" display="flex">
          Doctors
        </MDTypography>
        <Link to="/allUsers">View all</Link>
      </div>
      <MDBox py={2} mx={-3}>
        {isLoadingDocDetails ? (
          <Loading />
        ) : (
          <ScrollableContainer>
            {docDetails.map((user, id) => (
              <Grid key={id} item xs={6} md={3} xl={2}>
                <MDBox mx={1} mb={1}>
                  <UserCard
                    img={user.img}
                    name={user.name}
                    description={user.position}
                    email={user.email}
                    address={user.address}
                    ward={user.wardNumber}
                    degree={user.Degree}
                    mobile={user.mobile}
                  />
                </MDBox>
              </Grid>
            ))}
          </ScrollableContainer>
        )}
      </MDBox>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <MDTypography variant="h3" display="flex">
          Consultants
        </MDTypography>
        <Link to="/allUsers">View all</Link>
      </div>
      <MDBox py={2} mx={-3}>
        {isLoadingConDetails ? (
          <Loading />
        ) : (
          <ScrollableContainer>
            {conDetails.map((user, id) => (
              <Grid key={id} item xs={6} md={3} xl={2}>
                <MDBox mx={1} mb={1}>
                  <UserCard
                    img={user.img}
                    name={user.name}
                    description={user.position}
                    email={user.email}
                    address={user.address}
                    ward={user.wardNumber}
                    degree={user.Degree}
                    mobile={user.mobile}
                  />
                </MDBox>
              </Grid>
            ))}
          </ScrollableContainer>
        )}
      </MDBox>

      <Footer />
    </DashboardLayout>
  );
}

export default AdminDashboard;
