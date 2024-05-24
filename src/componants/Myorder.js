import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../AllCss/order.css"
const Myorder = () => {
  const [allfoodorders, setallfoodorders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getallorders")
      .then((result) => {
        console.log("Order data", result.data);
        setallfoodorders(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
      <Container className="order-container">
        <Row>
          {allfoodorders?.map((order, index) => {
            return (
              <Col key={index} sm={12} md={9} lg={3}>
                <Card>
                  <h6>{order.CustId?.CustomerName}</h6>
                  <h6>{order.OrderDate}</h6>
                  <h6>{order.OrderStatus}</h6>
                  <h6> {order.OrderTotalAmount}</h6>
                  <Card.Footer>
                    <Button
                      onClick={() =>
                        navigate("/orderdetails", { state: order })
                      }
                    >
                      Details
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
  );
};

export default Myorder;
