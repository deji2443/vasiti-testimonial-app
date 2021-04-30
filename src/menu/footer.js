import { Row, Col, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div>
      <section id="footer-section">
        <Container>
          <Row>
            <Row className="footer-row">
              <Col>
                <h6 className="footer-h6">Company</h6>
                <Nav className="d-block" id="footer-link">
                  <Nav.Link href="#home">About us</Nav.Link>
                  <Nav.Link href="#link">Term of Use</Nav.Link>
                  <Nav.Link href="#link">Privacy Policy</Nav.Link>
                  <Nav.Link href="#link">Press &amp; Media</Nav.Link>
                </Nav>
              </Col>
              <Col>
                {" "}
                <h6 className="footer-h6">Products</h6>
                <Nav className="d-block" id="footer-link">
                  <Nav.Link href="#home">Marketplace</Nav.Link>
                  <Nav.Link href="#link">Magazine</Nav.Link>
                  <Nav.Link href="#link">Seller</Nav.Link>
                  <Nav.Link href="#link">Wholesale</Nav.Link>
                  <Nav.Link href="#link">Services</Nav.Link>
                </Nav>
              </Col>
            </Row>
            <Row className="footer-row">
              <Col>
                {" "}
                <h6 className="footer-h6">Careers</h6>
                <Nav className="d-block" id="footer-link">
                  <Nav.Link href="#home">Become a Campus Rep</Nav.Link>
                  <Nav.Link href="#link">Become a Vasiti Influencer</Nav.Link>
                  <Nav.Link href="#link">Become a Campus writer</Nav.Link>
                  <Nav.Link href="#link">Become an Affiliate</Nav.Link>
                </Nav>
              </Col>
              <Col>
                {" "}
                <h6 className="footer-h6">Get in touch</h6>
                <Nav className="d-block" id="footer-link">
                  <Nav.Link href="#home">Contact us</Nav.Link>
                  <Nav.Link href="#link">Partner with us</Nav.Link>
                  <Nav.Link href="#link">Advertise with us</Nav.Link>
                  <Nav.Link href="#link">Help/FAQs</Nav.Link>
                </Nav>
              </Col>
            </Row>
            <Row className="footer-row">
              <Col>
                {" "}
                <h6 className="footer-h6 pb-2">Join our community</h6>
                <Nav className="d-block" id="footer-link">
                  <div className="d-inline">
                    <SocialIcon url="https://facebook.com" />
                    <SocialIcon url="https://instagram.com" />
                    <SocialIcon url="https://twitter.com" />
                    <SocialIcon url="https://linkedin.com" />
                  </div>
                  <Nav.Link href="#link" className="mt-4">
                    <a href="mailto:vasiti@demo.com">Email Newsletter</a>
                  </Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Footer;
