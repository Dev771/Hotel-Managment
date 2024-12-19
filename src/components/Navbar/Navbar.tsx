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
                                    {/* <ul>
                                        <li><Link to="index.html">Hotel Beach</Link></li>
                                        <li><Link to="index-2.html">City Hotel</Link></li>
                                        <li><Link to="index-3.html">Mountain Hotel</Link></li>
                                        <li><Link to="index-4.html">Luxury Hotel</Link></li>
                                        <li><Link to="index-5.html">Resort Hotel</Link></li>
                                        <li className="dropdown"><Link to="index.html">Header Styles</Link>
                                            <ul>
                                                <li><Link to="index.html">Header Type 01</Link></li>
                                                <li><Link to="index-2.html">Header Type 02</Link></li>
                                                <li><Link to="index-3.html">Header Type 03</Link></li>
                                                <li><Link to="index-4.html">Header Type 04</Link></li>
                                                <li><Link to="index-5.html">Header Type 05</Link></li>
                                            </ul>
                                        </li>
                                    </ul> */}
                                </li>
                                <li  className=""><Link to="/room-single">Rooms</Link>
                                    {/* <ul>
                                        <li><Link to="rooms-grid.html">Rooms Grid View</Link></li>
                                        <li><Link to="rooms-list.html">Rooms List View</Link></li>
                                        <li><Link to="rooms-gallery.html">Rooms Gallery</Link></li>
                                        <li><Link to="/room-single">Room Single</Link></li>
                                    </ul> */}
                                </li>
                                <li><Link to="/about">About Us</Link></li>
                                <li  className=""><Link to="/gallery">Gallery</Link>
                                    {/* <ul>
                                        <li><Link to="team.html">Our Staff</Link></li>
                                        <li className="dropdown"><Link to="packages.html">Packages</Link>
                                            <ul>
                                                <li><Link to="packages.html">All Packages</Link></li>
                                                <li><Link to="package-single.html">Package Single</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><Link to="events.html">Events</Link>
                                            <ul>
                                                <li><Link to="events.html">All Events</Link></li>
                                                <li><Link to="event-single.html">Event Single</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><Link to="/gallery">Gallery</Link>
                                            <ul>
                                                <li><Link to="/gallery">Gallery Default</Link></li>
                                                <li><Link to="/gallery-masonry">Gallery Masonry</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="restaurant.html">Restaurant</Link></li>
                                        <li><Link to="spa.html">Spa & Wellness</Link></li>
                                    </ul> */}
                                </li>
                                {/* <li  className="dropdown"><Link to="blog-grid.html">News</Link> */}
                                    {/* <ul>
                                        <li><Link to="blog.html">Blog Sidebar</Link></li>
                                        <li><Link to="blog-grid.html">Blog 03 Column</Link></li>
                                        <li><Link to="blog-single.html">Blog Single</Link></li>
                                    </ul> */}
                                {/* </li> */}
                                <li><Link to="/contactUs">Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="other-links clearfix">
                    <div className="info">
                        <ul className="clearfix">
                           {/* <li><Link to="#"><span className="icon flaticon-padlock"></span><span className="txt">Login</span></Link></li>*/}
                            <li><Link to="te:+502542163754"><span className="icon flaticon-smartphone-2"></span><span className="txt">+91 7565000621</span></Link></li>
                        </ul>
                    </div>
                    <div className="link-box">
                        <Link to="/room-single" className="theme-btn btn-style-one"><span className="btn-title">Book Your Stay</span></Link>
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
                <div className="copyright">Hotera  &copy;  2020 All Right Reserved</div>
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