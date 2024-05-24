import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button, Form } from "react-bootstrap";
import { addItem } from "../reduxwork/CartSlice";
import { useDispatch } from "react-redux";
import "../AllCss/Home.css";
const Home = () => {
  const [allfoods, setallfoods] = useState([]);
  // const [cart, setcart] = useState([]);
  const dispatcher = useDispatch();
  const [foodcategory, setfoodcategory] = useState("Veg");
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getallfood")
      .then((result) => {
        console.log("Food Data", result.data);
        setallfoods(result.data);
      })
      .catch((err) => {});
  }, []);


  const searachFood = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/getfoodbycategory",
        {
          FoodCategory: foodcategory,
        }
      );
      setallfoods(response.data);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="home-container">
      <Row >
        <Form.Select className="dropdown-home" onChange={(e) => setfoodcategory(e.target.value)}>
          <option value="Veg">Veg</option>
          <option value="Nonveg">NonVeg</option>
          <option value="soup">Soup</option>
          <option value="FastFood">FastFood</option>
          <option value="Dessert">Dessert</option>

        </Form.Select>
        <button  className="btn-dropdown"onClick={() => searachFood()}>Search</button>
      </Row>

      <Row>
        {allfoods?.map((food, index) => {
          return (
            <Col key={index} sm={12} md={7} lg={3}>
              <Card className="homecard">
                <Card.Img
                  className="homecardimg"
                  src={`http://localhost:5000${food.FoodImage}`}
                />
                <h6>{food.FoodName}</h6>
                <h6>{food.FoodType}</h6>
                <h6>{food.FoodCategory}</h6>
                <h6>{food.FoodPrice}</h6>
                <Button onClick={() => dispatcher(addItem(food))}>
                  Add to Cart
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Home;
