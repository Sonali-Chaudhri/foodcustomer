import React from "react";
import { Form } from "react-bootstrap";
import "./componants/Register.css";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "./reduxwork/UserSlice";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const dispacher = useDispatch([]);
  const navigate=useNavigate()


  const [CustomerName, setCustomerName] = useState("");
  const [CustomerEmail, setCustomerEmail] = useState("");
  const [CustomerMobNo, setCustomerMobNo] = useState(0);
  const [CustomerPassword, setCustomerPassword] = useState("");
  const [CustomerAddress, setCustomerAddress] = useState("");
  const [CustomerCity, setCustomerCity] = useState("");
  const [CustomerPinCode, setCustomerPinCode] = useState(0);
  const CustomerData = async () => {
    const Customer = {
      CustomerName: CustomerName,
      CustomerEmail: CustomerEmail,
      CustomerMobNo: CustomerMobNo,
      CustomerPassword: CustomerPassword,
      CustomerAddress: CustomerAddress,
      CustomerCity: CustomerCity,
      CustomerPinCode: CustomerPinCode,
    };
    try {
      console.log(Customer);
      const add = await axios.post(
        "http://localhost:5000/api/createcustomer",
        Customer
      );
      dispacher(register(add.data.data))
      navigate('/Login')
      console.log(add);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container-image">
      <div className="form-container1">
        <h1 className="heading">Registration Form</h1>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            CustomerData();
          }}
        >
          <Form.Control
            className="design"
            type="CustomerName"
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Enter Name"
          />
          <Form.Control
            className="design"
            type="CustomerEmail"
            onChange={(e) => setCustomerEmail(e.target.value)}
            placeholder="Enter Email"
          />
          <Form.Control
            className="design"
            type="CustomerMobNo"
            onChange={(e) => setCustomerMobNo(e.target.value)}
            placeholder="Enter Contact No"
          />
          <Form.Control
            className="design"
            type="CustomerPassword"
            onChange={(e) => setCustomerPassword(e.target.value)}
            placeholder="Enter Your Password"
          />
          <Form.Control
            className="design"
            type="CustomerAddress"
            onChange={(e) => setCustomerAddress(e.target.value)}
            placeholder="Enter Your Adress"
          />
          <Form.Control
            className="design"
            type="CustomerCity"
            onChange={(e) => setCustomerCity(e.target.value)}
            placeholder="Enter Your City"
          />
          <Form.Control
            className="design"
            type="CustomerPinCode"
            onChange={(e) => setCustomerPinCode(e.target.value)}
            placeholder="Enter PinCode"
          />

          <button className="Button"> Sign up</button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
