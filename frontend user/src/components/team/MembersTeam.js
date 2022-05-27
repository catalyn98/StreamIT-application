import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardMemberTeam from "./CardMemberTeam";
import avatar from "../../assets/images/about-us/02.png";

export default function MembersTeam() {
  return (
    <>
      <Container fluid className="container-md">
        <Row className="about-us-detail">
          <Col md="3" className="mb-4">
            <CardMemberTeam
              avatar={avatar}
              name="Cătălan Cătălin"
              function="Administrator"
            />
          </Col>
          <Col md="3" className="mb-4">
            <CardMemberTeam
              avatar={avatar}
              name="Nemeș Alina"
              function="Designer"
            />
          </Col>
          <Col md="3" className="mb-4">
            <CardMemberTeam
              avatar={avatar}
              name="Marița Anamaria"
              function="Software Developer"
            />
          </Col>
          <Col md="3" className="mb-4">
            <CardMemberTeam
              avatar={avatar}
              name="Lucuț Adrian"
              function="Blogger"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
