import React from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import WardCard from "components/Cards/WardCard";
import "./ViewAllWards.css";

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

const ViewAllWards = () => {
  return (
    <div className="container">
      {wardDetails.map((ward, id) => (
        <Grid item xs={12} md={6} lg={3} key={id}>
          <MDBox mx={1} mb={1} mt={2}>
            <WardCard icon={ward.icon} wardName={ward.wardName} count={ward.count} />
          </MDBox>
        </Grid>
      ))}
    </div>
  );
};

export default ViewAllWards;
