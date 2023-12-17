

import React from 'react';
import { Container, Grid, Paper } from '@mui/material';
import TakenItemsCards from '../../Components/takenItems/TakenItemsCards/TakenItemsCards';
import VisitsCards from '../../Components/visits/VisitsCards/VisitsCards';
import './dashboard.css';
import AddProductForm from '../../Components/AddProductForm/AddProductForm';
import LendingForm from '../../Components/LendingForm/LendingForm';

const Dashboard = () => {
  
  return (
    <div  className="dashboardContainer">
    {/* <Grid container spacing={3} >
        <Grid item md={6} xs={6}>
          <TakenItemsCards/>
        </Grid>
        <Grid item  md={6} xs={6}>
          <VisitsCards/>
        </Grid>
      </Grid> */}
      <div>
        <LendingForm/>
      </div>
    </div>
 
  );
};

export default Dashboard;