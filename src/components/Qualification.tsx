import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { PiCertificate } from "react-icons/pi";

const Qualification = () => {
    return (
        <>
            <section className="counter section" id='education'>
                <div className="section__header container">
                    <span className="section__subtitle">Resume</span>
                    <h2 className="section__title">Education &amp; Experience
                    </h2>
                </div>
                <div className="d-grid service__wrapper container">
                    <div className="service__content">
                        <div style={{ marginBottom: '5%' }}>
                            <span className="section__subtitle" >EDUCATION</span>
                        </div>

                        <div className="service__card">
                            <div className="qualify__icon">

                                <SchoolIcon sx={{ width: '30px', height: '30px' }} />
                            </div>
                            <div className="service__info-wrapper">
                                <h4 style={{ fontSize: '12px', fontWeight: 400, color: '#9da7b1', marginBottom: '10px' }}>2011 - 2015</h4>
                                <h3 className="service__info-title">Master Of Computer Applications</h3>
                                <p className="service__description">
                                    Indira Gandhi National Open Univeristy
                                </p>
                                <p className="service__description" style={{ margin: '2px', fontSize: '14px' }}>Percentage: 63.39%</p>
                                <p className="service__description" style={{ margin: '2px', fontSize: '14px' }}>Year Of Passing: 2015</p>
                            </div>
                        </div>
                        <div className="service__card">
                            <div className="qualify__icon">
                                <SchoolIcon sx={{ width: '30px', height: '30px' }} />
                            </div>
                            <div className="service__info-wrapper">
                                <h3 className="service__info-title">Bachelor Of Computer Applications</h3>
                                <p className="service__description">
                                    Mangalore University
                                </p>
                                <p className="service__description" style={{ margin: '2px', fontSize: '14px' }}>Percentage: 70.60%</p>
                                <p className="service__description" style={{ margin: '2px', fontSize: '14px' }}>Year Of Passing: 2011</p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '5%' }}>
                            <span className="section__subtitle" >CERTIFICATIONS</span>
                        </div>

                        <div className="service__card">
                            <div className="qualify__icon">

                                <PiCertificate style={{ width: '30px', height: '30px' }} />
                            </div>
                            <div className="service__info-wrapper">
                                <h4 style={{ fontSize: '12px', fontWeight: 400, color: '#9da7b1', marginBottom: '10px' }}>June 2022</h4>
                                <a href="https://coursera.org/verify/specialization/DUMFTL78V9JX" target="_blank" rel="noopener noreferrer">
                                    <h3 className="service__info-title">Full-Stack Web Development with React</h3>
                                </a>
                                <p className="service__description">
                                    Coursera / The Hong Kong University of Science and Technology
                                </p>
                            </div>
                        </div>
                        <div className="service__card">
                            <div className="qualify__icon">
                                <PiCertificate style={{ width: '30px', height: '30px' }} />
                            </div>
                            <div className="service__info-wrapper">
                                <h4 style={{ fontSize: '12px', fontWeight: 400, color: '#9da7b1', marginBottom: '10px' }}>September 2023</h4>
                                <a href="https://coursera.org/verify/WTUVR828EWDW" target="_blank" rel="noopener noreferrer">
                                    <h3 className="service__info-title">Advanced React</h3>
                                </a>
                                <p className="service__description">
                                    Coursera / Meta
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="service__content">
                        <div style={{ marginBottom: '5%' }}>
                            <span className="section__subtitle">EXPERIENCE</span>
                        </div>
                        <div className="service__card">
                            <div className="qualify__icon">
                                <WorkIcon sx={{ width: '30px', height: '30px' }} />
                            </div>
                            <div className="service__info-wrapper">
                                <h4 style={{ fontSize: '12px', fontWeight: 400, color: '#9da7b1', marginBottom: '10px' }}>2011 - 2013</h4>
                                <h3 className="service__info-title">Tester</h3>
                                <p className="service__description">
                                    Robosoft Technologies Pvt. Ltd, Udupi
                                </p>
                                <ul style={{
                                    listStyleType: 'disc',
                                    lineHeight: 1.5,

                                }}>
                                    <li>Collaborated closely with the software development team to ensure the delivery of bug-free applications.</li>
                                    <li>Conducted various types of testing, including System Testing, Integration Testing, and Functional Testing. </li>
                                    <li>Maintained and updated comprehensive test plans, test cases, and test environments throughout the test life cycle. </li>
                                    <li>Actively participated in the Defect tracking process, reporting defects and working towards their resolution</li>
                                </ul>
                            </div>
                        </div>
                        <div className="service__card">
                            <div className="qualify__icon">
                                <WorkIcon sx={{ width: '30px', height: '30px' }} />
                            </div>
                            <div className="service__info-wrapper">
                                <h4 style={{ fontSize: '12px', fontWeight: 400, color: '#9da7b1', marginBottom: '10px' }}>2010 - 2011</h4>
                                <h3 className="service__info-title">Intern</h3>
                                <p className="service__description">
                                    Manipal Digital Systems
                                </p>
                                <ul
                                    style={{
                                        listStyleType: 'disc',
                                        lineHeight: 1.5
                                    }}>
                                    <li>Designed and developed user interfaces (UI) using Adobe Flex 3 for the frontend.</li>
                                    <li>Worked on the backend, implementing web services using Asp.net C# and utilized SQL Server 2005 as the database for data storage.</li>
                                    <li>Engaged in the maintenance, testing, and integration of changes to the application developed.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}

export default Qualification
