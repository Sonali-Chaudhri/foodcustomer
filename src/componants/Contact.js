import React, { useState } from "react";

import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../AllCss/Contactus.css";
import axios from "axios";
import { useDispatch } from "react-redux";
const Contact = () => {
const dispatcher=useDispatch([])
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [message, setmessage] = useState('')

const contactus=()=>{
  const addcontact={
    Name:Name,
    EmailId:Email,
    Message:message,
  };
  console.log(addcontact);
  axios.post('http://localhost:5000/api/addcontact',addcontact)
  .then((result) => {
    console.log('Data',result.data);
    console.log(result.data.message);
    alert("data added")

    if (result.data.data){
dispatcher(Contact(result.data.data))
    }
  }).catch((err) => {
    console.log(err);
  });
}


  return (
    <div>
      <div className="bg-cover">
        <Row>
          <Col>
            <img
              className="IMG-Chef"
              src="https://images.pexels.com/photos/6957673/pexels-photo-6957673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </Col>
          <Col>
            <Form className="form-contact">
              <h1 className="h1-contact"> ContactUs</h1>
              <Form.Control
              onChange={(e)=>setName(e.target.value)}
                className="contact-form-control"
                type="text"
                placeholder="NAME"
              />
              <Form.Control
              onChange={(e)=>setEmail(e.target.value)}
                className="contact-form-control"
                type="text"
                placeholder="EMAIL ID"
              />
              <Form.Control
              onChange={(e)=>setmessage(e.target.value)}
                className="contact-form-control-msg"
                as="textarea"
                placeholder="Message..."
              />
              <button className="butn" onClick={()=>contactus()}> SUBMIT</button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
