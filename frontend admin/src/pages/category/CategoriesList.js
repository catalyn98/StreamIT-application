import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "../../components/card/Card";
import { CategoryContext } from "../../context/categoryContext/CategoryContext";
import {
  getCategoriesMovies,
  deleteCategoryMovie,
} from "../../context/categoryContext/apiCalls";

export default function CategoriesList() {
  const { categoriesMovies, dispatch } = useContext(CategoryContext);

  useEffect(() => {
    getCategoriesMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteCategoryMovie(id, dispatch);
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
                        <th style={{ width: "20%" }}>Nume categorie</th>
                        <th style={{ width: "20%" }}>Gen categorie</th>
                        <th style={{ width: "10%" }}>Număr filme</th>
                        <th style={{ width: "20%" }}>Editează/Șterge</th>
                      </tr>
                    </thead>
                    {/* Content table */}
                    <tbody>
                      {categoriesMovies.map((item, index) => (
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
    </>
  );
}
