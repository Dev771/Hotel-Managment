import bannerImage4 from '../../assets/images/background/banner-image-4.jpg';

const ContactUs = () => {
    return (
        <div>
            <section className="page-banner">
                <div className="image-layer" style={{backgroundImage: `url(${bannerImage4})`}}></div>
                <div className="banner-bottom-pattern"></div>

                <div className="banner-inner">
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            <h1>Stay Touch with PSK Hotels</h1>
                            <div className="page-nav">
                                <ul className="bread-crumb clearfix">
                                    <li><a href="index.html">Home</a></li>
                                    <li className="active">Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-section-two">
                <div className="auto-container clearfix">
                    <div className="row clearfix">

                        <div className="info-col col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="u-text"></div>

                                <div className="info">
                                    <div className="info-block">
                                        <div className="block-inner">
                                            <div className="icon-box wow zoomInStable" data-wow-delay="0ms" data-wow-duration="2000ms"><span className="flaticon-placeholder-1"></span></div>
                                            <h4>Address</h4>
                                            <div className="text">GT Rd, opp. raymond showroom, Subhash Nagar, Mughalsarai, Mughalsarai Railway Settlement, Uttar Pradesh 232101</div>
                                        </div>
                                    </div>
                                    <div className="info-block">
                                        <div className="block-inner">
                                            <div className="icon-box wow zoomInStable" data-wow-delay="300ms" data-wow-duration="2000ms"><span className="flaticon-technology-2"></span></div>
                                            <h4>Phone Number</h4>
                                            <div className="text">
                                                <a href="tel:(+48)564-334-21-22-34">+91 75650 00621</a> <br />
                                                <a href="tel:(+48)564-334-21-25">+91 05412-352450</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info-block">
                                        <div className="block-inner">
                                            <div className="icon-box wow zoomInStable" data-wow-delay="600ms" data-wow-duration="2000ms"><span className="flaticon-email-1"></span></div>
                                            <h4>Email Address</h4>
                                            <div className="text">
                                                <a href="mailto:info@hotera.com">pskinnhotel@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-col col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="form-box default-form contact-form-two wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <h3>Have Any Question?</h3>
                                    <div className="text">Please complete the details below and then click on Submit and we’ll be in contact</div>
                                    <form method="post" action="sendemail.php" id="contact-form">
                                        <div className="form-group">
                                            <div className="field-inner">
                                                <input type="text" name="username" value="" placeholder="First name" required />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="field-inner">
                                                <input type="text" name="lastname" value="" placeholder="Last name" required />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="field-inner">
                                                <input type="email" name="email" value="" placeholder="Email" required />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="field-inner">
                                                <input type="text" name="phone" value="" placeholder="Phone" required />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="field-inner">
                                                <textarea name="message" placeholder="Message" required></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button className="theme-btn btn-style-one"><span className="btn-title">Send Message</span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="map-section">
                <div className="map-layer">
                    <div className="map-canvas"
                        data-zoom="12"
                        data-lat="-37.817085"
                        data-lng="144.955631"
                        data-type="roadmap"
                        data-hue="#ffc400"
                        data-title="Singapore"
                        data-icon-path="images/icons/map-marker.png"
                        data-content="Singapore VIC 3000, USA<br><a href='mailto:info@youremail.com'>info@youremail.com</a>">
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs