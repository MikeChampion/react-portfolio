import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";

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
    <nav className="flex justify-between items-center w-full bg-blue-700 text-gray-100 p-4">
      <h1 className="md:text-2xl">Mike Champion</h1>
      <div className="flex flex-row justify-end list-none md:gap-2">
        {navLinks.map((link, index) => (
            <NavLink key={index} to={link.route} activeClassName='bg-gray-300 text-blue-700' className="font-sm px-2 py-1 underline rounded-lg hover:text-black transition">
                {link.name}
            </NavLink>
          ))}
      </div>
      
    </nav>
  )
}
  
Navbar.propTypes = {
  name: PropTypes.string,
  route: PropTypes.string,
};

export default Navbar