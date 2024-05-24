import React from "react";
import { Navbar, NavbarBrand, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AllCss/Nav.css";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoMdContact } from "react-icons/io";
import { IoCartSharp } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { ImProfile } from "react-icons/im";
import { FaRegistered } from "react-icons/fa";

const FoodNavbar = () => {
  return (
    <>
      <Navbar className="Nav-food">
        <Navbar.Brand className="NavLink"> FlavorFuse</Navbar.Brand>
        <Nav>
          <Nav.Link>
            <Link className="Nav-food2" to="/">
              {" "}
              <FaHome />
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="Nav-food2" to="/about">
              <FcAbout />
              About{" "}
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="Nav-food2" to="/contact">
              <IoMdContact />
              contact
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="Nav-food2" to="/mycart">
              {" "}
              <IoCartSharp />
              Mycarts
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="Nav-food2" to="/myorder">
              {" "}
              <MdFavoriteBorder />
              Myorder
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="Nav-food2" to="/login">
              {" "}
              <CiLogin />
              Login
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="Nav-food2" to="/profile">
              {" "}
              <ImProfile />
              profile
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="Nav-food2" to="/register">
              <FaRegistered />
              Register
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default FoodNavbar;
