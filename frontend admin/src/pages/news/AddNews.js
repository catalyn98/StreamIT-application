import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { BlogContext } from "../../context/blogContext/BlogContext";
import { createPost } from "../../context/blogContext/apiCalls";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Moment from "moment";
import storage from "../../firebase";
import notifyError from "../../components/notify/notifyError";
import notifySuccess from "../../components/notify/notifySuccess";
import Card from "../../components/card/Card";
import { ToastContainer } from "react-toastify";

export default function AddNews() {
  const [post, setPost] = useState(null);
  const [image, setImage] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const history = useHistory();

  const { dispatch } = useContext(BlogContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setPost({ ...post, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setPost({ ...post, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName =
        Moment(new Date().getTime()).format("HH:mm:ss") +
        " - " +
        item.file.name;
      const uploadTask = storage.ref(`/posts-files/${fileName}`).put(item.file);
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
            setPost((prev) => {
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

  const handleUpload = (e) => {
    e.preventDefault();
    upload([{ file: image, label: "image" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(post, dispatch);
    setTimeout(() => {
      history.push("/blog-posts");
    }, 6000);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm="6">
            <Card>
              {/* Card header - add news */}
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Adaugă articol</h4>
                </Card.Header.Title>
              </Card.Header>
              {/* Add news form */}
              <Card.Body>
                <Form>
                  <Row>
                    <Col lg="12">
                      <Row>
                        {/* Add title post */}
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
                            placeholder="Titlu postare"
                            name="title"
                            onChange={handleChange}
                          />
                        </Form.Group>
                        {/* Upload image post */}
                        <div className="col-12 form-group">
                          <label className="form-label">Încarcă imagine</label>
                          <input
                            className="form-control form_gallery-upload"
                            name="image"
                            type="file"
                            id="image"
                            onChange={(e) => setImage(e.target.files[0])}
                          />
                        </div>
                        {/* Choose category post */}
                        <Form.Group className="col-md-12">
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            defaultValue={"Categorie"}
                            name="category"
                            onChange={handleChange}
                          >
                            <option>Selectează categorie</option>
                            <option>Box Office</option>
                            <option>Avanpremieră film</option>
                            <option>Trailer film</option>
                            <option>Noutate</option>
                          </select>
                        </Form.Group>
                        <Col sm="12" className="form-group">
                          <Form.Group>
                            <Col lg="12">
                              <label>Tag-uri</label>
                            </Col>
                            <select
                              multiple
                              className="form-control"
                              name="tags"
                              onChange={handleSelect}
                              style={{ height: "100px" }}
                            >
                              <option value={"Box office"}>Box office</option>
                              <option value={"Film"}>Film</option>
                              <option value={"Noutate"}>Noutate</option>
                              <option value={"Trailer"}>Trailer</option>
                            </select>
                          </Form.Group>
                        </Col>
                        {/* Add description post */}
                        <Form.Group className="col-12">
                          <Form.Control
                            as="textarea"
                            id="text"
                            rows="5"
                            placeholder="Descriere"
                            name="description"
                            onChange={handleChange}
                          ></Form.Control>
                        </Form.Group>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Form.Group className="col-12">
                      {/* Add article button */}
                      {uploaded === 1 ? (
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
                      {/* Cancel article button */}
                      <Link to="/blog-posts">
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
