/*import bannerImage1 from '../../assets/images/background/banner-image-1.jpg';
import signatureImage1 from '../../assets/images/resource/signature-1.png';
import featureImage12 from '../../assets/images/resource/featured-image-12.jpg';
import featureImage13 from '../../assets/images/resource/featured-image-13.jpg';
import featureImage14 from '../../assets/images/resource/featured-image-14.jpg';
import featureImage18 from '../../assets/images/resource/featured-image-18.jpg';
import featureImage19 from '../../assets/images/resource/featured-image-19.jpg';
import featureImage20 from '../../assets/images/resource/featured-image-20.jpg';*/
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
                                    Situated within 6.1 km of Kashi Vishwanath Temple and 6.5 km of Dasaswamedh Ghat, HOTEL PSK INN provides rooms in Mughal Sarāi. This 3-star hotel offers room service, a 24-hour front desk and free WiFi. The property is allergy-free and is located 5.9 km from Manikarnika Ghat.
                                    At the hotel each room includes air conditioning, a desk, a flat-screen TV, a private bathroom, bed linen, towels and a terrace with a city view. All units include a safety deposit box.
                                    An à la carte breakfast is available daily at HOTEL PSK INN. At the accommodation you will find a restaurant serving Chinese and Indian cuisine. Vegetarian, dairy-free and halal options can also be requested.
                                    Kedar Ghat is 7.8 km from HOTEL PSK INN, while Harishchandra Ghat is 7.9 km away. Lal Bahadur Shastri International Airport is 30 km from the property.</div>
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
            {/*<section className="history-section">
                <span className="dotted-pattern dotted-pattern-6"></span>
                <span className="tri-pattern tri-pattern-5"></span>
                <div className="circles">
                    <div className="c-1"></div>
                    <div className="c-2"></div>
                </div>
                <div className="auto-container">
                    <div className="sec-title centered">
                        <h2>Our History</h2>
                        <div className="lower-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</div>
                    </div>
                    <div className="h-container">
                        <div className="history-block">
                            <div className="row clearfix">
                                <div className="content-col col-lg-6 col-md-6 col-sm-12">
                                    <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="image-box">
                                            <div className="image"><img src={featureImage18} alt="" /></div>
                                        </div>
                                        <div className="lower-box">
                                            <h3>The Beginning</h3>
                                            <div className="text">Sint occaecat cuidatat non proident sunt in culpa qui officia mollit anim id est laborum perspiciatis.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="empty-col col-lg-6 col-md-6 col-sm-12">

                                </div>
                            </div>
                        </div>
                        <div className="history-block alternate">
                            <div className="row clearfix">
                                <div className="content-col col-lg-6 col-md-6 col-sm-12">
                                    <div className="inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="image-box">
                                            <div className="image"><img src={featureImage19} alt="" /></div>
                                        </div>
                                        <div className="lower-box">
                                            <h3>2002 The Beginning</h3>
                                            <div className="text">Sint occaecat cuidatat non proident sunt in culpa qui officia mollit anim id est laborum perspiciatis.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="empty-col col-lg-6 col-md-6 col-sm-12">
                                </div>
                            </div>
                        </div>
                        <div className="history-block">
                            <div className="row clearfix">
                                <div className="content-col col-lg-6 col-md-6 col-sm-12">
                                    <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="image-box">
                                            <div className="image"><img src={featureImage20} alt="" /></div>
                                        </div>
                                        <div className="lower-box">
                                            <h3>2011 The Mid-Term</h3>
                                            <div className="text">Sint occaecat cuidatat non proident sunt in culpa qui officia mollit anim id est laborum perspiciatis.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="empty-col col-lg-6 col-md-6 col-sm-12">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>*/}
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