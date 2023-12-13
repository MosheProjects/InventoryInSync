import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
    </Routes>
  );
}

export default MainRouter;
