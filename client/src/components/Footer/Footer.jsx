import React from "react"
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Children</li>
          </ul>
        </div>
        <div className="item">
          <h1>Links</h1>
          <ul>
            <li>FAQ</li>
            <li>Stores</li>
            <li>Cookies</li>
          </ul>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo">LAMASTORE</div>
          <div className="copyright">©Copyright 2023 All Rights Reserved</div>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment" />
        </div>
      </div>
    </div>
  )
}

export default Footer
