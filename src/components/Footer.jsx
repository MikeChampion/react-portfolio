import PropTypes from "prop-types";
import React from "react";
// import { render } from "react-dom";
// import { NavLinks } from "./NavLinks";

function Footer(props) {
  const footerLinks = [
    {
        name: "GitHub",
        url: "https://github.com/MikeChampion",
        icon: "github",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/MikeChampion42/",
        icon: "linkedin",
    },
    {
        name: "Stack Overflow",
        url: "https://www.facebook.com/Rassilon007",
        icon: "facebook",
    },
    {
      name: "Reddit",
      url: "https://www.reddit.com/user/Rassilon007",
      icon: "reddit",
  },
  ];

  return (
    <footer className="flex flex-row space-between justify-center items-center w-full gap-4 bg-blue-700 text-gray-100 py-4 fixed bottom-0">
      <div className="flex justify-center w-10 list-none gap-4">
        {footerLinks.map((link, index) => (
            <button key={index}>
              <a href={link.url} target="_blank" rel="noreferrer"><i title={link.name} className={`ion-logo-${link.icon} text-2xl`}></i></a>
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