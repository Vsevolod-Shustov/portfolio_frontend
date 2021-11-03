import React from 'react';
import { Link } from "react-router-dom";

function Header(){
  return (
    <header className="block1 w-full">
    <nav className="flex flex-col lg:flex-row lg:justify-start">
      <Link to="/" className="header_nav_item">Home</Link>
      <Link to="/animations" className="header_nav_item">Animations</Link>
    </nav>
    </header>
  )
}

export default Header;
