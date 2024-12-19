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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14429.483192871516!2d83.09030294317385!3d25.291743211999872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3b28c8fe633f%3A0x3707bb8593724275!2sHotel%20Psk%20Inn%20A%20Boutique%20Hotel!5e0!3m2!1sen!2sin!4v1734635272229!5m2!1sen!2sin" width="600" height="450" style={{ border:0, width: '100%', height: '80vh' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </div>
    )
}

export default ContactUs