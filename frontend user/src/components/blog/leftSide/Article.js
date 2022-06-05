import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "moment";

export default function Article({ item }) {
  const [, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get("/news/find/" + item, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjliZTdkNTQyMTc4YzU2ODczNzAxMzEiLCJpYXQiOjE2NTQzODg3Nzd9.AYFpNADW9wAirr9xAoln8mfyqiHvjChvPz5Z9Hclwbs",
          },
        });
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPost();
  }, [item]);

  return (
    <>
      <article>
        <div className="iq-blog-box">
          <div className="iq-blog-image">
            {/* Image post */}
            <img width="1920" height="1080" src={item.image} alt="" />
          </div>
          {/* Post details */}
          <div className="iq-blog-detail">
            <div className="iq-blog-meta">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <Link to="#" className="iq-user">
                    <i className="fa fa-user-o mr-1" aria-hidden="true"></i>
                    Administrator
                  </Link>
                </li>
                {/* Date post */}
                <li className="list-inline-item">
                  <i className="fa fa-calendar mr-1" aria-hidden="true"></i>
                  <Link to="#" rel="bookmark">
                    <time dateTime="2019-02-02 12:46:15">
                      {Moment(item.createdAt).format("DD/MM/YYYY, HH:mm")}
                    </time>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Title post */}
            <div className="blog-title">
              <h3 className="entry-title">
                <Link to="#">{item.title}</Link>
              </h3>
            </div>
            {/* Description post */}
            <div className="blog-content" style={{ paddingTop: 25 }}>
              <p>{item.description}</p>
            </div>
            {/* Category post */}
            <ul className="iq-blogcat">
              <li className="iq-tag-title">
                <i className="fa fa-film" aria-hidden="true"></i> Categorie:
              </li>
              <li>
                <Link to="#">{item.category}</Link>
              </li>
            </ul>
            {/* Tags post */}
            <ul className="iq-blogtag">
              <li className="iq-tag-title">
                <i className="fa fa-tags" aria-hidden="true"></i> Tag-uri:
              </li>
              {item.tags.map((item, index) => (
                <li key={index}>
                  <Link to="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}
