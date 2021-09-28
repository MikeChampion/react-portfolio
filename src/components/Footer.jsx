import PropTypes from "prop-types";
import React from "react";
// import { render } from "react-dom";
// import { NavLinks } from "./NavLinks";

function Footer(props) {
  const footerLinks = [
    {
        name: "GitHub",
        url: "https://github.com/MikeChampion",
        icon: "logo-github",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/MikeChampion42/",
        icon: "logo-linkedin",
    },
    {
        name: "Stack Overflow",
        url: "https://stackoverflow.com/users/8723496/mike-champion",
        icon: "logo-stackoverflow",
    },
  ];

  return (
    <footer className="flex flex-row space-between justify-center items-center w-full gap-4 bg-blue-700 text-gray-100 fixed bottom-0">
      <div className="flex justify-center w-10 list-none gap-4">
        {footerLinks.map((link, index) => (
            <button key={index}>
              <a href={link.url} target="_blank" rel="noreferrer"><ion-icon title={link.name} name={link.icon} class={"text-2xl pt-3 pb-2 text-gray-100"}></ion-icon></a>
            </button>
          ))}
      </div>
    </footer>
  )
}
  
  Footer.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
    icon: PropTypes.string,
  };

export default Footer