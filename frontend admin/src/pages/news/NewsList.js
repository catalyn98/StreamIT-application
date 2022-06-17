import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Card from "../../components/card/Card";
import Moment from "moment";
import { BlogContext } from "../../context/blogContext/BlogContext";
import { getPosts, deletePost } from "../../context/blogContext/apiCalls";
import { ToastContainer } from "react-toastify";
import news from "../../assets/images/movie-thumb/news.jpg";

export default function NewsList() {
  const { posts, dispatch } = useContext(BlogContext);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getPosts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deletePost(id, dispatch);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              {/* Card header - news list */}
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Listă articole</h4>
                </Card.Header.Title>
                {/* SearchBar */}
                <div className="iq-search-bar ml-auto">
                  <Form action="#" className="searchbox">
                    <input
                      type="text"
                      className="text search-input"
                      placeholder="Caută articol după titlu"
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    <Link className="search-link" to="#">
                      <i className="ri-search-line"></i>
                    </Link>
                  </Form>
                </div>
                {/* Add news button */}
                <div className="iq-card-header-toolbar d-flex align-items-center">
                  <Link to="/add-news" className="btn btn-primary">
                    Adaugă articol
                  </Link>
                </div>
              </Card.Header>
              {/* Content table - news list */}
              <Card.Body>
                <div className="table-view">
                  <table
                    className="data-tables table movie_table "
                    style={{ width: "100%" }}
                  >
                    {/* Table head */}
                    <thead>
                      <tr>
                        <th style={{ width: "2%" }}>Postare</th>
                        <th style={{ width: "15%" }}>Titlu</th>
                        <th style={{ width: "5%" }}>Categorie</th>
                        <th style={{ width: "10%" }}>Tag-uri</th>
                        <th style={{ width: "10%" }}>Dată creare</th>
                        <th style={{ width: "10%" }}>Editează/Șterge</th>
                      </tr>
                    </thead>
                    {/* Content table */}
                    <tbody>
                      {posts
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
                            {/* Image post */}
                            <td>
                              <div className="media align-items-center">
                                <div className="iq-movie">
                                  <Link to="#">
                                    <img
                                      src={item.image || news}
                                      className="img-border-radius avatar-40 img-fluid"
                                      alt=""
                                      style={{ Width: 100 }}
                                    />
                                  </Link>
                                </div>
                              </div>
                            </td>
                            {/* Title post */}
                            <td>{item.title}</td>
                            {/* Category post */}
                            <td>{item.category}</td>
                            {/* Tags post */}
                            <td style={{ listStyleType: "none" }}>
                              {item.tags?.map((tag, index) => (
                                <li key={index}>{tag}</li>
                              ))}
                            </td>
                            {/* Date post */}
                            <td>
                              {Moment(item.createdAt).format(
                                "DD/MM/YYYY, HH:mm"
                              )}
                            </td>
                            {/* Edit and delete button */}
                            <td>
                              <div className="flex align-items-center list-user-action">
                                {/* Edit post button */}
                                <Link
                                  to={{
                                    pathname: "/update-news/" + item.title,
                                    post: item,
                                  }}
                                  style={{ marginRight: 25 }}
                                >
                                  <Button variant="outline-success">
                                    <i className="ri-pencil-line"></i>
                                  </Button>
                                </Link>
                                {/* Delete post movie button */}
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
