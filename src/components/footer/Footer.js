import React from "react";
import "./FooterStyles.css";

function Footer() {
  return (
    <footer>
      <div className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Frontend Mentor
        </a>
        . Coded by <a href="https://sergkar.com/">Sergey Karavaev</a>.
      </div>
    </footer>
  );
}

export default Footer;
