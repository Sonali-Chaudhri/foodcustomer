import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodRoute from "./FoodRoute";
import Login from "./componants/Login";
import Register from "./Register"
import "./App.css"
const App = () => {
  return (
    <div>
      {/* {<Login/>} */}
      {/* {<Simpleform/>}  */}
      <FoodRoute />
      {/* <FoodNavbar/> */}
    </div>
  );
};

export default App;
