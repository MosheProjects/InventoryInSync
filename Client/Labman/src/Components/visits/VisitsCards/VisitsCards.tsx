import React, { useState, useEffect } from "react";

import { Grid, Card, Typography, Divider } from "@mui/material";
import { parse, compareDesc } from "date-fns";
import { Visit } from "../../../Constants/dbEnteties";
import { MdOutlineMan2 } from "react-icons/md";
import { getTblByName } from "../../../Api/metadata";

const VisitsCards  = () => {
  const [visitsInfo, setVisitsInfo] = useState<Visit[] | null>(null);
  const [closestVisits, setClosestVisits] = useState<Visit[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getTblByName("visits");
      setVisitsInfo(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (visitsInfo) {
      const sortedVisits = visitsInfo.slice().sort((a: any, b: any) => {
        const dateA = parse(a.date, "yyyy-MM-dd'T'HH:mm:ss.SSSX", new Date());
        const dateB = parse(b.date, "yyyy-MM-dd'T'HH:mm:ss.SSSX", new Date());
        return compareDesc(dateA, dateB);
      });

      const newClosestVisits = sortedVisits.slice(-2).reverse();
      setClosestVisits(newClosestVisits);
    }
  }, [visitsInfo]);

  return (
    <Grid container flexDirection="column" dir="rtl">
      <Typography variant="h5" paddingRight={6} paddingTop={3.2}>
        ביקורים
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="flex-start"
        paddingRight={6}
        paddingTop={1}
      >
        {closestVisits.map((visit, index) => (
          <Grid item key={index} xs={12} sm={7} md={6} lg={3.9}>
            <Card
              sx={{ backgroundColor: "rgb(219, 116, 144)" }}
        
            >
              <Grid
                container
                flexDirection="column"
                paddingTop={2}
                height={210}
              >
                <Grid item paddingRight={2}>
                  <Typography style={{ fontSize: "0.9em" }}>
                    {new Date(visit.createdDate).toLocaleDateString()}
                  </Typography>
                  <Typography style={{ fontSize: "0.9em" }}>
                    {visit.visiter}
                  </Typography>
                  <Typography style={{ fontSize: "0.9em" }}>
                    {new Date(visit.createdDate).toLocaleTimeString()}
                  </Typography>
                  <Divider
                    style={{
                      border: "1px solid black",
                      margin: "0",
                      width: "90%",
                    }}
                  />
                </Grid>

                <Grid item paddingRight={2}>
                  <Grid container alignItems="center" paddingTop={1.8}>
                    <MdOutlineMan2 style={{ marginTop: "1px" }} />
                    <Typography style={{ fontSize: "0.8em" }}>
                      {visit.issuedBy}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item>
                  <Typography paddingTop={2.3} fontSize={11} paddingRight={2.5}>
                    הערות
                  </Typography>
                  <Grid container display="flex" justifyContent="center">
                    <Grid
                      item
                      xs={10}
                      sm={10}
                      md={10}
                      lg={10}
                      height={54}
                      borderRadius={2}
                      border={1}
                    >
                      <Typography
                        paddingRight={1}
                        fontSize={12}
                        paddingTop={0.3}
                      >
                        {visit.comments}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default VisitsCards;
