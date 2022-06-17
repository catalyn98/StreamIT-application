import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Card from "../../components/card/Card";
import { CategoryContext } from "../../context/categoryContext/CategoryContext";
import {
  getCategoriesMovies,
  deleteCategoryMovies,
} from "../../context/categoryContext/apiCalls";
import { ToastContainer } from "react-toastify";

export default function CategoriesList() {
  const { categoriesMovies, dispatch } = useContext(CategoryContext);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getCategoriesMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteCategoryMovies(id, dispatch);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              {/* Card header - categories list */}
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Listă categorii</h4>
                </Card.Header.Title>
                {/* SearchBar */}
                <div className="iq-search-bar ml-auto">
                  <Form action="#" className="searchbox">
                    <input
                      type="text"
                      className="text search-input"
                      placeholder="Caută categorie după titlu"
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    <Link className="search-link" to="#">
                      <i className="ri-search-line"></i>
                    </Link>
                  </Form>
                </div>
                <div className="iq-card-header-toolbar d-flex align-items-center">
                  <Link to="/add-category" className="btn btn-primary">
                    Adaugă categorie
                  </Link>
                </div>
              </Card.Header>
              {/* Content table - categories list */}
              <Card.Body>
                <div className="table-view">
                  <table
                    className="data-tables table movie_table "
                    style={{ width: "100%" }}
                  >
                    {/* Table head */}
                    <thead>
                      <tr>
                        <th style={{ width: "20%" }}>Titlu</th>
                        <th style={{ width: "20%" }}>Gen</th>
                        <th style={{ width: "10%" }}>Număr de filme</th>
                        <th style={{ width: "20%" }}>Editează/Șterge</th>
                      </tr>
                    </thead>
                    {/* Content table */}
                    <tbody>
                      {categoriesMovies
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
                            <td>{item.title}</td>
                            <td>{item.genre}</td>
                            <td>{item.content.length}</td>
                            <td>
                              <div className="flex align-items-center list-user-action">
                                {/* Edit category movie button */}
                                <Link
                                  to={{
                                    pathname:
                                      "/update-category-list/" + item.title,
                                    categoryList: item,
                                  }}
                                  style={{ marginRight: 25 }}
                                >
                                  <Button variant="outline-success">
                                    <i className="ri-pencil-line"></i>
                                  </Button>
                                </Link>{" "}
                                {/* Delete category movie button */}
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
