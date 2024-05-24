import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../AllCss/Aboutus.css";
const About = () => {
  return (
    <div className="img-container">
      <Row>
        <Col>
          <img
            className="img-food"
            src="https://media.istockphoto.com/id/589135154/photo/herbs-and-spices-over-black-stone-background.jpg?s=2048x2048&w=is&k=20&c=FPDdj0lmWVEjyvVW2dlz0RQ_3c2URSz9iPk_l8qAQg4="
          />

          <h1 className="h1-aboutus">Food With Purpose!</h1>
          <p className="para-about">
            {" "}
            "From our kitchen to your table, we strive to create experiences
            that tantalize the taste buds, evoke memories, and spark
            conversations."
          </p>

          <div className="custom-btn">
            Learn More
            <span className="tool-tip">
              "Food that speaks to the soul where tradition meets innovation"
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
