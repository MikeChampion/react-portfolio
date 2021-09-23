import PropTypes from "prop-types";
import React, { useState } from "react";

// import { NavLinks } from "./NavLinks";

const navLinks = [
  {
      name: "Home",
      route: "/",
  },
  {
      name: "About",
      route: "/about",
  },
  {
      name: "Portfolio",
      route: "/portfolio",
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
            <li key={index}>
              <a href={link.route} className="underline">{link.name}</a>
            </li>
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