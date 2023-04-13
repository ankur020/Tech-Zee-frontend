import React from "react";
import Marquee from "react-fast-marquee";
import "./footer.css";
import Card from "./Card";
const Footer = () => {
  return (
    <div>
      <footer className="py-3 my-4  text-secondary-emphasis">
        <Card/>
        <div className="MarqueeSection">
          <div className="marquee">
            <Marquee speed={50}>TZEE BY TECH-ZEE/</Marquee>
          </div>
        </div>
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        </ul>
        <p className="text-center text-muted">© 2023 TZEE, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;