import React from 'react'
import flavorblends from '../assets/flavorblends.jpg'
import newsinsight from '../assets/newsinsight.jpg'
import taskoptima from '../assets/taskoptima.jpg'
import foodynest from '../assets/Foody_Nest.jpg'
import portfolio from '../assets/portfolio.jpg'
import bugtrace from '../assets/BugTrace.jpg'

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
