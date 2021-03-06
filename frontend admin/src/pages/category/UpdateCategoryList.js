import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Card from "../../components/card/Card";
import { CategoryContext } from "../../context/categoryContext/CategoryContext";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMovies } from "../../context/movieContext/apiCalls";
import { updateCategoryMovies } from "../../context/categoryContext/apiCalls";
import { ToastContainer } from "react-toastify";

export default function UpdateCategoryList() {
  const location = useLocation();
  const categoryList = location.categoryList;
  const [categoryUpdate, setCategoryUpdate] = useState(categoryList);
  const { dispatch } = useContext(CategoryContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);
  const history = useHistory();

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setCategoryUpdate({ ...categoryUpdate, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setCategoryUpdate({ ...categoryUpdate, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCategoryMovies(categoryUpdate, dispatch);
    setTimeout(() => {
      history.push("/categories-movies-list");
    }, 6000);
  };

  return (
    <>
      <Container fluid>
        {categoryList && (
          <Row>
            <Col sm="6">
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <Card.Header.Title>
                    <h4 className="card-title">Actualizare categorie</h4>
                  </Card.Header.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col lg="12">
                      <Form>
                        {/* Category name */}
                        <Form.Group>
                          <label>Titlu</label>
                          <Form.Control
                            placeholder={categoryList.title}
                            name="title"
                            onChange={handleChange}
                          />
                        </Form.Group>
                        {/* Choose genre movie category */}
                        <Form.Group>
                          <label>Gen</label>
                          <select
                            className="form-control"
                            name="genre"
                            onChange={handleChange}
                            defaultValue={categoryList.genre}
                          >
                            <option>Ac??iune</option>
                            <option>Anima??ie</option>
                            <option>Aventur??</option>
                            <option>Comedie</option>
                            <option>Crim??</option>
                            <option>Dram??</option>
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
                              Alege filmele care vor face parte din aceast??
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
                            {/* Update button */}
                            <Button
                              type="button"
                              variant=" btn-primary"
                              onClick={handleSubmit}
                            >
                              Actualizeaz??
                            </Button>{" "}
                          </Link>
                          <Link to="/categories-movies-list">
                            {/* Cancel button */}
                            <Button type="reset" variant=" btn-danger">
                              Anuleaz??
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
        )}
      </Container>
      <ToastContainer />
    </>
  );
}
