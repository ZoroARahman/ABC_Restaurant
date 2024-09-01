import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="Footer" id="footer">
      <div className="footer-content">
        <div className="footer-contant-left">
        <h2>ABC Resturent</h2>
        <p>`Let Food Be Thy Medicine and Medicine Be Thy Food`<br></br>since 2020</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-contant-rigth">
            <h2>Get in Touch</h2>
            <ul>
                <li>+9400000000</li>
                <li>ABC@Example.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyrigth">Copyrigth 2024 © ABC.com - All Rigth Reserved.</p>
    </div>
  );
};

export default Footer;
