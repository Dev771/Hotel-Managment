import { Link } from 'react-router-dom';
/*import navLogo from '../../assets/images/nav-logo.png';*/

const logo = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734769285/PSK%20Hotels/logo/LOGO_szpyzj.png";

const Navbar = () => {
    
    const handleToggle = () => {
        document.getElementsByTagName("body")[0].classList.add("mobile-menu-visible");
        
        // Get the main menu element
        const mainMenu = document.querySelector('.main-header .nav-outer .main-menu');

        // Check if mainMenu exists and has innerHTML
        if (mainMenu && mainMenu.innerHTML) {
        const mobileMenuContent = mainMenu.innerHTML;

        // Get the mobile menu element
        const mobileMenu = document.querySelector('.mobile-menu .menu-box .menu-outer');

        // Check if mobileMenu exists before assigning content
        if (mobileMenu) {
            mobileMenu.innerHTML = mobileMenuContent;
        } else {
            console.error('Mobile menu element not found');
        }
        } else {
            console.error('Main menu element not found or empty');
        }
        // $('body').addClass('mobile-menu-visible');
    }

    const handleClose = () => {
        document.getElementsByTagName("body")[0].classList.remove("mobile-menu-visible");
    }

    return (
        <header className="main-header header-style-one">
            <div className="header-upper">
                <div className="inner-container clearfix">
                    <div className="logo-box">
                        <div className="logo"><Link to="/" title="PSK Hotels"><img src={logo} alt="Hotera - Hotel and Restaurant HTML Template" title="PSK Hotels" /></Link></div>
                    </div>
                    <div className="nav-outer clearfix">
                        <div className="mobile-nav-toggler" onClick={handleToggle}><span className="icon flaticon-menu-2"></span></div>

                        <nav className={`main-menu navbar-expand-md navbar-light`}>
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
                                <li><Link to="tel:+917565000621"><span className="icon flaticon-smartphone-2"></span><span className="txt">+91 7565000621</span></Link></li>
                            </ul>
                        </div>
                        <div className="link-box">
                            <Link target='_blank' to="https://www.booking.com/hotel/in/psk-inn.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AuiRlrsGwAIB0gIkZjQ0MWU1NGYtNzViNS00ZjRjLWFkMmUtYTJmMTY5NjEzYzQ32AIF4AIB&sid=5601670c944b8d6d0f5c74b336cfc799&dest_id=9706319&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1734707448&srpvid=1e6f6aba70300339&type=total&ucfs=1&" className="theme-btn btn-style-one"><span className="btn-title">Book Your Stay</span></Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className={`mobile-menu`}>
                <div className="close-btn" onClick={handleClose}><span className="icon flaticon-targeting-cross"></span></div>
                <div className="menu-backdrop"></div>
                <div className="nav-logo"><Link to="/"><img src="images/nav-logo.png" alt="" title="" /></Link></div>
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