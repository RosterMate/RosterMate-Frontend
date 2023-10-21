import React, { useState, useEffect } from "react";
import Axios from "axios";
import { USER_EMAIL, USER_TYPE } from "layouts/authentication/sign-in";

// base url to connect backend
import BASE_URL from "config/baseUrl";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "../../../examples/DataTable";
import MDAvatar from "components/MDAvatar";
import { Typography } from "@mui/material";
import defaultImg from "assets/images/profilePictures/DefaultProfilePic.png";

function DoctorDetailsTable() {
  const User = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const columns = [
    { Header: "doctor", accessor: "doctor", width: "45%", align: "left" },
    { Header: "position", accessor: "position", align: "left" },
    { Header: "mobile", accessor: "mobile", align: "center" },
    { Header: "address", accessor: "address", align: "center" },
    { Header: "ward Number", accessor: "wardNumber", align: "center" },
    { Header: "Degree", accessor: "Degree", align: "center" },
    { Header: "Specialization", accessor: "Specialization", align: "center" },
  ];

  const [originalData, setOriginalData] = useState([]);

  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Doctor all details
    Axios.post(`${BASE_URL}mainApp/adminViwAllDocDetails`, { type: USER_TYPE })
      .then((response1) => {
        if (response1.data["message"]) {
          console.log(response1.data["message"]);
        } else {
          setOriginalData(response1.data);
          //console.log("doctorDetails data:", response1.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching doctor details:", error);
      });
  }, []);

  useEffect(() => {
    const transformedData = originalData.map((item) => ({
      doctor: <User image={item.img ? item.img : defaultImg} name={item.name} email={item.email} />,
      position: (
        <Typography variant="caption" color="text" fontWeight="medium">
          {item.position}
        </Typography>
      ),
      mobile: (
        <Typography variant="caption" color="text" fontWeight="medium">
          {item.mobile}
        </Typography>
      ),
      address: (
        <Typography variant="caption" color="text" fontWeight="medium">
          {item.address}
        </Typography>
      ),
      wardNumber: (
        <Typography variant="caption" color="text" fontWeight="medium">
          {item.wardNumber}
        </Typography>
      ),
      Degree: (
        <Typography variant="caption" color="text" fontWeight="medium">
          {item.Degree}
        </Typography>
      ),
      Specialization: (
        <Typography variant="caption" color="text" fontWeight="medium">
          {item.Specialization}
        </Typography>
      ),
    }));

    setRows(transformedData);
  });

  return (
    <>
      <MDTypography variant="h3" display="flex">
        Doctor Details
      </MDTypography>
      <MDBox pt={1} pb={2}>
        <Grid item xs={12}>
          <Card>
            <MDBox pt={3}>
              <DataTable
                table={{ columns, rows }}
                isSorted={false}
                entriesPerPage={false}
                showTotalEntries={false}
                noEndBorder
              />
            </MDBox>
          </Card>
        </Grid>
      </MDBox>
    </>
  );
}

export default DoctorDetailsTable;
