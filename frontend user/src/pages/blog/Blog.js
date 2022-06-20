import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import BannerPages from "../../components/banners/BannerPages";
import { Container, Row, Col } from "react-bootstrap";
import Article from "../../components/blog/leftSide/Article";
import TheMostRecentArticle from "../../components/blog/rightSide/TheMostRecentArticle";
import Footer from "../../components/footer/Footer";

export default function Blog() {
  const [lists, setLists] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get("/news/", {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        });
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  return (
    <>
      <Header />
      <BannerPages pageName="Blog" />
      <main id="main" className="site-main">
        <Container>
          <Row>
            {/* Left side - articles */}
            <Col lg="8" sm="12">
              {lists
                .filter((item) => {
                  if (query === "") {
                    return item;
                  } else if (
                    item.title.toLowerCase().includes(query.toLowerCase())
                  ) {
                    return item;
                  }
                  return false;
                })
                ?.map((item, index) => (
                  <Article key={index} item={item} />
                ))}
            </Col>
            {/* Right side - the most recent articles*/}
            <Col lg="4" sm="12">
              {/* Search bar */}
              <div
                className="widget-area"
                aria-label="Blog Sidebar"
                style={{ paddingTop: 25 }}
              >
                <div id="search-2" className="widget widget_search">
                  <form method="get" className="search-form" action="#">
                    <label>
                      <span className="input-group screen-reader-text">
                        Search for:
                      </span>
                    </label>
                    <input
                      type="search"
                      className="search-field search__input"
                      placeholder="Caută articol după titlu"
                      name="search"
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    <button type="submit" className="search-submit">
                      <i className="ri-search-line"></i>
                      <span className="screen-reader-text">
                        Caută articol după titlu
                      </span>
                    </button>
                  </form>
                </div>
              </div>
              <TheMostRecentArticle />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
