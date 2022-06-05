import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import BannerPages from "../../components/banners/BannerPages";
import Article from "../../components/blog/leftSide/Article";
import TheMostRecentArticle from "../../components/blog/rightSide/TheMostRecentArticle";

export default function Blog() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get("news/", {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjlhOGU1MDkzNjA2ZjhiYzQ2ZjZjYTkiLCJpYXQiOjE2NTQ0MTM0MjZ9.4ing-OKSxWow1iiME3BshJ0Xd_gZEMlv_nnSoda4mkk",
          },
        });
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, []);

  return (
    <>
      <BannerPages pageName="Blog" />
      <main id="main" className="site-main">
        <Container>
          <Row>
            {/* Left side - articles */}
            <Col lg="8" sm="12">
              {lists?.map((item, index) => (
                <Article key={index} item={item} />
              ))}
            </Col>
            {/* Right side - the most recent articles*/}
            <Col lg="4" sm="12">
              <TheMostRecentArticle />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
