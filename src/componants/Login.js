import React from "react";
import "../AllCss/Login.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="form-container">
      <div className="log-form-container1">
        <Form className="simpleform">
          <h1 className="loginname">Login Form</h1>

          <Form.Control
            className="simpleform1"
            type="Email "
            placeholder="Enter Your Email id"
          />
          <Form.Control
            className="simpleform1"
            type="Password"
            placeholder="Enter Password"
          />

          <button className="button"> Login</button>
          <p onClick={() => navigate("/register")} className="p">
            {" "}
            Don't have account ? .. Register here !
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
