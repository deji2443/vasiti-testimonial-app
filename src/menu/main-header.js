import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

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
      </Navbar>
    </div>
  );
}

export default MainHeader;
