import React from "react";
import { Link } from "react-router-dom";

export default function CardMemberTeam(props) {
  return (
    <>
      <Link to="#">
        <div className="image-box">
          <img
            width="265"
            height="345"
            src={props.avatar}
            className="img-fluid attachment-large size-large"
            alt=""
            loading="lazy"
          />
        </div>
      </Link>
      <div className="icon-box-content">
        <div className="widget-container">
          <p className="heading-title size-default">{props.function}</p>
        </div>
        <div className="widget-container">
          <h4 className="heading-title size-default">{props.name}</h4>
        </div>
      </div>
    </>
  );
}
