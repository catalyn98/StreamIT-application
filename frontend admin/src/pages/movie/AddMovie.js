import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Card from "../../components/card/Card";

export default function AddMovie() {
  let history = useHistory();

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              {/* Card header - add movie */}
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Adaugă film</h4>
                </Card.Header.Title>
              </Card.Header>
              {/* Add movie form */}
              <Card.Body>
                <Form>
                  <Row>
                    <Col lg="7">
                      <Row>
                        {/* Add movie title */}
                        <Form.Group className="col-12">
                          <Form.Control type="text" placeholder="Titlu" />
                        </Form.Group>
                        {/* Upload image */}
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
                        {/* Choose genre movie */}
                        <Form.Group className="col-md-6">
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            defaultValue={"Genul filmului"}
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
                        {/* Add movie duration */}
                        <Col sm="6" className="form-group">
                          <Form.Control type="text" placeholder="Durată" />
                        </Col>
                        {/* Add movie limit age */}
                        <Col sm="6" className="form-group">
                          <Form.Control
                            type="text"
                            placeholder="Limită de vârstă"
                          />
                        </Col>
                        {/* Add movie director */}
                        <Col sm="6" className="form-group">
                          <Form.Control type="text" placeholder="Director" />
                        </Col>
                        {/* Add movie cast */}
                        <Form.Group className="col-12">
                          <Form.Control type="text" placeholder="Distribuție" />
                        </Form.Group>
                        {/* Add movie description */}
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
                    {/* Upload movie */}
                    <Col lg="5">
                      <div className="d-block position-relative">
                        <div className="form_video-upload">
                          <input
                            type="file"
                            accept="video/mp4,video/x-m4v,video/*"
                            multiple
                          />
                          <p>Încarcă film</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Form.Group className="col-12">
                      {/* Add movie button */}
                      <Link to="/movies-list">
                        <Button
                          type="button"
                          onClick={() => history.push("/movie-list")}
                          variant="primary"
                        >
                          Adaugă film
                        </Button>{" "}
                      </Link>
                      {/* Cancel movie button */}
                      <Link to="/movies-list">
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
