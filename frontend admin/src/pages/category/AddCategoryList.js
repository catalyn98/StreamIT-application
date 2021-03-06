import React, { useState, useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { CategoryContext } from "../../context/categoryContext/CategoryContext";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMovies } from "../../context/movieContext/apiCalls";
import { createCategoryMovies } from "../../context/categoryContext/apiCalls";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Card from "../../components/card/Card";
import { ToastContainer } from "react-toastify";

export default function AddCategory() {
  const [list, setList] = useState(null);
  const history = useHistory();
  const { dispatch } = useContext(CategoryContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCategoryMovies(list, dispatch);
    setTimeout(() => {
      history.push("/categories-movies-list");
    }, 6000);
  };

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
                      <div>
                        <label style={{ color: "white" }}>
                          Toate câmpurile sunt obligatorii! *
                        </label>
                      </div>
                      {/* Category name */}
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder="Titlu"
                          name="title"
                          onChange={handleChange}
                        />
                      </Form.Group>
                      {/* Choose genre movie category */}
                      <Form.Group>
                        <select
                          className="form-control"
                          name="genre"
                          onChange={handleChange}
                          defaultValue="Gen categorie"
                        >
                          <option>Selectează gen</option>
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
                        <Col lg="12">
                          <label>
                            Alege filmele care vor face parte din această
                            categorie
                          </label>
                        </Col>
                        <Form.Group>
                          <select
                            multiple
                            className="form-control"
                            name="content"
                            onChange={handleSelect}
                          >
                            {movies
                              .sort((a, b) => a.title.localeCompare(b.title))
                              .map((movie) => (
                                <option key={movie._id} value={movie._id}>
                                  {movie.title},&nbsp;&nbsp;{movie.genre}
                                </option>
                              ))}
                          </select>
                        </Form.Group>
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Link to="/categories-movies-list">
                          {/* Add button */}
                          <Button
                            type="button"
                            onClick={handleSubmit}
                            variant=" btn-primary"
                          >
                            Adaugă
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
      <ToastContainer />
    </>
  );
}
