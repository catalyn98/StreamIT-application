import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import Moment from "moment";
import { UserContext } from "../../context/userContext/UserContext";
import { getUsers, deleteUser } from "../../context/userContext/apiCalls";
import { ToastContainer } from "react-toastify";
import user from "../../assets/images/user/user.png";

export default function UsersList() {
  const { users, dispatch } = useContext(UserContext);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              {/* Card header - users list */}
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Listă utilizatori</h4>
                </Card.Header.Title>
                {/* SearchBar */}
                <div className="iq-search-bar ml-auto">
                  <Form action="#" className="searchbox">
                    <input
                      type="text"
                      className="text search-input"
                      placeholder="Caută utilizator după username"
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    <Link className="search-link" to="#">
                      <i className="ri-search-line"></i>
                    </Link>
                  </Form>
                </div>
              </Card.Header>
              {/* Content table - users list */}
              <Card.Body>
                <div className="table-view">
                  <table
                    className="data-tables table movie_table"
                    style={{ width: "100%" }}
                  >
                    {/* Table head */}
                    <thead>
                      <tr>
                        <th style={{ width: "10%" }}>Poză de profil</th>
                        <th style={{ width: "5%" }}>Nume</th>
                        <th style={{ width: "5%" }}>Prenume</th>
                        <th style={{ width: "10%" }}>Email</th>
                        <th style={{ width: "5%" }}>Nume de utilizator</th>
                        <th style={{ width: "10%" }}>Număr de telefon</th>
                        <th style={{ width: "10%" }}>Data înregistrării</th>
                        <th style={{ width: "5%" }}>Șterge cont</th>
                      </tr>
                    </thead>
                    {/* Content table */}
                    <tbody>
                      {users
                        .filter((item) => {
                          if (query === "") {
                            return item;
                          } else if (
                            item.username
                              .toLowerCase()
                              .includes(query.toLowerCase())
                          ) {
                            return item;
                          }
                          return false;
                        })
                        .map((item, index) => (
                          <tr key={index}>
                            <td>
                              <img
                                src={item.profilePicture || user}
                                className="img-fluid avatar-50"
                                alt="author-profile"
                              />
                            </td>
                            {/* First name */}
                            <td>{item.firstName}</td>
                            {/* Last name */}
                            <td>{item.lastName}</td>
                            {/* Email address */}
                            <td>{item.email}</td>
                            {/* Username */}
                            <td>{item.username}</td>
                            {/* Phone number */}
                            <td>{item.phoneNumber}</td>
                            {/* Join date */}
                            <td>
                              {Moment(item.createdAt).format(
                                "DD/MM/YYYY, HH:mm"
                              )}
                            </td>
                            {/* Delete button */}
                            <td>
                              <div className="flex align-items-center list-user-action">
                                {/* Delete user button */}
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
