import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <header>
      <div className="container">
        <nav className="nav">
          
          <ul className="nav-list nav-list-larger">
            <li className="nav-item">
              <a href="index.html" className="nav-link nav-link-apple"></a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Store</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Mac</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">iPad</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">iPhone</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Watch</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">AirPods</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">TV&Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Only on Apple</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Accessories</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Support</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-link-search"></a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-link-bag"></a>
            </li>
          </ul>
        </nav>
      </div>
      </header>
    </div>
  );
};

export default Navbar;
