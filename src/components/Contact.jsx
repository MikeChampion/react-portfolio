import PropTypes from "prop-types";
import React, { useState } from "react";

function Contact() {
  

  return (
    <div id="about" className="flex flex-col items-center my-4">This is the Contact section
    <br />
    Form with fields for name, an email address, and a message
    <br />
    WHEN I move my cursor out of one of the form fields without entering text
    <br />
    THEN I receive a notification that this field is required
    <br />
    WHEN I enter text into the email address field
    <br />
    THEN I receive a notification if I have entered an invalid email address
    <br />
      <img alt="blank" className="h-60 w-60 bg-red-600"></img>
    </div>
  )
}

export default Contact