import React from "react";
import {
  calculateTotal,
  DecreamentQuantity,
  IncreamentQuantity,
} from "../reduxwork/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../AllCss/cart.css";
import { useLocation } from "react-router-dom";

const Mycarts = () => {
  const { CartItems, CartTotalAmount } = useSelector((state) => state.cart);
  const { UserData } = useSelector((state) => state.user);
  const Orderdata = useLocation().state;
  const dispatcher = useDispatch();

  dispatcher(calculateTotal());

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  async function showRazorpay(CartTotalAmount) {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const amtData = { amount:CartTotalAmount };
    const result = await axios.post("http://localhost:5000/razorpay", amtData);

    const options = {
      key: "rzp_test_rKaJfUL1KAGXSR",
      currency: result.data.currency,
      amount: result.data.amount.toString(),
      order_id: result.data.id,
      name: "FlavorFuse",
      description: "Thank you",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
        alert("Transaction successful");
      },
      prefill: {
        name: "Sonali",
        email: "csonali415@gmail.com",
        phone_number: "9359910034",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  //create place order function
  const PlaceOrder = async () => {
    let FinalFoodItems = [];
    CartItems.map((food) => {
      FinalFoodItems.push({ Qty: food.quantity, FoodId: food._id });
    });

    const orderData = {
      OrderTotalAmount: CartTotalAmount,
      FoodItems: FinalFoodItems,
      CustId: UserData._id,
    };

    try {
      const result = await axios.post(
        "http://localhost:5000/api/addorder",
        orderData
      );

      console.log("Oder Addeded!!");
      alert("Order placed successfully");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="div-mycarts">
      <Row>
        {" "}
        {CartItems.map((food) => {
          const foodid = food._id;
          return (
            <Col sm={12} md={8} lg={2}>
              <Card className="img-card">
                <Card.Img
                  className="img"
                  src={`http://localhost:5000${food.FoodImage}`}
                />
                <Card.Body >
                  <Card.Text>{food.FoodName}</Card.Text>
                  <div>
                    <Card.Subtitle>{food.FoodPrice}</Card.Subtitle>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <Button
                    onClick={() => dispatcher(DecreamentQuantity({ foodid }))}
                  >
                    -
                  </Button>
                  <span>{food.quantity}</span>
                  <Button
                    onClick={() => dispatcher(IncreamentQuantity({ foodid }))}
                  >
                    +
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row>
        <h4 className="body-fod">Total Price :{CartTotalAmount}</h4>
        <button className="btn-cart-custom" onClick={() => showRazorpay(CartTotalAmount)}>
          Place Order
        </button>
      </Row>
    </div>
  );
};

export default Mycarts;
