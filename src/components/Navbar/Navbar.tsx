import { Link } from 'react-router-dom';
import navLogo from '../../assets/images/nav-logo.png';

const Navbar = () => {
  return (
    <header className="main-header header-style-one">
        <div className="header-upper">
            <div className="inner-container clearfix">
                <div className="logo-box">
                    <div className="logo"><Link to="index.html" title="Hotera - Hotel and Restaurant HTML Template"><img src={navLogo} alt="Hotera - Hotel and Restaurant HTML Template" title="Hotera - Hotel and Restaurant HTML Template" /></Link></div>
                </div>
                <div className="nav-outer clearfix">
                    <div className="mobile-nav-toggler"><span className="icon flaticon-menu-2"></span><span className="txt">Menu</span></div>

                    <nav className="main-menu navbar-expand-md navbar-light">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li className="current"><Link to="/">Home</Link>
                                </li>
                                <li  className=""><Link to="/room-grid">Rooms</Link>
                                </li>
                                <li><Link to="/about">About Us</Link></li>
                                <li  className=""><Link to="/gallery">Gallery</Link>
                                </li>
                                <li><Link to="/contactUs">Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="other-links clearfix">
                    <div className="info">
                        <ul className="clearfix">
                            <li><Link to="te:+502542163754"><span className="icon flaticon-smartphone-2"></span><span className="txt">+91 7565000621</span></Link></li>
                        </ul>
                    </div>
                    <div className="link-box">
                        <Link to="/room-grid" className="theme-btn btn-style-one"><span className="btn-title">Book Your Stay</span></Link>
                    </div>
                </div>

            </div>
        </div>
        <div className="mobile-menu">
            <div className="close-btn"><span className="icon flaticon-targeting-cross"></span></div>
            <div className="menu-backdrop"></div>
            <div className="nav-logo"><Link to="index.html"><img src="images/nav-logo.png" alt="" title="" /></Link></div>
            <nav className="menu-box">
                <div className="menu-outer"></div>
            </nav>
            <div className="nav-bottom">
                <div className="copyright">PSK Hotels &copy;  2024 All Right Reserved</div>
                <div className="social-links">
                    <ul className="clearfix">
                        <li><Link to="#"><span className="fab fa-facebook-f"></span></Link></li>
                        <li><Link to="#"><span className="fab fa-twitter"></span></Link></li>
                        <li><Link to="#"><span className="fab fa-vimeo-v"></span></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar