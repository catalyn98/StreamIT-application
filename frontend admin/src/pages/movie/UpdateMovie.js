import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import Card from "../../components/card/Card";
import storage from "../../firebase";
import Moment from "moment";
import { updateMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ToastContainer } from "react-toastify";
import notifySuccess from "../../components/notify/notifySuccess";
import notifyError from "../../components/notify/notifyError";

export default function UpdateMovie() {
  const location = useLocation();
  const history = useHistory();
  const movie = location.movie;

  const [movieUpdate, setMovieUpdate] = useState(movie);
  const [image, setImage] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [, setUploaded] = useState(0);

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovieUpdate({ ...movieUpdate, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName =
        Moment(new Date().getTime()).format("HH:mm:ss") +
        " - " +
        item.file.name;
      const uploadTask = storage
        .ref(`/movies-files/${fileName}`)
        .put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
          notifyError("Fișierele media nu au putut fi încărcate.");
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setMovieUpdate((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
            notifySuccess(
              "Fișierul " + item.file.name + " a fost încărcat cu succes."
            );
          });
        }
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMovie(movieUpdate, dispatch);
    setTimeout(() => {
      history.push("/movies-list");
    }, 6000);
  };

  const handleSubmitImage = (e) => {
    e.preventDefault();
    upload([{ file: image, label: "image" }]);
  };

  const handleSubmitMovie = (e) => {
    e.preventDefault();
    upload([{ file: trailer, label: "trailer" }]);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm="6">
            <Card>
              {/* Card header - update movie */}
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Actualizare film</h4>
                </Card.Header.Title>
              </Card.Header>
              {/* Update movie form */}
              <Card.Body>
                <Form>
                  <Row>
                    <Col lg="12">
                      <Row>
                        {/* Update movie title */}
                        <Form.Group className="col-12">
                          <label>Titlu</label>
                          <Form.Control
                            placeholder={movie.title}
                            name="title"
                            onChange={handleChange}
                          />
                        </Form.Group>
                        {/* Upload image */}
                        <div className="col-12 form-group">
                          <label className="form-label">
                            Încarcă altă imagine
                          </label>
                          <input
                            className="form-control form_gallery-upload"
                            name="image"
                            type="file"
                            id="image"
                            onChange={(e) => setImage(e.target.files[0])}
                          />
                          <Button
                            type="button"
                            variant="primary"
                            style={{
                              position: "absolute",
                              top: "50%",
                              right: 25,
                            }}
                            onClick={handleSubmitImage}
                          >
                            Încarcă
                          </Button>{" "}
                        </div>
                        {/* Upload movie */}
                        <div className="col-12 form-group">
                          <label className="form-label">Încarcă alt film</label>
                          <input
                            className="form-control form_gallery-upload"
                            type="file"
                            onChange={(e) => setTrailer(e.target.files[0])}
                          />
                          <Button
                            type="button"
                            variant="primary"
                            style={{
                              position: "absolute",
                              top: "50%",
                              right: 25,
                            }}
                            onClick={handleSubmitMovie}
                          >
                            Încarcă
                          </Button>{" "}
                        </div>

                        {/* Choose genre movie */}
                        <Form.Group className="col-md-12">
                          <label>Gen</label>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            onChange={handleChange}
                            name="genre"
                            defaultValue={movie.genre}
                          >
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
                        {/* Update movie duration */}
                        <Col sm="6" className="form-group">
                          <label>Durată</label>
                          <Form.Control
                            placeholder={movie.duration}
                            name="duration"
                            onChange={handleChange}
                          />
                        </Col>
                        {/* Update movie limit age */}
                        <Col sm="6" className="form-group">
                          <label>Limită de vârstă</label>
                          <Form.Control
                            placeholder={movie.limitAge}
                            name="limitAge"
                            onChange={handleChange}
                          />
                        </Col>
                        {/* Update movie director */}
                        <Col sm="6" className="form-group">
                          <label>Director</label>
                          <Form.Control
                            placeholder={movie.director}
                            name="director"
                            onChange={handleChange}
                          />
                        </Col>
                        {/* Update movie cast */}
                        <Form.Group className="col-12">
                          <label>Distribuție</label>
                          <Form.Control
                            placeholder={movie.cast}
                            name="cast"
                            onChange={handleChange}
                          />
                        </Form.Group>
                        {/* Update movie description */}
                        <Form.Group className="col-12">
                          <label>Descriere</label>
                          <Form.Control
                            as="textarea"
                            id="text"
                            name="description"
                            rows="5"
                            placeholder={movie.description}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Form.Group className="col-12">
                      {/* Update movie button */}
                      <Link to="/movies-list">
                        <Button
                          type="button"
                          variant="primary"
                          onClick={handleSubmit}
                        >
                          Actualizează
                        </Button>{" "}
                      </Link>
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
      <ToastContainer />
    </>
  );
}
