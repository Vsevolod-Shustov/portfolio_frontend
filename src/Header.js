import React from 'react';

function Header(){
  return (
    <header className="block1 w-full">
    <nav>
      <ul className="flex flex-col lg:flex-row lg:justify-start">
        <li className="header_nav_item"><a href="/">Home</a></li>
        <li className="header_nav_item"><a href="/imagegrid">Image Grid</a></li>
        <li className="header_nav_item"><a href="/contact">CSS3 Animations</a></li>
      </ul>
      </nav>
    </header>
  )
}

export default Header;
