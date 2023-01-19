import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            placeat. Soluta cum quis id. Quod id ipsam excepturi quasi commodi
            iste possimus! Repellendus pariatur alias asperiores aliquid impedit
            cumque aspernatur?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis
            natus voluptatem quas consequuntur nihil, labore molestiae saepe,
            quidem distinctio fugiat suscipit. Fugiat provident soluta officiis
            ad. Dicta, numquam exercitationem?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Store</span>
          <span className="copyright">
            &copy; Copyright 2023. All Rights Reserved.
          </span>
        </div>
        <div className="right">
          <img src="/images/payment-methods.png" alt="Payment methods." />
        </div>
      </div>
    </div>
  );
};

export default Footer;
