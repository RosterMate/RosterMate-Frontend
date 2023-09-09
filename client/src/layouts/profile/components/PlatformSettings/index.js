import { useState } from "react";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import "./settings.css";

function PlatformSettings() {
  const [followsMe, setFollowsMe] = useState(true);
  const [answersPost, setAnswersPost] = useState(false);
  const [mentionsMe, setMentionsMe] = useState(true);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(false);

  return (
    <Card sx={{ boxShadow: "none" }}>
      <MDBox p={2}>
        <MDTypography variant="h4" fontWeight="medium" textTransform="capitalize">
          Update Profile
        </MDTypography>
      </MDBox>

      <div className="accountsettings">
        <div className="form">
          <div className="form-group">
            <label htmlFor="name">
              {" "}
              <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                First Name
              </MDTypography>{" "}
            </label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="form-group">
            <label htmlFor="name">
              {" "}
              <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                Last Name
              </MDTypography>{" "}
            </label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="form-group">
            <label htmlFor="name">
              {" "}
              <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                Email
              </MDTypography>{" "}
            </label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="form-group">
            <label htmlFor="name">
              {" "}
              <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                Phone Number
              </MDTypography>{" "}
            </label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="form-group">
            <label htmlFor="name">
              {" "}
              <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                Address
              </MDTypography>{" "}
            </label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="form-group">
            <label htmlFor="name">
              {" "}
              <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                Password
              </MDTypography>{" "}
            </label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="form-group">
            <label htmlFor="name">
              {" "}
              <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                Nationality
              </MDTypography>{" "}
            </label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="form-group">
            <label htmlFor="name">
              {" "}
              <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                Designation
              </MDTypography>{" "}
            </label>
            <input type="text" name="name" id="name" />
          </div>
        </div>
        <button className="mainbutton1">Save Changes</button>
      </div>
    </Card>
  );
}

export default PlatformSettings;
