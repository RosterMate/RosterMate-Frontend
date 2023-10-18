import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/system";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import Typography from "@mui/material/Typography";
import MedicalIcon from "@mui/icons-material/LocalHospital"; // Replace with the actual medical icon

const BlueSection = styled("div")({
  backgroundColor: "skyblue",
  padding: "20px",
  textAlign: "center",
});

const WhiteSection = styled("div")({
  backgroundColor: "white",
  padding: "20px",
  width: "400px",
});

const LargeIcon = styled(LocalHospitalIcon)({
  fontSize: 60,
  marginBottom: "10px",
});

const LargeTitle = styled(DialogTitle)({
  fontSize: "2rem",
});

const SmallDoctor = styled("div")({
  fontSize: "0.9rem",
  color: "gray",
  marginBottom: "10px", // Increase spacing
  marginLeft: "10px",
  display: "flex", // Display elements in a row
  alignItems: "center", // Vertically center elements
});

const MedicalIconStyle = {
  fontSize: 20, // Adjust the medical icon size
  marginRight: "5px", // Add spacing between the icon and the text
};

function WardModal({ open, handleClose, count, wardName, WardNumber, Doctors }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <BlueSection>
        <LargeIcon />
        <LargeTitle>{wardName}</LargeTitle>
      </BlueSection>
      <WhiteSection>
        <DialogContent>
          <Typography variant="body1">Ward Number: {WardNumber}</Typography>
          <Typography variant="body1">Number of Doctors: {count}</Typography>
          <Typography variant="body1">Doctors:</Typography>
          <div>
            {Doctors.map((doctor, index) => (
              <SmallDoctor key={index}>
                <MedicalIcon style={MedicalIconStyle} /> {doctor}
              </SmallDoctor>
            ))}
          </div>
        </DialogContent>
      </WhiteSection>
    </Dialog>
  );
}

export default WardModal;
