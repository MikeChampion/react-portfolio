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
        <nav className="flex flex-col md:flex-row justify-between gap-2 items-center w-full bg-blue-700 text-gray-100 p-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl">Mike Champion</h1>
            <div id="nav" className="flex flex-row  flex-wrap md:flex-nowrap gap-1 md:gap-2">
                {navLinks.map((link, index) => (
                    <NavLink key={index} to={link.route} activeClassName='bg-gray-300 text-blue-700' className="text-sm md:text-lg px-2 py-1 underline rounded-lg hover:text-black transition">
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