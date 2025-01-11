import { Link } from 'react-router-dom';
/*import footerLogo from '../../assets/images/footer-logo.png';*/

const logo = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734769285/PSK%20Hotels/logo/LOGO_szpyzj.png";

const Footer = () => {
    return (
        <section className="main-footer">
            <div className="top-pattern-layer-dark"></div>
            <div className="widgets-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="column col-xl-3 col-lg-12 col-md-12 col-sm-12">
                            <div className="footer-widget about-widget">
                                <div className="logo">
                                    <a href="#"><img src={logo} alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="column col-xl-5 col-lg-8 col-md-12 col-sm-12">
                            <div className="footer-widget links-widget">
                                <div className="widget-content">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="widget-title">
                                                <h4>Services</h4>
                                            </div>
                                            <ul className="links">
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="room-grid">Our Rooms</Link></li>
                                                <li><Link to="/about">About Hotera</Link></li>
                                                <li><Link to="/contactUs">Contact</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="widget-title">
                                                <h4>Contact</h4>
                                            </div>
                                            <ul className="info">
                                                <li className="address">GT Rd, opp. raymond showroom, Subhash Nagar, Mughalsarai, Mughalsarai Railway Settlement, Uttar Pradesh 232101</li>
                                                <li className="phone"><Link to="tel:+917565000621">+91 75650 00621</Link></li>
                                                <li className="email"><Link to="mailto:pskinnhotel@gmail.com">pskinnhotel@gmail.com</Link></li>
                                                <li className="social-links">
                                                    <Link to="#"><span className="fab fa-facebook-f"></span></Link>
                                                    <Link to="#"><span className="fab fa-twitter"></span></Link>
                                                    <Link to="#"><span className="fab fa-vimeo-v"></span></Link>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="inner clearfix">
                        <div className="copyright">&copy; 2024 PSK Hotels - All Right Reserved</div>
                        <a href="terms-and-conditions">Terms of Service</a> &ensp;|&ensp; <a href="privacy-policy">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer