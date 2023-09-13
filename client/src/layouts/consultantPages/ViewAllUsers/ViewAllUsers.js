import React from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import UserCard from "components/Cards/UserCard";
import "./ViewAllUsers.css";

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

function ViewAllUsers() {
  return (
    <div className="container">
      {doctorProfiles.map((user, id) => (
        <Grid key={id} item xs={4} md={3} xl={1}>
          <MDBox mx={1} mb={1}>
            <UserCard img={user.img} name={user.name} description={user.description} />
          </MDBox>
        </Grid>
      ))}
    </div>
  );
}

export default ViewAllUsers;
