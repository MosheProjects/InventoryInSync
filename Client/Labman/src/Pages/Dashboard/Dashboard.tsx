import React, { useState, ReactNode } from "react";
import { Container, Grid, Paper, Button,Popover,Typography } from "@mui/material";
import TakenItemsCards from "../../Components/takenItems/TakenItemsCards/TakenItemsCards";
import VisitsCards from "../../Components/visits/VisitsCards/VisitsCards";
import "./dashboard.css";
import AddProductForm from "../../Components/AddProductForm/AddProductForm";
import LendingForm from "../../Components/LendingForm/LendingForm";
import TableData from '../../Components/DisplayProducts/TableData'
import { JSX } from "react/jsx-runtime";



const Dashboard = () => {


 const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<ReactNode | null>(null);

  const handleButtonClick = (event: React.MouseEvent<HTMLElement>, component: ReactNode) => {
    setAnchorEl(event.currentTarget);
    setSelectedComponent(component);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setSelectedComponent(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="dashboardContainer">
      <Grid container spacing={3}>
        <Grid item md={6} xs={6}>
          <TakenItemsCards />
        </Grid>
        <Grid item md={6} xs={6}>
          <VisitsCards />
        </Grid>

        <Grid container justifyContent="center">
          <Button
            variant="contained"
            onClick={(e) => handleButtonClick(e, <LendingForm />)}
          >
            השאלה
          </Button>
          <Button
            variant="contained"
            onClick={(e) => handleButtonClick(e, <AddProductForm />)}
          >
            הוספת פריטים
          </Button>
          <Button
            variant="contained"
            onClick={(e) => handleButtonClick(e, <TableData />)}
          >
            טבלת פריטים
          </Button>

          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClosePopover}
            anchorOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
          >
            {/* Your popover content */}
            <Typography style={{ padding: "20px" }}>
              {selectedComponent}
              <Button onClick={handleClosePopover}>Close Popover</Button>
            </Typography>
          </Popover>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
