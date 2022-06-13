import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Card from "../../components/card/Card";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default function UpdateNews() {
  const location = useLocation();
  const post = location.post;

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
                  <h4 className="card-title">Actualizare articol</h4>
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
                          <label>Titlu</label>
                          <Form.Control placeholder={post.title} />
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
                          />
                        </div>
                        {/* Choose category post */}
                        <Form.Group className="col-md-6">
                          <label>Categorie</label>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            defaultValue={post.category}
                          >
                            <option>Box office</option>
                            <option>Program TV</option>
                            <option>Avanpremieră film</option>
                            <option>Trailer film</option>
                            <option>Noutate</option>
                          </select>
                        </Form.Group>
                        <Col sm="6" className="form-group">
                          {/* Choose tag(s) */}
                          <Form.Group>
                            <label>Tag-uri</label>
                            <Select
                              closeMenuOnSelect={false}
                              components={animatedComponents}
                              placeholder="Alege tag-uri"
                              isMulti
                              options={options}
                            />
                          </Form.Group>
                        </Col>
                        {/* Add description post */}
                        <Form.Group className="col-12">
                          <label>Descriere</label>
                          <Form.Control
                            as="textarea"
                            id="text"
                            name="text"
                            rows="5"
                            placeholder={post.description}
                          />
                        </Form.Group>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Form.Group className="col-12">
                      {/* Add article button */}
                      <Link to="/blog-posts">
                        <Button type="button" variant="primary">
                          Actualizează
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
