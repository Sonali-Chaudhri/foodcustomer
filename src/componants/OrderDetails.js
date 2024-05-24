import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "../AllCss/OrderDetails.css";
const OrderDetails = () => {
  const Orderdata = useLocation().state;

  return (
    <>
      <Container fluid className="Order-container">
        <Row style={{ width: "100%" }}>
          {Orderdata?.FoodItems?.map((food, index) => {
            return (
              <Col sm={12} md={6} lg={4}>
                <Card className="order-card-cust">
                  <img
                    className="order-card-custimg"
                    src={`http://localhost:5000${food.FoodId.FoodImage}`}
                  />
                  <h6>Food Name: {food.FoodId.FoodName}</h6>
                  <h6>Price: {food.OrderTotalAmount}</h6>
                  <h6>Food Qty: {food.Qty}</h6>

                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default OrderDetails;
