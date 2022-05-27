import React from "react";
import { Container, Row, Col, Tab, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";

export default function ChangeAdminPassword() {
  return (
    <>
      <Container fluid>
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col lg="6">
              <Tab.Content>
                <Card>
                  <Card.Header>
                    <Card.Header.Title>
                      <h4 className="card-title">Actualizează parola</h4>
                    </Card.Header.Title>
                  </Card.Header>
                  <Card.Body>
                    <Form>
                      <Form.Group controlId="cpass">
                        <Form.Label style={{ color: "white" }}>
                          Parola curentă
                        </Form.Label>
                        <Form.Control type="Password" />
                      </Form.Group>
                      <Form.Group controlId="npass">
                        <Form.Label style={{ color: "white" }}>
                          Parola nouă
                        </Form.Label>
                        <Form.Control type="Password" />
                      </Form.Group>
                      <Form.Group controlId="vpass">
                        <Form.Label style={{ color: "white" }}>
                          Repetă parola
                        </Form.Label>
                        <Form.Control type="Password" />
                      </Form.Group>
                      <Link to="/">
                        <Button
                          type="submit"
                          variant="primary"
                          className="mr-2"
                        >
                          Salvează
                        </Button>
                      </Link>
                      <Link to="/">
                        <Button type="reset" variant="danger">
                          Anulează
                        </Button>
                      </Link>
                    </Form>
                  </Card.Body>
                </Card>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
}
