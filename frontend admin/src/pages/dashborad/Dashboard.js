import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../../components/card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFilm, faList } from "@fortawesome/free-solid-svg-icons";
import UsersStatisticsChart from "../../components/charts/UsersStatisticsChart";
import MoviesStatisticsChart from "../../components/charts/MoviesStatisticsChart";
import TableNewUsers from "../../components/new-users/TableNewUsers";

export default function Dashbord() {
  const [totalNumberOfUsers, setTotalNumberOfUsers] = useState();
  const [totalNumberOfMovies, setTotalNumberOfMovies] = useState();
  const [totalNumberOfCategoriesMovies, setTotalNumberOfCategoriesMovies] =
    useState();

  useEffect(() => {
    const getTotalNumberOfUsers = async () => {
      try {
        const res = await axios.get("/user/total-number-of-users/", {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        });
        setTotalNumberOfUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getTotalNumberOfMovies = async () => {
      try {
        const res = await axios.get("/movie/total-number-of-movies/", {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        });
        setTotalNumberOfMovies(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getTotalNumberOfCategoriesMovies = async () => {
      try {
        const res = await axios.get(
          "/categories-movies/total-number-of-categories-movies/",
          {
            headers: {
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            },
          }
        );
        setTotalNumberOfCategoriesMovies(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getTotalNumberOfUsers();
    getTotalNumberOfMovies();
    getTotalNumberOfCategoriesMovies();
  }, []);

  return (
    <>
      <Container fluid>
        {/* Data - number of users, number of movies & number of categories */}
        <Row>
          <Col lg="12">
            <Row>
              {/* Data - number of users */}
              <Col sm="6" lg="6" xl="3">
                <Card className="iq-card-block iq-card-stretch iq-card-height">
                  <Card.Body>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="iq-cart-text text-capitalize">
                        <p
                          className="mb-0 font-size-14"
                          style={{ color: "white" }}
                        >
                          Utilizatori
                        </p>
                      </div>
                      <div className="icon iq-icon-box-top rounded-circle bg-success">
                        <FontAwesomeIcon icon={faUser} />
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-3">
                      <h4 className="mb-0">{totalNumberOfUsers}</h4>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              {/* Data - number of movies */}
              <Col sm="6" lg="6" xl="3">
                <Card className="iq-card-block iq-card-stretch iq-card-height">
                  <Card.Body>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="iq-cart-text text-capitalize">
                        <p className="mb-0" style={{ color: "white" }}>
                          Filme
                        </p>
                      </div>
                      <div className="icon iq-icon-box-top rounded-circle bg-primary">
                        <FontAwesomeIcon icon={faFilm} />
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-3">
                      <h4 className=" mb-0">{totalNumberOfMovies}</h4>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              {/* Data - number of categories */}
              <Col sm="6" lg="6" xl="3">
                <Card className="iq-card-block iq-card-stretch iq-card-height">
                  <Card.Body>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="iq-cart-text text-capitalize">
                        <p
                          className="mb-0 font-size-14"
                          style={{ color: "white" }}
                        >
                          Categorii
                        </p>
                      </div>
                      <div className="icon iq-icon-box-top rounded-circle bg-warning">
                        <FontAwesomeIcon icon={faList} />
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-3">
                      <h4 className="mb-0">{totalNumberOfCategoriesMovies}</h4>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          {/* Users statistics chart */}
          <Col sm="12" lg="9">
            <Card className="iq-card-block iq-card-stretch iq-card-height">
              <Card.Header className="d-flex align-items-center justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Statistici utilizatori</h4>
                </Card.Header.Title>
              </Card.Header>
              <Card.Body className="p-0">
                <UsersStatisticsChart />
              </Card.Body>
            </Card>
          </Col>
          {/* Movies statistics by genre */}
          <Col sm="12" lg="9">
            <Card className="iq-card-block iq-card-stretch iq-card-height">
              <Card.Header className="d-flex align-items-center justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">
                    Statistici filme în funcție de gen
                  </h4>
                </Card.Header.Title>
              </Card.Header>
              <Card.Body className="p-0">
                <MoviesStatisticsChart />
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              {/* Card header - users list */}
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">
                    Ultimii utilizatori înregistrați
                  </h4>
                </Card.Header.Title>
              </Card.Header>
              <TableNewUsers />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
