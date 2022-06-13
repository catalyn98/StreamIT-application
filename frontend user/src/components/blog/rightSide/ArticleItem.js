import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "moment";

export default function ArticleItem({ item }) {
  const [, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get("/news/find/" + item._id, {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        });
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPost();
  }, [item]);

  const imagePost = item.image;

  return (
    <div className="widget-area" aria-label="Blog Sidebar">
      <div className="list-inline iq-widget-menu">
        <ul className="iq-post">
          <li>
            <div className="post-img">
              <div className="post-img-holder">
                <Link
                  to="#"
                  style={{ backgroundImage: "url(" + imagePost + ")" }}
                ></Link>
              </div>
              <div className="post-blog">
                <div className="blog-box">
                  <ul className="list-inline">
                    <li className="list-inline-item  mr-3">
                      <Link className="date-widget" to="#">
                        <i
                          className="fa fa-calendar mr-2"
                          aria-hidden="true"
                        ></i>
                        {Moment(item.createdAt).format("DD/MM/YYYY, HH:mm")}
                      </Link>
                    </li>
                  </ul>
                  <Link className="new-link" to="#">
                    <h6>{item.title}</h6>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
