import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="rec1">
            <div className="sec-left">
                <img src="/assets/imgs/logo.svg" alt="Logo" />
                <p>Made for you</p>
                <br />
                <p>Follow us</p>
                <div className="social-icons">
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-tiktok"></i>
                </div>
            </div>

            <div className="f-section">
                <h4>ORDER</h4>
                <a href="#">ORDER ON THE APP</a>
                <a href="#">UBER EATS</a>
                <a href="#">WAYS TO ORDER</a>
            </div>

            <div className="f-section">
                <h4>ABOUT US</h4>
                <a href="#">OUR COMPANY</a>
                <a href="#">NEWSROOM</a>
            </div>

            <div className="f-section">
                <h4>SHOP</h4>
                <a href="#">RETURN POLICY</a>
                <a href="#">SHIPPING POLICY</a>
            </div>

            <div className="f-section">
                <h4>GIFT CARDS</h4>
                <a href="#">PURCHASE A GIFT CARD</a>
                <a href="#">CHECK BALANCE</a>

                <div className="newsletter">
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
