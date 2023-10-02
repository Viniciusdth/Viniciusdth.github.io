import React, { Component } from 'react';
import './style.css'
import lindinha from "./../../assets/img/WhatsApp Image 2023-01-24 at 11.33.17.jpeg";

class Header extends Component {
    render() {
        return (
            <nav className="header">
                <div className="container">

                    <a href="/" className="logo">
                        <img src={lindinha} alt="Logo" />
                    </a>
                    <div
                        className="header-menu">
                        <ul>
                            <li>
                                <a href="/home">Home</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;