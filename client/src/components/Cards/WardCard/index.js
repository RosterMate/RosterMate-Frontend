// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function WardCard({ color, wardName, count, icon }) {
  return (
    <Card
      style={{
        width: "14rem",
      }}
    >
      <MDBox display="flex" justifyContent="space-between" pt={1} px={2}>
        <MDBox
          variant="gradient"
          bgColor={color}
          color={color === "light" ? "dark" : "white"}
          coloredShadow={color}
          borderRadius="xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          mt={-3}
        >
          <Icon fontSize="medium" color="inherit">
            {icon}
          </Icon>
        </MDBox>
        <MDBox textAlign="right" lineHeight={1.25}>
          <MDTypography variant="h4">{wardName}</MDTypography>
        </MDBox>
      </MDBox>
      <Divider />
      <MDBox display="flex" pb={1} px={2} justifyContent="center" alignItems="center">
        <MDTypography variant="button" display="flex" color="text" fontWeight="bold">
          Doctors : {count}
        </MDTypography>
      </MDBox>
      <MDBox display="flex" justifyContent="center" alignItems="center">
        <MDBox
          variant="gradient"
          bgColor={color}
          color={color === "light" ? "dark" : "white"}
          coloredShadow={color}
          borderRadius="xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mx={2}
          mb={1}
          p={0.5}
          width="8rem"
        >
          <MDTypography variant="button" display="flex" fontWeight="regular">
            View Details
          </MDTypography>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of WardCard
WardCard.defaultProps = {
  color: "info",
};

// Typechecking props for the WardCard
WardCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  wardName: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.node,
};

export default WardCard;
