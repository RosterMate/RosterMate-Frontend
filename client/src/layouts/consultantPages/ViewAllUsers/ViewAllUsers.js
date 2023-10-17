import React, { useState, useEffect } from "react";
import Axios from "axios";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import UserCard from "../../../components/Cards/UserCard";
import "./ViewAllUsers.css";
import { USER_TYPE, USER_EMAIL } from "layouts/authentication/sign-in";
import BASE_URL from "config/baseUrl";
import Loading from "components/Loading";

function ViewAllUsers() {
  const [allDetails, setAllDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const data = {
      email: USER_EMAIL,
      type: USER_TYPE,
    };
    Axios.post(`${BASE_URL}mainApp/consViewDoctors`, data)
      .then((response) => {
        setAllDetails(response.data);
        console.log("view_all data:", response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching view All users details:", error);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container">
          {allDetails.map((user, id) => (
            <Grid key={id} item xs={4} md={3} xl={1}>
              <MDBox mx={1} mb={1}>
                <UserCard img={user.img} name={user.name} description={user.position} />
              </MDBox>
            </Grid>
          ))}
        </div>
      )}
    </>
  );
}

export default ViewAllUsers;
