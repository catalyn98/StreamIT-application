import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Card from "../../components/card/Card";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMovies, deleteMovie } from "../../context/movieContext/apiCalls";
import { ToastContainer } from "react-toastify";
import placeholderMovie from "../../assets/images/movie-thumb/placeholderMovie.jpg";

export default function MoviesList() {
  const { movies, dispatch } = useContext(MovieContext);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              {/* Card header - movies list */}
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Listă filme</h4>
                </Card.Header.Title>
                {/* SearchBar */}
                <div className="iq-search-bar ml-auto">
                  <Form action="#" className="searchbox">
                    <input
                      type="text"
                      className="text search-input"
                      placeholder="Caută film după nume"
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    <Link className="search-link" to="#">
                      <i className="ri-search-line"></i>
                    </Link>
                  </Form>
                </div>
                {/* Add movie button */}
                <div className="iq-card-header-toolbar d-flex align-items-center">
                  <Link to="/add-movie" className="btn btn-primary">
                    Adaugă film
                  </Link>
                </div>
              </Card.Header>
              {/* Content table - movies list */}
              <Card.Body>
                <div className="table-view">
                  <table
                    className="data-tables table movie_table "
                    style={{ width: "100%" }}
                  >
                    {/* Table head */}
                    <thead>
                      <tr>
                        <th style={{ width: "15%" }}>Film</th>
                        <th style={{ width: "10%" }}>Limită de vârstă</th>
                        <th style={{ width: "5%" }}>Durată</th>
                        <th style={{ width: "5%" }}>Gen</th>
                        <th style={{ width: "10%" }}>Editează/Șterge</th>
                      </tr>
                    </thead>
                    {/* Content table */}
                    <tbody>
                      {movies
                        .filter((item) => {
                          if (query === "") {
                            return item;
                          } else if (
                            item.title
                              .toLowerCase()
                              .includes(query.toLowerCase())
                          ) {
                            return item;
                          }
                          return false;
                        })
                        .map((item, index) => (
                          <tr key={index}>
                            {/* Movie poster + movie name */}
                            <td>
                              <div className="media align-items-center">
                                <div className="iq-movie">
                                  {/* Movie poster */}
                                  <Link to="#">
                                    <img
                                      src={item.image || placeholderMovie}
                                      className="img-border-radius avatar-40 img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                {/* Movie name */}
                                <div className="media-body text-white text-left ml-3">
                                  <p className="mb-0">{item.title}</p>
                                </div>
                              </div>
                            </td>
                            {/* Limit age */}
                            <td>{item.limitAge}</td>
                            {/* Duration */}
                            <td>{item.duration}</td>
                            {/* Genre */}
                            <td>{item.genre}</td>
                            {/* Edit and delete button */}
                            <td>
                              <div className="flex align-items-center list-user-action">
                                {/* Edit movie button */}
                                <Link
                                  to={{
                                    pathname: "/update-movie/" + item.title,
                                    movie: item,
                                  }}
                                  style={{ marginRight: 25 }}
                                >
                                  <Button variant="outline-success">
                                    <i className="ri-pencil-line"></i>
                                  </Button>{" "}
                                </Link>
                                {/* Delete movie button */}
                                <Button
                                  variant="outline-primary"
                                  onClick={() => handleDelete(item._id)}
                                >
                                  <i className="ri-delete-bin-line"></i>
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
}
