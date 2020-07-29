import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <main>
            <section className="hero">
                <div className="container LandingPage-container">  
                    <img class="LandingPage-hero__image" src={require('../../Assets/person.svg')} alt="illustration intro"/>
                    <div class="LandingPage-hero__content">
                        <h1 className="heading-primarily--big LandingPage-heading--big">
                            Expand your reading
                        </h1>
                        <p className="heading-primarily--sub LandingPage-heading--sub">
                            Read unlimited stories from a wide range of authors
                        </p>

                        <button class="btn btn-primary LandingPage-hero__btn">
                            <Link to="/signup">Get Started</Link>
                        </button>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="container LandingPage-container LandingPage-container--features">  
                    <div className="LandingPage-feature">

                        <div className="LandingPage-feature__card">
                            <div className="LandingPage-feature__container">
                                <img className="LandingPage-feature__image" src={require('../../Assets/access.svg')} alt="illustration intro"/>
                            </div>
                            <h2 className="heading-secondary--main">Access from anywhere</h2>
                            <p className="heading-secondary--sub">The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere</p>
                        </div>

                        <div className="LandingPage-feature__card">
                            <div className="LandingPage-feature__container">
                                <img className="LandingPage-feature__image" src={require('../../Assets/safety.svg')} alt="illustration intro"/>
                            </div>
                            <h2 className="heading-secondary--main">Security you can trust</h2>
                            <p className="heading-secondary--sub">2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files</p>
                        </div>

                        <div className="LandingPage-feature__card">
                            <div className="LandingPage-feature__container">
                                <img className="LandingPage-feature__image" src={require('../../Assets/collaboration.svg')} alt="illustration intro"/>
                            </div>
                            <h2 className="heading-secondary--main">Real-time collaboration</h2>
                            <p className="heading-secondary--sub">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required</p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="try-free">
                <div className="container">  
                    <div className="LandingPage-try-free">
                        <div className="LandingPage-try-free__image__container">
                            <img className="LandingPage-try-free__image" src={require('../../Assets/mockups.svg')} alt="illustration intro"/>
                        </div>
                        <div className="LandingPage-try-free__info">
                            <h2 className="heading-secondary--main">120 million curious readers and growing</h2>
                            <p className="heading-secondary--sub">Read unlimited stories with an optional subscription of $5/month. If it's not for you, cancel anytime.</p>
                            
                            <button class="btn btn-primary LandingPage-hero__btn">
                                <Link to="/signup">Get Started for Free</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <div className="LandingPage-footer-container">
                        <div className="LandingPage-footer">
                            <Link to="/" className="LandingPage-footer-title">
                                <img alt="logo" className="LandingPage-footer__logo" src={require('../../Assets/font.svg')} />
                                <h2 className="heading-secondary--main">Article</h2>
                            </Link>

                            <div className="LandingPage-footer-subtitle">
                                <p className="navigation-link--info">
                                    Unlimited stories from a wide range of authors
                                </p>
                                <div className="navigation-link--info">
                                    © 2020 Article
                                </div>
                            </div>
                        </div>

                        <div className="LandingPage-footer-links">
                            <div className="LandingPage-footer-links-item">
                                <div className="navigation-link--main">Product</div>
                                <div>
                                    <div className="navigation-link--sub">Overview</div>
                                    <div className="navigation-link--sub">Blog</div>
                                    <div className="navigation-link--sub">Subsctiption</div>
                                </div>
                            </div>
                            <div className="LandingPage-footer-links-item">
                                <div className="navigation-link--main">Company</div>
                                <div>
                                    <div className="navigation-link--sub">About</div>
                                    <div className="navigation-link--sub">Jobs</div>
                                    <div className="navigation-link--sub">Our Team</div>
                                    <div className="navigation-link--sub">Community</div>
                                </div>
                            </div>
                            <div className="LandingPage-footer-links-item">
                                <div className="navigation-link--main">Help & Support</div>
                                <div>
                                    <div className="navigation-link--sub">Help</div>
                                    <div className="navigation-link--sub">Contact Us</div>
                                    <div className="navigation-link--sub">Community</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default LandingPage;
