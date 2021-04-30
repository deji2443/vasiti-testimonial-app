import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import React from "react";
import { Typography, Link } from "@material-ui/core";

function MainHeader() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">
          {" "}
          <img src={window.location.origin + "/img/logo.png"} alt="" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">ABOUT US</Nav.Link>
            <Nav.Link href="#link">STORIES</Nav.Link>
            <Nav.Link href="#link">CONTACT</Nav.Link>
            <Nav.Link href="#link">LOGIN</Nav.Link>
            <Nav.Link href="#link" className="sign-up">
              SIGN UP
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>{" "}
      <div className="home-link">
        <Typography className="d-inline mt-link">
          <Link href="#">MARKETPLACE</Link>
          <Link href="#">WHOLESALE CENTER</Link>
          <Link href="#">SELLER CENTER</Link>
          <Link href="#">SERVICES</Link>
          <Link href="#">INTERNSHIPS</Link>
          <Link href="#">EVENTS</Link>
        </Typography>
      </div>
    </div>
  );
}

export default MainHeader;
