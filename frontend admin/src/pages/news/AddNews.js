import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default function AddNews() {
  const options = [
    { value: "Box office", label: "Box office" },
    { value: "Film", label: "Film" },
    { value: "Noutate", label: "Noutate" },
    { value: "Trailer", label: "Trailer" },
  ];

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm="6">
            <Card>
              {/* Card header - add news */}
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Adaugă articol</h4>
                </Card.Header.Title>
              </Card.Header>
              {/* Add news form */}
              <Card.Body>
                <Form>
                  <Row>
                    <Col lg="12">
                      <Row>
                        {/* Add title post */}
                        <Form.Group className="col-12">
                          <Form.Control
                            type="text"
                            placeholder="Titlu postare"
                          />
                        </Form.Group>
                        {/* Upload image post */}
                        <div className="col-12 form_gallery form-group">
                          <label id="gallery2" htmlFor="form_gallery-upload">
                            Încarcă imagine
                          </label>
                          <input
                            data-name="#gallery2"
                            id="form_gallery-upload"
                            className="form_gallery-upload"
                            type="file"
                            accept=".png, .jpg, .jpeg"
                          />
                        </div>
                        {/* Choose category post */}
                        <Form.Group className="col-md-6">
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            defaultValue={"Categorie"}
                          >
                            <option>Box Office</option>
                            <option>Avanpremieră film</option>
                            <option>Trailer film</option>
                            <option>Noutate</option>
                          </select>
                        </Form.Group>
                        <Col sm="6" className="form-group">
                          {/* Choose tag(s) */}
                          <Form.Group>
                            <Select
                              closeMenuOnSelect={false}
                              components={animatedComponents}
                              placeholder={"Selectează tag-uri"}
                              isMulti
                              options={options}
                            />
                          </Form.Group>
                        </Col>
                        {/* Add description post */}
                        <Form.Group className="col-12">
                          <Form.Control
                            as="textarea"
                            id="text"
                            name="text"
                            rows="5"
                            placeholder="Descriere"
                          ></Form.Control>
                        </Form.Group>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Form.Group className="col-12">
                      {/* Add article button */}
                      <Link to="/blog-posts">
                        <Button type="button" variant="primary">
                          Adaugă articol
                        </Button>{" "}
                      </Link>
                      {/* Cancel article button */}
                      <Link to="/blog-posts">
                        <Button type="reset" variant="danger">
                          Anulează
                        </Button>
                      </Link>
                    </Form.Group>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
