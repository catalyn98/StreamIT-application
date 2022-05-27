import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import imageBanner from "../../assets/images/about-us/01.jpg";

export default function BannerPages(props) {
  return (
    <div
      className="iq-breadcrumb-one  iq-bg-over iq-over-dark-50"
      style={{ backgroundImage: `url(${imageBanner})` }}
    >
      <Container fluid>
        <Row className="align-items-center">
          <Col sm="12">
            <nav className="text-center iq-breadcrumb-two">
              <h2 className="title">{props.pageName}</h2>
              <Breadcrumb className="main-bg">
                <Breadcrumb.Item>Home Cinema</Breadcrumb.Item>
                <Breadcrumb.Item active>{props.pageName}</Breadcrumb.Item>
              </Breadcrumb>
            </nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
