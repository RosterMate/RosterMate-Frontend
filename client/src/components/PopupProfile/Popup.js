import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SchoolIcon from "@mui/icons-material/School";
import PhoneIcon from "@mui/icons-material/Phone";
import imageDefault from "./defaultAvatar.jpg";

function ProfileModal({
  open,
  handleClose,
  name,
  position,
  img,
  email,
  address,
  ward,
  degree,
  mobile,
}) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Card sx={{ maxWidth: 400, margin: "auto" }}>
        <CardMedia
          component="img"
          height="200"
          image={img === "" ? imageDefault : img} // Use a default avatar when img is empty
          alt={name}
        />
        <CardContent>
          <DialogTitle sx={{ textAlign: "center" }}>{name}</DialogTitle>
          <DialogContent sx={{ textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary">
              <PersonIcon /> {position}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <EmailIcon /> {email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <HomeIcon /> {address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <ApartmentIcon /> Ward {ward}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <SchoolIcon /> {degree}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <PhoneIcon /> {mobile}
            </Typography>
          </DialogContent>
        </CardContent>
      </Card>
    </Dialog>
  );
}

export default ProfileModal;
