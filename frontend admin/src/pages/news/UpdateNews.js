import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import Card from "../../components/card/Card";
import storage from "../../firebase";
import Moment from "moment";
import { BlogContext } from "../../context/blogContext/BlogContext";
import { updatePost } from "../../context/blogContext/apiCalls";
import { ToastContainer } from "react-toastify";
import notifySuccess from "../../components/notify/notifySuccess";
import notifyError from "../../components/notify/notifyError";

export default function UpdateNews() {
  const location = useLocation();
  const post = location.post;

  const [postUpdate, setPostUpdate] = useState(post);
  const [image, setImage] = useState(null);
  const [, setUploaded] = useState(0);
  const history = useHistory();

  const { dispatch } = useContext(BlogContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setPostUpdate({ ...postUpdate, [e.target.name]: value });
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
            setPostUpdate((prev) => {
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

  const handleSubmitImage = (e) => {
    e.preventDefault();
    upload([{ file: image, label: "image" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost(postUpdate, dispatch);
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
              {/* Card header - update news */}
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Actualizare articol</h4>
                </Card.Header.Title>
              </Card.Header>
              {/* Update news form */}
              <Card.Body>
                <Form>
                  <Row>
                    <Col lg="12">
                      <div>
                        <label style={{ color: "white" }}>
                          Toate câmpurile sunt obligatorii! *
                        </label>
                      </div>
                      <label style={{ color: "white" }}>
                        Încărcați mai întâi fișierele multimedia. *
                      </label>
                      <Row>
                        {/* Update title post */}
                        <Form.Group className="col-12">
                          <label>Titlu</label>
                          <Form.Control
                            placeholder={post.title}
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
                        <Form.Group className="col-md-12">
                          {/* Choose category post */}
                          <label>Categorie</label>
                          <select
                            className="form-control"
                            name="category"
                            defaultValue={post.category}
                            onChange={handleChange}
                          >
                            <option>Box office</option>
                            <option>Program TV</option>
                            <option>Avanpremieră film</option>
                            <option>Trailer film</option>
                            <option>Noutate</option>
                          </select>
                        </Form.Group>
                        <Col sm="12" className="form-group">
                          {/* Choose tag(s) */}
                          <Form.Group>
                            <Col lg="12">
                              <label>Tag-uri</label>
                            </Col>
                            <select
                              multiple
                              className="form-control"
                              name="tags"
                              style={{ height: "100px" }}
                              onChange={handleChange}
                            >
                              <option value={"Box office"}>Box office</option>
                              <option value={"Film"}>Film</option>
                              <option value={"Noutate"}>Noutate</option>
                              <option value={"Trailer"}>Trailer</option>
                            </select>
                          </Form.Group>
                        </Col>
                        {/* Update description post */}
                        <Form.Group className="col-12">
                          <label>Descriere</label>
                          <Form.Control
                            as="textarea"
                            id="text"
                            name="description"
                            rows="5"
                            onChange={handleChange}
                            placeholder={post.description}
                          />
                        </Form.Group>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Form.Group className="col-12">
                      {/* Update article button */}
                      <Link to="/blog-posts">
                        <Button
                          type="button"
                          variant="primary"
                          onClick={handleSubmit}
                        >
                          Actualizează
                        </Button>{" "}
                      </Link>
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
