import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Main() {
  return (
    <div>
      <section id="section-one">
        {" "}
        <Container className="mt-5">
          <Row className="block-row">
            <Col>
              <h3 className="experience">
                Amazing Experiences from Our Wonderful Customers
              </h3>
              <p className="customer">
                Here is what customers and vendors are saying about us, you can
                share your stories with us too.
              </p>
            </Col>
            <Col>
              <div className="Testimonial-wrapper">
                <div className="testimonial-one">
                  <img
                    className="overlayLogo img-fluid"
                    src={
                      window.location.origin + "/img/Testimonial-image-2.png"
                    }
                    alt=""
                  />{" "}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>{" "}
      <section id="section-two">
        {" "}
        <Container className="mt-5 pt-5">
          <Row className="block-row">
            {" "}
            <Col>
              <div className="Testimonial-wrapper-two">
                <div className="testimonial-one">
                  <img
                    className="overlayLogo-two img-fluid"
                    src={
                      window.location.origin +
                      "/img/black-beautiful-ladies-smiling-1.png"
                    }
                    alt=""
                  />{" "}
                </div>
              </div>
            </Col>
            <Col>
              <h3 className="tolu-experience text-white mb-3">
                Tolu &amp; Joy’s Experience
              </h3>
              <h6 className="text-white mb-3 customer">CUSTOMER</h6>
              <p className="customer text-white">
                I had the best experience shopping with vasiti. Usability of the
                website was great, very good customer service, an all round
                great experience. I would definately be coming back! I had the
                best experience shopping with vasiti. Usability of the website
                was great, very good customer service, an all round great
                experience. I would definately be coming back!
              </p>
              <h4 className="text-white story">Share your own story!</h4>
              <hr className="share-story" />
            </Col>
          </Row>
        </Container>
      </section>
      <section id="section-three">
        <Container className="mt-5 pt-5 slide-left">
          <Row className="mb-5 block-row">
            <Col>
              {" "}
              <img
                className="img-fluid mb-4"
                src={window.location.origin + "/img/Ellipse-22.png"}
                alt=""
              />{" "}
              <h6 className="mb-3 testim-name">Joseph Ike</h6>
              <p className="user-location">
                In Ikeja <span className="customer-vendor">CUSTOMER</span>
              </p>
              <p className="testimonial-text">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat
                nostrud irure ex duis ea quis id quis ad et. Sunt qui esse
                pariatur duis deserunt mollit dolore cillum minim tempor enim.
              </p>
            </Col>
            <Col>
              {" "}
              <img
                className="img-fluid mb-4"
                src={window.location.origin + "/img/Ellipse-23.png"}
                alt=""
              />{" "}
              <h6 className="mb-3 testim-name">Adetola Fashina</h6>
              <p className="user-location">
                Ibadan <span className="customer-vendor">CUSTOMER</span>
              </p>
              <p className="testimonial-text">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deser unt ut voluptate aute id deserunt nisi. Amet minim mollit
                non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
              </p>
            </Col>
            <Col>
              {" "}
              <img
                className="img-fluid mb-4"
                src={window.location.origin + "/img/Ellipse-24.png"}
                alt=""
              />{" "}
              <h6 className="mb-3 testim-name">Emmanuel Fayemi</h6>
              <p className="user-location">
                In Akoka<span className="customer-vendor">CUSTOMER</span>
              </p>
              <p className="testimonial-text">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi. Elit aute irure
                tempor cupidatat incididunt sint deser unt ut voluptate aute id
                deserunt nisi. Amet minim mollit non deserunt ullamco est sit
                aliqua dolor do amet sint.
              </p>
            </Col>
          </Row>{" "}
          <Row className="block-row">
            <Col>
              {" "}
              <img
                className="img-fluid mb-4"
                src={window.location.origin + "/img/Ellipse-25.png"}
                alt=""
              />{" "}
              <h6 className="mb-3 testim-name">Chisom Obilor</h6>
              <p className="user-location">
                In Magodo<span className="customer-vendor-two">VENDOR</span>
              </p>
              <p className="testimonial-text">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat
                nostrud irure ex duis ea quis id quis ad et. Sunt qui esse
                pariatur duis deserunt mollit dolore cillum minim tempor enim.
              </p>
            </Col>
            <Col>
              {" "}
              <img
                className="img-fluid mb-4"
                src={window.location.origin + "/img/Ellipse-26.png"}
                alt=""
              />{" "}
              <h6 className="mb-3 testim-name">Adunoluwa Adeyemi</h6>
              <p className="user-location">
                Iwo Road <span className="customer-vendor-two">VENDOR</span>
              </p>
              <p className="testimonial-text">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deser unt ut voluptate aute id deserunt nisi. Amet minim mollit
                non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
              </p>
            </Col>
            <Col>
              {" "}
              <img
                className="img-fluid mb-4"
                src={window.location.origin + "/img/Ellipse-27.png"}
                alt=""
              />{" "}
              <h6 className="mb-3 testim-name">Chidi Okeke</h6>
              <p className="user-location">
                In Somolu<span className="customer-vendor-two">VENDOR</span>
              </p>
              <p className="testimonial-text">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi. Elit aute irure
                tempor cupidatat incididunt sint deser unt ut voluptate aute id
                deserunt nisi. Amet minim mollit non deserunt ullamco est sit
                aliqua dolor do amet sint.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="section-four">
        {" "}
        <Container className="mt-5 pt-5 slide-left">
          <Row className="block-row">
            {" "}
            <Col>
              <h3 className="tolu-experience  mb-3">Josiah’s Experience</h3>
              <h6 className="mb-3 customer-vend">VENDOR</h6>
              <p className="customer">
                I had the best experience shopping with vasiti. Usability of the
                website was great, very good customer service, an all round
                great experience. I would definately be coming back! I had the
                best experience shopping with vasiti. Usability of the website
                was great, very good customer service, an all round great
                experience. I would definately be coming back!
              </p>
              <h4 className="story-vend">Share your own story!</h4>{" "}
              <hr className="share-story" />
            </Col>{" "}
            <Col>
              <div className="Testimonial-wrapper-three">
                <div className="testimonial-one">
                  <img
                    className="overlayLogo img-fluid"
                    src={
                      window.location.origin +
                      "/img/woman-shoppingbag-card-1.png"
                    }
                    alt=""
                  />{" "}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="section-five">
        <Container className="mt-5 pt-5 slide-left">
          <Row className="mb-5 block-row">
            <Col>
              {" "}
              <img
                className="img-fluid mb-4"
                src={window.location.origin + "/img/Ellipse-28.png"}
                alt=""
              />{" "}
              <h6 className="mb-3 testim-name">Temi Obadofin</h6>
              <p className="user-location">
                <span className="customer-vendor-two">VENDOR</span>
              </p>
              <p className="testimonial-text">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat
                nostrud irure ex duis ea quis id quis ad et. Sunt qui esse
                pariatur duis deserunt mollit dolore cillum minim tempor enim.
              </p>
            </Col>
            <Col>
              {" "}
              <img
                className="img-fluid mb-4"
                src={window.location.origin + "/img/Ellipse-29.png"}
                alt=""
              />{" "}
              <h6 className="mb-3 testim-name">Promise Ejiofor</h6>
              <p className="user-location">
                <span className="customer-vendor-two">VENDOR</span>
              </p>
              <p className="testimonial-text">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deser unt ut voluptate aute id deserunt nisi. Amet minim mollit
                non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
              </p>
            </Col>
            <Col>
              {" "}
              <img
                className="img-fluid mb-4"
                src={window.location.origin + "/img/Ellipse-30.png"}
                alt=""
              />{" "}
              <h6 className="mb-3 testim-name">Feyisola Arinola</h6>
              <p className="user-location">
                <span className="customer-vendor-two">VENDOR</span>
              </p>
              <p className="testimonial-text">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi. Elit aute irure
                tempor cupidatat incididunt sint deser unt ut voluptate aute id
                deserunt nisi. Amet minim mollit non deserunt ullamco est sit
                aliqua dolor do amet sint.
              </p>
            </Col>
          </Row>{" "}
          <Row className="block-row">
            <Col>
              {" "}
              <img
                className="img-fluid mb-4"
                src={window.location.origin + "/img/Ellipse-31.png"}
                alt=""
              />{" "}
              <h6 className="mb-3 testim-name"> Karen Ibeh</h6>
              <p className="user-location">
                <span className="customer-vendor-two">VENDOR</span>
              </p>
              <p className="testimonial-text">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat
                nostrud irure ex duis ea quis id quis ad et. Sunt qui esse
                pariatur duis deserunt mollit dolore cillum minim tempor enim.
              </p>
            </Col>
            <Col>
              {" "}
              <img
                className="img-fluid mb-4"
                src={window.location.origin + "/img/Ellipse-32.png"}
                alt=""
              />{" "}
              <h6 className="mb-3 testim-name">Oluchi Uzo</h6>
              <p className="user-location">
                <span className="customer-vendor-two">VENDOR</span>
              </p>
              <p className="testimonial-text">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deser unt ut voluptate aute id deserunt nisi. Amet minim mollit
                non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
              </p>
            </Col>
            <Col>
              {" "}
              <img
                className="img-fluid mb-4"
                src={window.location.origin + "/img/Ellipse-33.png"}
                alt=""
              />{" "}
              <h6 className="mb-3 testim-name">Amos Okafor</h6>
              <p className="user-location">
                <span className="customer-vendor-two">VENDOR</span>
              </p>
              <p className="testimonial-text">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi. Elit aute irure
                tempor cupidatat incididunt sint deser unt ut voluptate aute id
                deserunt nisi. Amet minim mollit non deserunt ullamco est sit
                aliqua dolor do amet sint.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="section-six">
        {" "}
        <Container className="mt-5 pt-5 slide-left">
          <Row className="flex-column-reverse flex-lg-row">
            {" "}
            <Col className="col-md-12 col-lg-6 ">
              <div className="Testimonial-wrapper-four">
                <div className="testimonial-one">
                  <img
                    className="overlayLogo-three img-fluid"
                    src={window.location.origin + "/img/subscribe-banner-1.png"}
                    alt=""
                  />{" "}
                </div>
              </div>
            </Col>
            <Col class="col-md-12 col-lg-6 ">
              <img
                className="img-fluid tolu-experience-three"
                src={window.location.origin + "/img/member.png"}
                alt=""
              />{" "}
              <p className="customer text-white">
                We’d make sure you’re always first to know what’s happening on
                Vasiti—thus, the world.
              </p>
              <Form className="align-items-center mb-4 sub">
                <input
                  className="mb-2 sub-input"
                  id="inlineFormInput input-subscribe"
                  placeholder="enter your email address"
                />
                <Button type="submit" className="mb-2 input-btn  sub-input">
                  {" "}
                  SUBSCRIBE
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Main;
