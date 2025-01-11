import { Link } from 'react-router-dom';
import Carasoul from '../Carasoul/Carasoul';

const bannerimg = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734698514/PSK%20Hotels/Reception/1920_X_620_ucm457.jpg";
const img1 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734701834/PSK%20Hotels/About%20US/330_X_355_umjw4o.jpg";
const img2 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734701833/PSK%20Hotels/About%20US/280_X_310_uplszz.jpg";
const img3 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734701832/PSK%20Hotels/About%20US/200_X_200_igfnyj.jpg";

const AboutUs = () => {
    return (
        <div className='page-wrapper'>
            <section className="page-banner">
                <div className="image-layer" style={{ backgroundImage: `url(${bannerimg})` }}></div>
                <div className="banner-bottom-pattern"></div>

                <div className="banner-inner">
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            <h1>About Us</h1>
                            <div className="page-nav">
                                <ul className="bread-crumb clearfix">
                                    <li><Link to="/">Home</Link></li>
                                    <li className="active">About Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="featured-section-four about-page">
                <span className="dotted-pattern dotted-pattern-11"></span>
                <div className="circles-two">
                    <div className="c-1"></div>
                    <div className="c-2"></div>
                </div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="text-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="sec-title">
                                    <h2>Relax in <br />Our Luxury Hotel</h2>
                                </div>
                                <div className="text">
                                    A perfect venue for those who crave luxury at a decent price. A new gemstone in the crown of the city of Mughalsarai, the hotel is studded with ultra-modern facilities. Nestled at the epicentre of the pious Mughalsarai city, the hotel is just 30 mins away from Kashi Vishwanath temple one of the twelve Jyotirlingas, the holiest of Shiva Temples. Land up to feel the spirit of Subah-e-Banaras, a mystic blend of nature’s grandeur and human existence, Rising Sun, Golden Ganges and glittering Ghats with enchanting Mantras and Meditation at Dassawamed ghat, 35 minutes far from our hotel.
                                </div>
                                <div className="link-box">
                                    <a href="tel:+917565000621" className="theme-btn btn-style-one"><span className="btn-title">Let's Connect</span></a>
                                </div>
                                {/*<div className="signature"><img src={signatureImage1} alt="" title="" /></div>*/}
                            </div>
                        </div>
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">
                                <span className="dotted-pattern dotted-pattern-10"></span>
                                <div className="image-box clearfix">
                                    <figure className="image wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms"><img src={img1} alt="" title="" /></figure>
                                    <figure className="image wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms"><img src={img2} alt="" title="" /></figure>
                                    <figure className="image wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms"><img src={img3} alt="" title="" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="facts-section-two alternate">
                <div className="circles">
                    <div className="c-1"></div>
                    <div className="c-2"></div>
                </div>
                <div className="auto-container">
                    <div className="sec-title">
                        <h2>Always Ready <br />to Take Challange</h2>
                        <div className="lower-text">We are always there to host you.</div>
                    </div>
                    <div className="facts-box">
                        <div className="row clearfix">
                            <div className="fact-block col-lg-4 col-md-6 col-sm-12">
                                <div className="fact-inner">
                                    <div className="fact-count wow zoomInStable" data-wow-delay="0ms" data-wow-duration="2000ms"><div className="count-box counted"><span className="count-text" data-stop="25" data-speed="2000">2</span>+</div></div>
                                    <h4>Years Exp.</h4>
                                    <div className="text"></div>
                                </div>
                            </div>
                            <div className="fact-block col-lg-4 col-md-6 col-sm-12">
                                <div className="fact-inner">
                                    <div className="fact-count wow zoomInStable" data-wow-delay="300ms" data-wow-duration="2000ms"><div className="count-box counted"><span className="count-text" data-stop="712" data-speed="5000">10000</span>+</div></div>
                                    <h4>Happy Guest</h4>
                                    <div className="text"></div>
                                </div>
                            </div>
                            <div className="fact-block col-lg-4 col-md-6 col-sm-12">
                                <div className="fact-inner">
                                    <div className="fact-count wow zoomInStable" data-wow-delay="600ms" data-wow-duration="2000ms"><div className="count-box counted"><span className="count-text" data-stop="310" data-speed="4000">1</span></div></div>
                                    <h4>Awards Win</h4>
                                    <div className="text"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonials-section">
                <div className="circles-two">
                    <div className="c-1"></div>
                    <div className="c-2"></div>
                </div>
                <div className="auto-container">
                    <div className="sec-title centered">
                        <h2>What People Say?</h2>
                        <div className="lower-text"></div>
                    </div>
                    <Carasoul />
                </div>
            </section>
        </div>
    )
}

export default AboutUs