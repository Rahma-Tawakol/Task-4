import React, { useEffect, useState } from "react";
import "./Header.css";


const Header = () => {
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsHidden(window.scrollY > 50); 
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="header">
            <div className="m-container">
                <div className="first-row">
                    <div className="navbar">
                        <div className="logo">
                            <img src="/assets/imgs/logo.svg" alt="Caribou Coffee Logo" />
                        </div>

                        <ul className="nav-links">
                            <li><a href="#">MENU</a></li>
                            <li><a href="#">LOCATIONS</a></li>
                            <li><a href="#">GIFT CARDS</a></li>
                            <li><a href="#">ACCOUNT</a></li>
                            <li>
                                <div className="cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className={`second-row ${isHidden ? "hidden" : ""}`}>
                        <div className="search-bar">
                            <div className="find">
                                <i className="fa-solid fa-location-dot"></i> Find a location
                            </div>
                            <div className="search-box">
                                <i className="fa fa-search"></i>
                                <input type="text" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
