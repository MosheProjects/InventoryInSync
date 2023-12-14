import React, { useState, useEffect } from "react";
import "./visitsCards.css";
import { getTblByName } from "../../../Api/metadata";
import { parseISO, compareDesc } from "date-fns";

interface Visit {
  name: string;
  date: string;
}

const VisitsCards = () => {
  const [visitsInfo, setVisitsInfo] = useState<Visit[] | null>(null);
  let closestVisits: Visit[] = [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTblByName("visits");
        setVisitsInfo(data);

        const sortedVisits = data.slice().sort((a: any, b: any) => {
          const dateA = parseISO(a.date);
          const dateB = parseISO(b.date);
          return compareDesc(dateA, dateB);
        });

        closestVisits = sortedVisits.slice(-2).reverse();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cards-container">
      <div className="titleName">
        <p>ביקורים</p>
      </div>
      <div>
        {closestVisits.map((visit, index) => (
          <div key={index}>
            <p>{visit.name}</p>
            <p>{visit.date}</p>
            <p>{new Date(visit.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitsCards;
