import React, {useState} from 'react';
import { Link } from "react-router-dom";

import styles from './Header.scss';

function Header(){
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const handleMobileMenuControllerClick = () => {
    setisMobileMenuOpen(!isMobileMenuOpen);
  }
  return (
    <header className="block1 w-full fixed top-0 left-0 lg:static z-30">
    <div className={`${styles.navbar_mobile_toggle} ${"lg:hidden border rounded p-2"}`} onClick={handleMobileMenuControllerClick}>&equiv;</div>
    <nav className={`${isMobileMenuOpen ? styles.open : styles.closed} ${styles.navbar} ${"flex flex-col lg:flex-row lg:justify-start"}`}>
      <Link to="/" className="header_nav_item">Home</Link>
      <Link to="/animations" className="header_nav_item">Animations</Link>
    </nav>
    </header>
  )
}

export default Header;
