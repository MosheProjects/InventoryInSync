import AddProductForm from "../../Components/AddProductForm/AddProductForm";
import VisitsCards from "../../Components/visits/VisitsCards/VisitsCards";
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
     

    <AddProductForm/>
    </div>

  )}
