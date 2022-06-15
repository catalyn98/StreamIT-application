import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import Card from "../../components/card/Card";
import { updateMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";

export default function UpdateMovie() {
  const location = useLocation();
  const history = useHistory();
  const movie = location.movie;

  const [movieUpdate, setMovieUpdate] = useState(null);

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovieUpdate({ ...movieUpdate, [e.target.name]: value });
  };

  console.log(movieUpdate);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMovie(movie._id, dispatch);
    history.push("/movies-list");
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              {/* Card header - update movie */}
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Actualizare film</h4>
                </Card.Header.Title>
              </Card.Header>
              {/* Update movie form */}
              <Card.Body>
                <Form>
                  <Row>
                    <Col lg="7">
                      <Row>
                        {/* Update movie title */}
                        <Form.Group className="col-12">
                          <label>Titlu</label>
                          <Form.Control
                            placeholder={movie.title}
                            name="title"
                            onChange={handleChange}
                          />
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
                          <label>Gen</label>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            onChange={handleChange}
                            name="genre"
                            defaultValue={movie.genre}
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
                        {/* Update movie duration */}
                        <Col sm="6" className="form-group">
                          <label>Durată</label>
                          <Form.Control
                            placeholder={movie.duration}
                            name="duration"
                            onChange={handleChange}
                          />
                        </Col>
                        {/* Update movie limit age */}
                        <Col sm="6" className="form-group">
                          <label>Limită de vârstă</label>
                          <Form.Control
                            placeholder={movie.limitAge}
                            name="limitAge"
                            onChange={handleChange}
                          />
                        </Col>
                        {/* Update movie director */}
                        <Col sm="6" className="form-group">
                          <label>Director</label>
                          <Form.Control
                            placeholder={movie.director}
                            name="director"
                            onChange={handleChange}
                          />
                        </Col>
                        {/* Update movie cast */}
                        <Form.Group className="col-12">
                          <label>Distribuție</label>
                          <Form.Control
                            placeholder={movie.cast}
                            name="cast"
                            onChange={handleChange}
                          />
                        </Form.Group>
                        {/* Update movie description */}
                        <Form.Group className="col-12">
                          <label>Descriere</label>
                          <Form.Control
                            as="textarea"
                            id="text"
                            name="description"
                            rows="5"
                            placeholder={movie.description}
                            onChange={handleChange}
                          />
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
                      {/* Update movie button */}
                      <Link to="/movies-list">
                        <Button
                          type="button"
                          variant="primary"
                          onClick={handleSubmit}
                        >
                          Actualizează
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
