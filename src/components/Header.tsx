import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header id="header" className="header">
                <nav className="nav container">
                    <a href="#home" className="nav__brand">Sushmitha.</a>
                    <div
                        className={`nav__menu ${isMenuOpen ? 'nav__menu--open' : ''}`}
                        id="nav-menu"
                    >
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <i className="ri-home-line nav__icon" />
                                    Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <i className="ri-user-line nav__icon" />
                                    About
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#skills" className="nav__link">
                                    <i className="ri-medal-line nav__icon" />
                                    Skills
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#education" className="nav__link">
                                    <i className="ri-briefcase-line nav__icon" />
                                    Qualifications
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#portfolio" className="nav__link">
                                    <i className="ri-folders-line nav__icon" />
                                    Portfolio
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <i className="ri-phone-line nav__icon" />
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="nav__toggle"
                        onClick={toggleMenu}
                    >
                        <i className={isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
                    </div>
                </nav>
            </header>


        </>
    );
};

export default Header;
