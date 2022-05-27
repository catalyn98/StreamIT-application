import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import Card from "../../components/card/Card";
import SearchBar from "../../components/searchBar/SearchBar";
import posterMovie from "../../assets/images/movie-thumb/placeholderMovie.jpg";

export default function MoviesList() {
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
                <SearchBar placeholder="Caută film după nume" />
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
                      {/* Row #1 */}
                      <tr>
                        {/* Movie poster + movie name */}
                        <td>
                          <div className="media align-items-center">
                            <div className="iq-movie">
                              {/* Movie poster */}
                              <Link to="#">
                                <img
                                  src={posterMovie}
                                  className="img-border-radius avatar-40 img-fluid"
                                  alt=""
                                />
                              </Link>
                            </div>
                            {/* Movie name */}
                            <div className="media-body text-white text-left ml-3">
                              <p className="mb-0">Ariciul Sonic 2</p>
                            </div>
                          </div>
                        </td>
                        {/* Limit age */}
                        <td>PG</td>
                        {/* Duration */}
                        <td>2h 2m</td>
                        {/* Genre */}
                        <td>Acțiune</td>
                        {/* Edit and delete button */}
                        <td>
                          <div className="flex align-items-center list-user-action">
                            {/* Edit movie button */}
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Editează</Tooltip>}
                            >
                              <Link className="iq-bg-success" to="#">
                                <i className="ri-pencil-line"></i>
                              </Link>
                            </OverlayTrigger>
                            {/* Delete movie button */}
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
                        {/* Movie poster + movie name */}
                        <td>
                          <div className="media align-items-center">
                            <div className="iq-movie">
                              {/* Movie poster */}
                              <Link to="#">
                                <img
                                  src={posterMovie}
                                  className="img-border-radius avatar-40 img-fluid"
                                  alt=""
                                />
                              </Link>
                            </div>
                            {/* Movie name */}
                            <div className="media-body text-white text-left ml-3">
                              <p className="mb-0">Mortal Kombat</p>
                            </div>
                          </div>
                        </td>
                        {/* Limit age */}
                        <td>R</td>
                        {/* Duration */}
                        <td>1h 50m</td>
                        {/* Genre */}
                        <td>Acțiune</td>
                        {/* Edit and delete button */}
                        <td>
                          <div className="flex align-items-center list-user-action">
                            {/* Edit movie button */}
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Editează</Tooltip>}
                            >
                              <Link className="iq-bg-success" to="#">
                                <i className="ri-pencil-line"></i>
                              </Link>
                            </OverlayTrigger>
                            {/* Delete movie button */}
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
                        {/* Movie poster + movie name */}
                        <td>
                          <div className="media align-items-center">
                            <div className="iq-movie">
                              {/* Movie poster */}
                              <Link to="#">
                                <img
                                  src={posterMovie}
                                  className="img-border-radius avatar-40 img-fluid"
                                  alt=""
                                />
                              </Link>
                            </div>
                            {/* Movie name */}
                            <div className="media-body text-white text-left ml-3">
                              <p className="mb-0">Divergent</p>
                            </div>
                          </div>
                        </td>
                        {/* Limit age */}
                        <td>PG-13</td>
                        {/* Duration */}
                        <td>2h 19m</td>
                        {/* Genre */}
                        <td>Acțiune</td>
                        {/* Edit and delete button */}
                        <td>
                          <div className="flex align-items-center list-user-action">
                            {/* Edit movie button */}
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Editează</Tooltip>}
                            >
                              <Link className="iq-bg-success" to="#">
                                <i className="ri-pencil-line"></i>
                              </Link>
                            </OverlayTrigger>
                            {/* Delete movie button */}
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
