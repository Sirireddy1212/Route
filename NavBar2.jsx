import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function NavBar2() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="container">
      <nav>
        <ul className="Domain">
          <img id="logo" src="logo.png"></img>
          <li>
            <a href="">Domain Names</a>
          </li>
          <li>
            <a href="">Websites & hosting</a>
          </li>
          <li>
            <a href="">commerce</a>
          </li>
          <li>
            <a href="">Email&Marking</a>
          </li>
        </ul>

        <ul className="rightside">
          <li>
            <a href="">Hire an Expert</a>
          </li>

          <div>
            {isOpen ? null : (
              <ul className="dropdownMenu">
                <li>FAQ</li>
                <li>Contact Us</li>
                <li>visit again</li>
                <li>njnw</li>
                <li>FYI</li>
              </ul>
            )}

            <button className="Drop" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "Help" : "Help"}
            </button>
          </div>

          <li>
            <a href="">Sign In</a>
          </li>
          <img className="cart" src="images.png"></img>
        </ul>
      </nav>

      <Link to="/users">users</Link>
      <Link to="/contact">contact</Link>
    </div>
  );
}
