import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import Card from "../../components/card/Card";
import SearchBar from "../../components/searchBar/SearchBar";
import newsImage from "../../assets/images/movie-thumb/news.jpg";

export default function NewsList() {
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
                <SearchBar placeholder="Caută articol după titlu" />
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
                      {/* Row #1 */}
                      <tr>
                        {/* Image post */}
                        <td>
                          <div className="media align-items-center">
                            <div className="iq-movie">
                              <Link to="#">
                                <img
                                  src={newsImage}
                                  className="img-border-radius avatar-40 img-fluid"
                                  alt=""
                                  style={{ Width: 100 }}
                                />
                              </Link>
                            </div>
                          </div>
                        </td>
                        {/* Title post */}
                        <td>Titlu postare</td>
                        {/* Category post */}
                        <td>Film</td>
                        {/* Tags post */}
                        <td>Noutate, Film, Trailer</td>
                        {/* Date post */}
                        <td>20 aprilie 2022</td>
                        {/* Edit and delete button */}
                        <td>
                          <div className="flex align-items-center list-user-action">
                            {/* Edit button */}
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Editează</Tooltip>}
                            >
                              <Link className="iq-bg-success" to="#">
                                <i className="ri-pencil-line"></i>
                              </Link>
                            </OverlayTrigger>
                            {/* Delete button */}
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Șterge</Tooltip>}
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
                        {/* Image post */}
                        <td>
                          <div className="media align-items-center">
                            <div className="iq-movie">
                              <Link to="#">
                                <img
                                  src={newsImage}
                                  className="img-border-radius avatar-40 img-fluid"
                                  alt=""
                                  style={{ Width: 100 }}
                                />
                              </Link>
                            </div>
                          </div>
                        </td>
                        {/* Title post */}
                        <td>Titlu postare</td>
                        {/* Category post */}
                        <td>Program cinema</td>
                        {/* Tags post */}
                        <td>Cinema, Program, Filme</td>
                        {/* Date post */}
                        <td>15 aprilie 2022</td>
                        {/* Edit and delete button */}
                        <td>
                          <div className="flex align-items-center list-user-action">
                            {/* Edit button */}
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Editează</Tooltip>}
                            >
                              <Link className="iq-bg-success" to="#">
                                <i className="ri-pencil-line"></i>
                              </Link>
                            </OverlayTrigger>
                            {/* Delete button */}
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Șterge</Tooltip>}
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
                        {/* Image post */}
                        <td>
                          <div className="media align-items-center">
                            <div className="iq-movie">
                              <Link to="#">
                                <img
                                  src={newsImage}
                                  className="img-border-radius avatar-40 img-fluid"
                                  alt=""
                                  style={{ Width: 100 }}
                                />
                              </Link>
                            </div>
                          </div>
                        </td>
                        {/* Title post */}
                        <td>Titlu postare</td>
                        {/* Category post */}
                        <td>Trailer</td>
                        {/* Tags post */}
                        <td>Cinema, Film, Trailer</td>
                        {/* Date post */}
                        <td>08 aprilie 2022</td>
                        {/* Edit and delete button */}
                        <td>
                          <div className="flex align-items-center list-user-action">
                            {/* Edit button */}
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Editează</Tooltip>}
                            >
                              <Link className="iq-bg-success" to="#">
                                <i className="ri-pencil-line"></i>
                              </Link>
                            </OverlayTrigger>
                            {/* Delete button */}
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Șterge</Tooltip>}
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
