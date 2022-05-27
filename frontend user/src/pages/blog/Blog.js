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
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2JkNGU1ZDM4MWJlMzlkZDY5ZWMxYSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTI3NzcwMzMsImV4cCI6MTY1NTM2OTAzM30.LOXNcUtdISTsdPoTH22bIgD2ipyr1XgHVhovLQVhgdY",
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
