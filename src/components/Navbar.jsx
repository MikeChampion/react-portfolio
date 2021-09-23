import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// import { NavLinks } from "./NavLinks";

const navLinks = [
  {
      name: "About",
      route: "/about",
  },
  {
      name: "Portfolio",
      route: "/projects",
  },
  {
      name: "Contact",
      route: "/contact",
  },
  {
      name: "Resume",
      route: "/resume",
  },
];

function Navbar(props) {
  return (
    <nav className="flex justify-between items-center w-full gap-4 bg-blue-700 text-gray-100 px-4 py-4">
      <h1 className="text-2xl">Mike Champion</h1>
      <ul className="flex flex-row justify-end list-none gap-2">
        {navLinks.map((link, index) => (
            <Link to={link.route} key={index}>
                <li className="underline">
                    {link.name}
                </li>
            </Link>
          ))}
      </ul>
      
    </nav>
  )
}
  
Navbar.propTypes = {
  name: PropTypes.string,
  route: PropTypes.string,
};

export default Navbar