import AddProductForm from "../../Components/AddProductForm/AddProductForm";
import TableData from "../../Components/DisplayProducts/TableData";
import LendingForm from "../../Components/LendingForm/LendingForm";
import VisitArrange from "../../Components/visits/VisitArrange";
import VisitsCards from "../../Components/visits/VisitsCards";
import "./dashboard.css";

const Dashboard = () => {
  return (
    // <div dir="rtl" className="deshboardContainer">
    /* <div className="left-panel">

</div> */

    /* <div className="right-panel">
        <div className="visits-panel">
            <VisitsCards/>
        </div>

      </div> */

    <>
      {" "}
      {/* <LendingForm /> */}
      <TableData />
    </>
    // </div>
  );
}

    <div dir="rtl" className="deshboardContainer">
      <div className="left-panel"></div>
      {/* <div className="right-panel">
        <div className="visits-panel">
            <VisitsCards/>
        </div>
      </div> */}
      <LendingForm />
    </div>
  );
};

export default Dashboard;
