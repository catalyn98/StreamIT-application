import React from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function SearchBar(props) {
  return (
    <div className="iq-search-bar ml-auto">
      <Form action="#" className="searchbox">
        <input
          type="text"
          className="text search-input"
          placeholder={props.placeholder}
        />
        <Link className="search-link" to="#">
          <i className="ri-search-line"></i>
        </Link>
      </Form>
    </div>
  );
}
