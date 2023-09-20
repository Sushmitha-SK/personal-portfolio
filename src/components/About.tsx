import React from 'react'
import about from '../assets/aboutimg.png'

const About = () => {
    const handleDownloadCV = () => {
        const cvLink = 'http://localhost:3000/';
        const link = document.createElement('a');
        link.href = cvLink;
        link.download = 'SushmithaS_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <section id="about" className="about section">
                <div className="d-grid about__wrapper container">
                    <div className="about__content">
                        <span className="section__subtitle">About Me</span>
                        <h2 className="section__title">I Design and Develop Experiences that
                            make people's live simple.</h2>
                        <p className="about__description">
                            Quality-focused Tester with 1 year and 9 months of end-to-end testing expertise, adept in diverse testing types. Transitioning to software development, fusing testing insights with coding passion for user-centric solutions. Committed to continuous learning and dynamic development growth
                        </p>
                        <a href="javascript:void(0)" className="btn btn--primary" onClick={handleDownloadCV}><i className="ri-article-line" />Download CV</a>
                    </div>
                    <img src={about} alt="Sushmitha S" className="about__img" />
                </div>
            </section>
        </>
    )
}

export default About