import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ArticleItem from "./ArticleItem";

export default function TheMostRecentArticle() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get("/news/?new=true/", {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("user")).token,
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
    <div className="widget-area" aria-label="Blog Sidebar">
      <div className="iq-widget-menu widget">
        <h5 className="widget-title">Ultimele postări</h5>
        {/* Article items  */}
        {lists?.map((item, index) => (
          <ArticleItem key={index} item={item} />
        ))}
      </div>
      {/* Tags */}
      <div id="tag_cloud-2" className="widget widget_tag_cloud">
        <h5 className="widget-title">Tag-uri</h5>
        <div className="tagcloud">
          <ul className="wp-tag-cloud">
            <li>
              <Link to="#" className="tag-cloud-link ">
                Acțiune
              </Link>
            </li>
            <li>
              <Link to="#" className="tag-cloud-link ">
                Comedie
              </Link>
            </li>
            <li>
              <Link to="#" className="tag-cloud-link ">
                Dramă
              </Link>
            </li>
            <li>
              <Link to="#" className="tag-cloud-link ">
                Istoric
              </Link>
            </li>
            <li>
              <Link to="#" className="tag-cloud-link ">
                Horror
              </Link>
            </li>
            <li>
              <Link to="#" className="tag-cloud-link ">
                Filme
              </Link>
            </li>
            <li>
              <Link to="#" className="tag-cloud-link">
                Trailer filme
              </Link>
            </li>
            <li>
              <Link to="#" className="tag-cloud-link">
                Mister
              </Link>
            </li>
            <li>
              <Link to="#" className="tag-cloud-link">
                Zvonuri
              </Link>
            </li>
            <li>
              <Link to="#" className="tag-cloud-link">
                Thriller
              </Link>
            </li>
            <li>
              <Link to="#" className="tag-cloud-link">
                Trailere
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
