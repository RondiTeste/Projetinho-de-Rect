import React from "react";
import "./Navbar.css";
import ReactDom from 'react-dom'
const Navbar = () => {
  return ReactDom.createPortal(
    <div className="navbar">
      <div className="navbar-brand">Minha Marca</div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">Sobre</a>
        <a href="#contact">Contato</a>
      </div>
    </div>,
    document.getSelection("#navbar-root")

  );
};

export default Navbar;
