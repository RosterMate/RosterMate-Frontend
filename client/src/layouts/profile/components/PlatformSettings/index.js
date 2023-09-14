import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import "./settings.css";

function PlatformSettings() {
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
                Designation
              </MDTypography>{" "}
            </label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="form-group1">
            <label htmlFor="name">
              {" "}
              <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                Profile Information
              </MDTypography>{" "}
            </label>
            <input type="text" name="name" id="name" />
          </div>
        </div>
        <button className="mainbutton1">
          <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            Save Changes
          </MDTypography>
        </button>
      </div>
    </Card>
  );
}

export default PlatformSettings;
