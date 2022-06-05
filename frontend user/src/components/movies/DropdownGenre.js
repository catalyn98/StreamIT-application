import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default function DropdownGenre({ setGenre }) {
  const handleSelect = (eventKey) => {
    setGenre(eventKey);
  };

  return (
    <div style={{ paddingLeft: 100 }}>
      <Dropdown className="genres-box">
        <DropdownButton
          variant="secondary"
          onSelect={handleSelect}
          title="Gen film"
        >
          <div className="three-column">
            <Dropdown.Item eventKey="Acțiune">Acțiune</Dropdown.Item>
            <Dropdown.Item eventKey="Animație">Animație</Dropdown.Item>
            <Dropdown.Item eventKey="Aventură">Aventură</Dropdown.Item>
            <Dropdown.Item eventKey="Comedie">Comedie</Dropdown.Item>
            <Dropdown.Item eventKey="Copii">Copii</Dropdown.Item>
            <Dropdown.Item eventKey="Crimă">Crimă</Dropdown.Item>
            <Dropdown.Item eventKey="Documentar">Documentar</Dropdown.Item>
            <Dropdown.Item eventKey="Dramă">Dramă</Dropdown.Item>
            <Dropdown.Item eventKey="Familie">Familie</Dropdown.Item>
            <Dropdown.Item eventKey="Fantezie">Fantezie</Dropdown.Item>
            <Dropdown.Item eventKey="Horror">Horror</Dropdown.Item>
            <Dropdown.Item eventKey="Musical">Musical</Dropdown.Item>
            <Dropdown.Item eventKey="Sci-Fi">Sci-Fi</Dropdown.Item>
            <Dropdown.Item eventKey="Thriller">Thriller</Dropdown.Item>
            <Dropdown.Item eventKey="">Toate genurile</Dropdown.Item>
          </div>
        </DropdownButton>
      </Dropdown>
    </div>
  );
}
