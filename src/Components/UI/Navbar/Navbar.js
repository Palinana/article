import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <header className="Navbar-header">
            <div className="Navbar-container">
                <div className="Navbar-site-title">
                    <img alt="logo" className="Navbar-site-title__logo" src={require('../../../Assets/font.svg')} />
                    <h2 className="heading-secondary--main">Article</h2>
                </div>

                <nav>
                    <ul className="Navbar-list">
                        <li className="Navbar-list__item"><a href="#" className="Navbar-list__link">Home</a></li>
                        <li className="Navbar-list__item"><a href="" className="Navbar-list__link">About</a></li>
                        <li className="Navbar-list__item"><a href="" className="Navbar-list__link">Recent posts</a></li>
                    </ul>
                </nav>
            </div>               
        </header>
    );
}

export default Navbar;
