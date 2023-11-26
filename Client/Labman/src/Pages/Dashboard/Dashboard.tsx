import AddProductForm from "../../Components/AddProductForm/AddProductForm";
import LendingForm from "../../Components/LendingForm/LendingForm";
import VisitArrange from "../../Components/visits/VisitArrange";
import './dashboard.css'

export default function Dashboard() {
  return (
    <div dir="rtl" className="deshboardContainer">
 <div className="left-panel">

</div>

      <div className="right-panel">
        <div className="visits-panel">
            <VisitsCards/>
        </div>

      </div>
     

    <LendingForm/>
    </div>
  )}

  )}
