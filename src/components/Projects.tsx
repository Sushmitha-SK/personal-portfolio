import React from 'react'
import flavorblends from '../assets/flavorblends.jpg'
import newsinsight from '../assets/newsinsight.jpg'
import taskoptima from '../assets/taskoptima.jpg'
import foodynest from '../assets/Foody_Nest.jpg'
import portfolio from '../assets/portfolio.jpg'
import bugtrace from '../assets/BugTrace.jpg'
import acquirespace from '../assets/acquirespace.jpg'
import shopspace from '../assets/shopspace.jpg'
import orbit from '../assets/orbit.jpg'
import neolearn from '../assets/NeoLearn.jpg'

const Projects = () => {
    return (
        <>
            <section id="portfolio" className="portfolio section">
                <div className="section__header container">
                    <span className="section__subtitle">Portfolio</span>
                    <h2 className="section__title">Featured Projects</h2>
                </div>
                <div className="d-grid portfolio__wrapper container">
                    <div className="portfolio__project">
                        <div className="portfolio__overlay" />
                        <img src={neolearn} alt="Website Design" className="portfolio__img" />
                        <div className="portfolio__info">
                            <div className="portfolio__info-wrapper">
                                <h3 className="portfolio__title">NeoLearn</h3>
                                <p className="portfolio__description">
                                    NeoLearn is a modern full-stack e-learning platform where educators can create and manage courses, and students can enroll, learn, and track their progress interactively.
                                </p>
                            </div>
                        </div>
                        <a href="https://github.com/Sushmitha-SK/NeoLearn.git"
                            className="portfolio__link" target="_blank">
                            <i className="ri-external-link-line" />
                        </a>
                    </div>
                    <div className="portfolio__project">
                        <div className="portfolio__overlay" />
                        <img src={orbit} alt="Website Design" className="portfolio__img" />
                        <div className="portfolio__info">
                            <div className="portfolio__info-wrapper">
                                <h3 className="portfolio__title">Orbit</h3>
                                <p className="portfolio__description">
                                    Orbit is a powerful task management system designed to streamline team collaboration and boost productivity. Built on the MERN stack, it offers a modern, responsive interface with seamless backend integration for a smooth, scalable user experience.
                                </p>
                            </div>
                        </div>
                        <a href="https://github.com/Sushmitha-SK/Orbit-TaskManager.git"
                            className="portfolio__link" target="_blank">
                            <i className="ri-external-link-line" />
                        </a>
                    </div>
                    <div className="portfolio__project">
                        <div className="portfolio__overlay" />
                        <img src={acquirespace} alt="Website Design" className="portfolio__img" />
                        <div className="portfolio__info">
                            <div className="portfolio__info-wrapper">
                                <h3 className="portfolio__title">AcquireSpace</h3>
                                <p className="portfolio__description">
                                    AcquireSpace is a real estate app that makes it easy to list, explore, and manage properties. It features a responsive design, Google integrations (Maps, Sign-In, Analytics), and secure backend services with user authentication, property management, and email notifications.                                </p>
                            </div>
                        </div>
                        <a href="https://github.com/Sushmitha-SK/AcquireSpace-Real-Estate.git"
                            className="portfolio__link" target="_blank">
                            <i className="ri-external-link-line" />
                        </a>
                    </div>
                    <div className="portfolio__project">
                        <div className="portfolio__overlay" />
                        <img src={shopspace} alt="Website Design" className="portfolio__img" />
                        <div className="portfolio__info">
                            <div className="portfolio__info-wrapper">
                                <h3 className="portfolio__title">ShopSpace</h3>
                                <p className="portfolio__description">
                                    ShopSpace is a modern eCommerce website built with React and TypeScript, utilizing the FakeStore API for product data and integrated with the Stripe Payment Gateway for secure and efficient online transactions.
                                </p>
                            </div>
                        </div>
                        <a href="https://github.com/Sushmitha-SK/ShopSpace-Web.git"
                            className="portfolio__link" target="_blank">
                            <i className="ri-external-link-line" />
                        </a>
                    </div>
                    <div className="portfolio__project">
                        <div className="portfolio__overlay" />
                        <img src={taskoptima} alt="Website Design" className="portfolio__img" />
                        <div className="portfolio__info">
                            <div className="portfolio__info-wrapper">
                                <h3 className="portfolio__title">TaskOptima</h3>
                                <p className="portfolio__description">
                                    Task Management System web app developed using React JS, Redux and Material UI
                                </p>
                            </div>
                        </div>
                        <a href="https://github.com/Sushmitha-SK/TaskManagementSystem-TaskOptima.git"
                            className="portfolio__link" target="_blank">
                            <i className="ri-external-link-line" />
                        </a>
                    </div>
                    <div className="portfolio__project">
                        <div className="portfolio__overlay" />
                        <img src={flavorblends} alt="Food Recipe App" className="portfolio__img" />
                        <div className="portfolio__info">
                            <div className="portfolio__info-wrapper">
                                <h3 className="portfolio__title">Flavor Blends</h3>
                                <p className="portfolio__description">
                                    A Food Recipe App developed using TypeScript
                                </p>
                            </div>
                        </div>
                        <a href="https://github.com/Sushmitha-SK/Flavor-Blends-Recipe-App.git" className="portfolio__link"
                            target="_blank">
                            <i className="ri-external-link-line" />
                        </a>
                    </div>
                    <div className="portfolio__project">
                        <div className="portfolio__overlay" />
                        <img src={newsinsight} alt="News App" className="portfolio__img" />
                        <div className="portfolio__info">
                            <div className="portfolio__info-wrapper">
                                <h3 className="portfolio__title">Newsinsight</h3>
                                <p className="portfolio__description">
                                    A news app developed using ReactJS, Redux for state management and Redux Persist for saving state across sessions.
                                </p>
                            </div>
                        </div>
                        <a href="https://github.com/Sushmitha-SK/NewsInsight-NewsPortal.git" className="portfolio__link"
                            target="_blank">
                            <i className="ri-external-link-line" />
                        </a>
                    </div>
                    <div className="portfolio__project">
                        <div className="portfolio__overlay" />
                        <img src={portfolio} alt="Personal Portfolio" className="portfolio__img" />
                        <div className="portfolio__info">
                            <div className="portfolio__info-wrapper">
                                <h3 className="portfolio__title">Portfolio</h3>
                                <p className="portfolio__description">
                                    Portfolio, a personal portfolio page developed using TypeScript and CSS
                                </p>
                            </div>
                        </div>
                        <a href="https://github.com/Sushmitha-SK/personal-portfolio.git" className="portfolio__link"
                            target="_blank">
                            <i className="ri-external-link-line" />
                        </a>
                    </div>
                    <div className="portfolio__project">
                        <div className="portfolio__overlay" />
                        <img src={bugtrace} alt="Bug Trace" className="portfolio__img" />
                        <div className="portfolio__info">
                            <div className="portfolio__info-wrapper">
                                <h3 className="portfolio__title">Bug Trace</h3>
                                <p className="portfolio__description">
                                    Bug Trace web app developed using MERN Stack.
                                </p>
                            </div>
                        </div>
                        <a href="https://github.com/Sushmitha-SK/BugTrace-BugTrackingSystem.git" className="portfolio__link"
                            target="_blank">
                            <i className="ri-external-link-line" />
                        </a>
                    </div>
                    <div className="portfolio__project">
                        <div className="portfolio__overlay" />
                        <img src={foodynest} alt="Foody Nest" className="portfolio__img" />
                        <div className="portfolio__info">
                            <div className="portfolio__info-wrapper">
                                <h3 className="portfolio__title">Foody Nest</h3>
                                <p className="portfolio__description">
                                    Foody Nest, a Food Ordering System web application developed using MERN stack with STRIPE payment.
                                </p>
                            </div>
                        </div>
                        <a href="https://github.com/Sushmitha-SK/FoodyNest-FoodOrderingSystem.git" className="portfolio__link" target="_blank">
                            <i className="ri-external-link-line" />
                        </a>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Projects
