import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import Card from "../../components/card/Card";

export default function CategoriesList() {
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
                      {/* Row #1 */}
                      <tr>
                        <td>Filme populare</td>
                        <td>Acțiune</td>
                        <td>7</td>
                        <td>
                          <div className="flex align-items-center list-user-action">
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Edit</Tooltip>}
                            >
                              <Link className="iq-bg-success" to="#">
                                <i className="ri-pencil-line"></i>
                              </Link>
                            </OverlayTrigger>
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Delete</Tooltip>}
                            >
                              <Link className="iq-bg-primary" to="#">
                                <i className="ri-delete-bin-line"></i>
                              </Link>
                            </OverlayTrigger>
                          </div>
                        </td>
                      </tr>
                      {/* Row #2 */}
                      <tr>
                        <td>Recomandările noastre</td>
                        <td>Acțiune</td>
                        <td>10</td>
                        <td>
                          <div className="flex align-items-center list-user-action">
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Edit</Tooltip>}
                            >
                              <Link className="iq-bg-success" to="#">
                                <i className="ri-pencil-line"></i>
                              </Link>
                            </OverlayTrigger>
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Delete</Tooltip>}
                            >
                              <Link className="iq-bg-primary" to="#">
                                <i className="ri-delete-bin-line"></i>
                              </Link>
                            </OverlayTrigger>
                          </div>
                        </td>
                      </tr>
                      {/* Row #3 */}
                      <tr>
                        <td>Cele mai bune filme horror</td>
                        <td>Horror</td>
                        <td>16</td>
                        <td>
                          <div className="flex align-items-center list-user-action">
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Edit</Tooltip>}
                            >
                              <Link className="iq-bg-success" to="#">
                                <i className="ri-pencil-line"></i>
                              </Link>
                            </OverlayTrigger>
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Delete</Tooltip>}
                            >
                              <Link className="iq-bg-primary" to="#">
                                <i className="ri-delete-bin-line"></i>
                              </Link>
                            </OverlayTrigger>
                          </div>
                        </td>
                      </tr>
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
