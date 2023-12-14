import React, { useState, useEffect } from "react";
import { getTblByName } from "../../../Api/metadata";
import {
  Card,
  Typography,
  Grid,
} from "@mui/material";
import { TAKEN_ITEMS } from "../../../Constants/dbEnteties";
import "./takenItemsCards.css";

const takenItemsCards = () => {
  const [takenItemInfo, setTakenItemInfo] = useState<TAKEN_ITEMS[] | null>(
    null
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getTblByName("taken_items");
      setTakenItemInfo(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getCategoryColor = (category: string): string => {
    let color;

    switch (category.trim()) {
      case "רתמות":
        color = "rgba(255, 254, 203, 0.804)";
        break;
      case "מחשבים":
        color = "rgba(196, 255, 228, 0.804)";
        break;
      default:
        color = "gray";
        break;
    }

    return color;
  };

  return (
    <Grid container flexDirection="column" dir="rtl">
      <Typography variant="h5" paddingTop={3.2}>
        ציוד בשטח
      </Typography>
      <Grid 
        container
        spacing={2}
        justifyContent="flex-start"
     paddingLeft={5}
     paddingTop={1}
      >
        {takenItemInfo &&
          takenItemInfo.map((item, index) => (
            <Grid
           
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={4}
            >
              <Card
                style={{
                  backgroundColor: getCategoryColor(item.item_category),
           
                }}
              >
                <Grid
                  container
                  flexDirection="column"
                  justifyContent="space-between"
                  height={210}
                  paddingRight={2}
                >
                  <Grid item>
                    <Typography fontSize={13} variant="body1">
                      {new Date(item.date).toLocaleDateString()}
                    </Typography>


                    
                  </Grid>
                
                </Grid>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
}
export default takenItemsCards;
