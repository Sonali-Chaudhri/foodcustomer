import React from "react";
import { Form } from "react-bootstrap";
import "./componants/Register.css";

const Register = () => {
  return (
    <div className="form-container-image">
      <div className="form-container1">
        <h1 className="heading">Registration Form</h1>
        <Form>
          <Form.Control className="design" type="Name" placeholder="Enter Name" />
          <Form.Control className="design" type="Email" placeholder="Enter Email" />
          <Form.Control className="design" type="contact" placeholder="Enter Contact " />
          <Form.Control className="design" type="password confirm" placeholder="Enter Password" />
          <button className="Button"> Sign up</button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
