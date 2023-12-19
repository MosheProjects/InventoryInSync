import React, { useState, ReactNode } from "react";
import { Container, Grid, Button, Popover, Typography } from "@mui/material";
import TakenItemsCards from "../../Components/takenItems/TakenItemsCards/TakenItemsCards";
import VisitsCards from "../../Components/visits/VisitsCards/VisitsCards";
import "./dashboard.css";
import AddProductForm from "../../Components/AddProductForm/AddProductForm";
import LendingForm from "../../Components/LendingForm/LendingForm";
import TableData from "../../Components/DisplayProducts/TableData";
import screenDashboard from "../../img/screenDashboard.jpg"
const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<ReactNode | null>(
    null
  );

  const handleButtonClick = (
    event: React.MouseEvent<HTMLElement>,
    component: ReactNode
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedComponent(component);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setSelectedComponent(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Grid container className="dashboardContainer" >
      <Grid container spacing={3}>
        <Grid item md={6} xs={6} height={"80%"}>
          <TakenItemsCards />
        </Grid>
        <Grid item md={5} xs={6}>
          <VisitsCards />
        </Grid>

        <Grid
          container
          justifyContent={"space-evenly"}
          height={20}
        >
          <Button
            variant="outlined"
            onClick={(e) => handleButtonClick(e, <LendingForm />)}
            style={{
              backgroundColor: "#cccccc",
              color: "black",
              border: "#cccccc",
            }}
          >
            טופס השאלה
          </Button>
          <Button
            variant="outlined"
            onClick={(e) => handleButtonClick(e, <AddProductForm />)}
            style={{
              backgroundColor: "#cccccc",
              color: "black",
              border: "#cccccc",
            }}
          >
            הוספת פריטים
          </Button>
          <Button
            variant="outlined"
            onClick={(e) => handleButtonClick(e, <TableData />)}
            style={{
              backgroundColor: "#cccccc",
              color: "black",
              border: "#cccccc",
            }}
          >
            טבלת פריטים
          </Button>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClosePopover}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography>
              {selectedComponent}
              <Button
                variant="outlined"
                style={{ cursor: "pointer", marginTop: "16px" }}
                onClick={handleClosePopover}
              >
                Close Popover
              </Button>
            </Typography>
          </Popover>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
