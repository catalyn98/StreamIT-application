import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import Card from "../../components/card/Card";
import SearchBar from "../../components/searchBar/SearchBar";
import user from "../../assets/images/user/01.png";

export default function UsersList() {
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
                <SearchBar placeholder="Caută utilizator după username" />
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
                      {/* Row #1 */}
                      <tr>
                        <td>
                          <img
                            src={user}
                            className="img-fluid avatar-50"
                            alt="author-profile"
                          />
                        </td>
                        {/* First name */}
                        <td>Cătălan</td>
                        {/* Last name */}
                        <td>Cătălin</td>
                        {/* Email address */}
                        <td>catalin_catalan@yahoo.com</td>
                        {/* Username */}
                        <td>catalyn98</td>
                        {/* Phone number */}
                        <td>0737 728 737</td>
                        {/* Join date */}
                        <td>10 mai 2022</td>
                        {/* Delete button */}
                        <td>
                          <div className="flex align-items-center list-user-action">
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Șterge</Tooltip>}
                            >
                              <Link
                                onClick={(e) => e.preventDefault()}
                                className="iq-bg-primary"
                                to="#"
                              >
                                <i className="ri-delete-bin-line"></i>
                              </Link>
                            </OverlayTrigger>
                          </div>
                        </td>
                      </tr>
                      {/* Row #2 */}
                      <tr>
                        <td>
                          <img
                            src={user}
                            className="img-fluid avatar-50"
                            alt="author-profile"
                          />
                        </td>
                        {/* First name */}
                        <td>Bodan</td>
                        {/* Last name */}
                        <td>Dănuț</td>
                        {/* Email address */}
                        <td>bodan_danut@yahoo.com</td>
                        {/* Username */}
                        <td>dan99</td>
                        {/* Phone number */}
                        <td>0731 654 812</td>
                        {/* Join date */}
                        <td>08 mai 2022</td>
                        {/* Delete button */}
                        <td>
                          <div className="flex align-items-center list-user-action">
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Șterge</Tooltip>}
                            >
                              <Link
                                onClick={(e) => e.preventDefault()}
                                className="iq-bg-primary"
                                to="#"
                              >
                                <i className="ri-delete-bin-line"></i>
                              </Link>
                            </OverlayTrigger>
                          </div>
                        </td>
                      </tr>
                      {/* Row #3 */}
                      <tr>
                        <td>
                          <img
                            src={user}
                            className="img-fluid avatar-50"
                            alt="author-profile"
                          />
                        </td>
                        {/* First name */}
                        <td>Zimbru</td>
                        {/* Last name */}
                        <td>Cătălin</td>
                        {/* Email address */}
                        <td>catalin_zimbru@yahoo.com</td>
                        {/* Username */}
                        <td>zimbru_cata</td>
                        {/* Phone number */}
                        <td>0735 315 908</td>
                        {/* Join date */}
                        <td>17 martie 2022</td>
                        {/* Delete button */}
                        <td>
                          <div className="flex align-items-center list-user-action">
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Șterge</Tooltip>}
                            >
                              <Link
                                onClick={(e) => e.preventDefault()}
                                className="iq-bg-primary"
                                to="#"
                              >
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
