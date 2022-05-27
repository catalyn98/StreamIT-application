import React from "react";
import { Dropdown, Button } from "react-bootstrap";

export default function DropdownGenre() {
  return (
    <div style={{ paddingLeft: 100 }}>
      <Dropdown className="genres-box">
        <Dropdown.Toggle as={Button} variant="secondary">
          Gen film
        </Dropdown.Toggle>
        <Dropdown.Menu className="three-column">
          <Dropdown.Item href="#">Acțiune</Dropdown.Item>
          <Dropdown.Item href="#">Aventură</Dropdown.Item>
          <Dropdown.Item href="#">Comedie</Dropdown.Item>
          <Dropdown.Item href="#">Copii</Dropdown.Item>
          <Dropdown.Item href="#">Crimă</Dropdown.Item>
          <Dropdown.Item href="#">Dramă</Dropdown.Item>
          <Dropdown.Item href="#">Familie</Dropdown.Item>
          <Dropdown.Item href="#">Fantezie</Dropdown.Item>
          <Dropdown.Item href="#">Horror</Dropdown.Item>
          <Dropdown.Item href="#">Musical</Dropdown.Item>
          <Dropdown.Item href="#">Sci-Fi</Dropdown.Item>
          <Dropdown.Item href="#">Thriller</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
