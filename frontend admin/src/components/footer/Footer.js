import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="iq-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6 text-right" style={{ color: "white" }}>
              Copyright 2022 <Link to="#">StreamIT</Link> - Toate drepturile
              rezervate.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
