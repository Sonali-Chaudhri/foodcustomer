import React, { useState } from "react";
import "../AllCss/Login.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login } from "../reduxwork/UserSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const dispacher = useDispatch([]);

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const doLogin = () => {
    const addCustomerdata = {
      CustomerEmail: Email,
      CustomerPassword: Password,
    };
    console.log(addCustomerdata);
    // console.log("jdjjdhj");
    axios
      .post("http://localhost:5000/api/doLogin", addCustomerdata)
      .then((result) => {
        console.log("Data", result.data);
        console.log(result.data.message);

        if (result.data.data) {
          dispacher(login(result.data.data));
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form-container">
      <div className="log-form-container1">
        <Form className="simpleform">
          <h1 className="loginname">Login Form</h1>

          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            className="simpleform1"
            type="Email "
            placeholder="Enter Your Email id"
          />
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            className="simpleform1"
            type="Password"
            placeholder="Enter Password"
          />
        </Form>

        <button className="bbutton" onClick={() => doLogin()}>
          {" "}
          Login
        </button>
        <p onClick={() => navigate("/register")} className="para">
          Don't have account ? .. Register here !
        </p>
      </div>
    </div>
  );
};

export default Login;
