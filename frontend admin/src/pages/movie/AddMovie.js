import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Card from "../../components/card/Card";
import storage from "../../firebase";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";

export default function AddMovie() {
  const [movie, setMovie] = useState(null);
  const [image, setImage] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const history = useHistory();

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName =
        new Date().getTime() + " - " + item.label + " - " + item.file.name;
      const uploadTask = storage.ref(`/movieFiles/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: image, label: "image" },
      { file: trailer, label: "trailer" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
    history.push("/movies-list");
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              {/* Card header - add movie */}
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Adaugă film</h4>
                </Card.Header.Title>
              </Card.Header>
              {/* Add movie form */}
              <Card.Body>
                <Form>
                  <Row>
                    <Col lg="7">
                      <Row>
                        {/* Add movie title */}
                        <Form.Group className="col-12">
                          <div>
                            <label style={{ color: "white" }}>
                              Toate câmpurile sunt obligatorii! *
                            </label>
                          </div>
                          <label style={{ color: "white" }}>
                            Încărcați mai întâi fișierele multimedia. *
                          </label>
                          <Form.Control
                            type="text"
                            placeholder="Titlu"
                            name="title"
                            onChange={handleChange}
                          />
                        </Form.Group>
                        {/* Upload image */}
                        <div className="col-12 form_gallery form-group">
                          <label htmlFor="image">Încarcă imagine</label>
                          <input
                            data-name="#gallery2"
                            htmlFor="image"
                            id="image"
                            className="form_gallery-upload"
                            type="file"
                            name="image"
                            onChange={(e) => setImage(e.target.files[0])}
                          />
                        </div>
                        {/* Choose genre movie */}
                        <Form.Group className="col-md-6">
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            onChange={handleChange}
                            name="genre"
                            defaultValue={"Genul filmului"}
                          >
                            <option>Selectează gen</option>
                            <option>Acțiune</option>
                            <option>Animație</option>
                            <option>Aventură</option>
                            <option>Comedie</option>
                            <option>Crimă</option>
                            <option>Dramă</option>
                            <option>Fantezie</option>
                            <option>Horror</option>
                            <option>Sci-Fi</option>
                            <option>Thriller</option>
                          </select>
                        </Form.Group>
                        {/* Add movie duration */}
                        <Col sm="6" className="form-group">
                          <Form.Control
                            type="text"
                            placeholder="Durată"
                            name="duration"
                            onChange={handleChange}
                          />
                        </Col>
                        {/* Add movie limit age */}
                        <Col sm="6" className="form-group">
                          <Form.Control
                            type="text"
                            placeholder="Limită de vârstă"
                            name="limitAge"
                            onChange={handleChange}
                          />
                        </Col>
                        {/* Add movie director */}
                        <Col sm="6" className="form-group">
                          <Form.Control
                            type="text"
                            placeholder="Director"
                            name="director"
                            onChange={handleChange}
                          />
                        </Col>
                        {/* Add movie cast */}
                        <Form.Group className="col-12">
                          <Form.Control
                            type="text"
                            placeholder="Distribuție"
                            name="cast"
                            onChange={handleChange}
                          />
                        </Form.Group>
                        {/* Add movie description */}
                        <Form.Group className="col-12">
                          <Form.Control
                            as="textarea"
                            id="text"
                            name="description"
                            rows="5"
                            placeholder="Descriere"
                            onChange={handleChange}
                          ></Form.Control>
                        </Form.Group>
                      </Row>
                    </Col>
                    {/* Upload movie */}
                    <Col lg="5">
                      <div className="d-block position-relative">
                        <div className="form_video-upload">
                          <input
                            type="file"
                            onChange={(e) => setTrailer(e.target.files[0])}
                          />
                          <p>Încarcă film</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Form.Group className="col-12">
                      {/* Add movie button */}
                      {uploaded === 2 ? (
                        <Link to="/movies-list">
                          <Button
                            type="button"
                            variant="primary"
                            onClick={handleSubmit}
                          >
                            Adaugă
                          </Button>{" "}
                        </Link>
                      ) : (
                        <Link to="#">
                          <Button
                            type="button"
                            variant="primary"
                            onClick={handleUpload}
                          >
                            Încarcă
                          </Button>{" "}
                        </Link>
                      )}
                      {/* Cancel movie button */}
                      <Link to="/movies-list">
                        <Button type="reset" variant="danger">
                          Anulează
                        </Button>
                      </Link>
                    </Form.Group>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
