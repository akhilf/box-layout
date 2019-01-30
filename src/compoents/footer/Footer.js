import React, { Component } from "react";
import "./Footer.css";

// Stateless functional Component

const Footer = props => {
  return (
    <footer>
      <p>Posted by: Hege Refsnes</p>
      <p>
        Contact information:{" "}
        <a href="mailto:someone@example.com">someone@example.com</a>.
      </p>
    </footer>
  );
};
export default Footer;
