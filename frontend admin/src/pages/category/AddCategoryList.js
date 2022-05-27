import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import Card from "../../components/card/Card";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default function AddCategory() {
  let history = useHistory();

  const options = [
    { value: "Sonic Ariciul 2", label: "Sonic Ariciul 2" },
    { value: "Mortal Kombat", label: "Mortal Kombat" },
    { value: "Insurgent", label: "Insurgent" },
    { value: "Dune", label: "Dune" },
    { value: "Răzbunătorii", label: "Răzbunătorii" },
  ];

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm="6">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Adaugă categorie</h4>
                </Card.Header.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col lg="12">
                    <Form>
                      {/* Category name */}
                      <Form.Group>
                        <Form.Control type="text" placeholder="Nume" />
                      </Form.Group>
                      {/* Choose genre movie category */}
                      <Form.Group>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                          defaultValue={"Gen categorie"}
                        >
                          <option>Acțiune</option>
                          <option>Animație</option>
                          <option>Aventură</option>
                          <option>Comedie</option>
                          <option>Crimă</option>
                          <option>Dramă</option>
                          <option>Fantezie</option>
                          <option>Horror</option>
                          <option>Sci-Fi</option>
                          <option>Thriller</option>
                        </select>
                      </Form.Group>
                      {/* Choose movie(es) */}
                      <Form.Group>
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          placeholder={"Selectează filme"}
                          isMulti
                          options={options}
                        />
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Link to="/categories-movies-list">
                          {/* Save button */}
                          <Button
                            type="button"
                            onClick={() =>
                              history.push("/categories-movies-list")
                            }
                            variant=" btn-primary"
                          >
                            Salvează
                          </Button>{" "}
                        </Link>
                        <Link to="/categories-movies-list">
                          {/* Cancel button */}
                          <Button type="reset" variant=" btn-danger">
                            Anulează
                          </Button>
                        </Link>
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
