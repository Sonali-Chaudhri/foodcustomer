import React from "react";
import { Navbar, NavbarBrand, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const FoodNavbar = () => {
  return (
    <>
      <Navbar  className="Navbar">
        {" "}
      
        <Navbar.Brand className="NavLink"> FlavorFuse</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link >
            <Link to="/"> Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">About </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contact">contact</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/ mycart"> Mycarts</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/myorder"> Myorder</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/login"> Login</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/profile"> profile</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/register">Register</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default FoodNavbar;
