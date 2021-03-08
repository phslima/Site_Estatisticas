//imports react
import React from "react";

//imports css
import "./NavbarPET.css";

//imports artes
import logo_pet from "./icone_pet.svg";

//imports react-bootstrap
import { Navbar } from "react-bootstrap";

const NavbarPET = () => {
  return (
    <div>
      <Navbar bg="light" className="navbarPET">
        <Navbar.Brand className="justify-content-start">
          <img src={logo_pet} alt="logo" />
          
          <Navbar.Text className="navtext">
            Estatísticas de Disciplinas
          </Navbar.Text>

        </Navbar.Brand>
        
      </Navbar>
    </div>
  );
};

export default NavbarPET;
