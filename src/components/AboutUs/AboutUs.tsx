import bannerImage1 from '../../assets/images/background/banner-image-1.jpg';
import signatureImage1 from '../../assets/images/resource/signature-1.png';
import featureImage12 from '../../assets/images/resource/featured-image-12.jpg';
import featureImage13 from '../../assets/images/resource/featured-image-13.jpg';
import featureImage14 from '../../assets/images/resource/featured-image-14.jpg';
import featureImage18 from '../../assets/images/resource/featured-image-18.jpg';
import featureImage19 from '../../assets/images/resource/featured-image-19.jpg';
import featureImage20 from '../../assets/images/resource/featured-image-20.jpg';
import testiThumb1 from '../../assets/images/resource/testi-thumb-1.jpg';
import testiThumb2 from '../../assets/images/resource/testi-thumb-2.jpg';
import testiThumb3 from '../../assets/images/resource/testi-thumb-3.jpg';

const AboutUs = () => {
    return (
        <div className='page-wrapper'>
            <section className="page-banner">
                <div className="image-layer" style={{ backgroundImage: `url(${bannerImage1})` }}></div>
                <div className="banner-bottom-pattern"></div>

                <div className="banner-inner">
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            <h1>About Us</h1>
                            <div className="page-nav">
                                <ul className="bread-crumb clearfix">
                                    <li><a href="index.html">Home</a></li>
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
                                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                <ul className="features">
                                        <li>Enim ad minim veniam quis nostrud.</li>
                                        <li>Minim veniam quis nostrud.</li>
                                    </ul>
                                <div className="signature"><img src={signatureImage1} alt="" title="" /></div>
                            </div>
                        </div>
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">
                                <span className="dotted-pattern dotted-pattern-10"></span>
                                <div className="image-box clearfix">
                                    <figure className="image wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms"><img src={featureImage12} alt="" title="" /></figure>
                                    <figure className="image wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms"><img src={featureImage13} alt="" title="" /></figure>
                                    <figure className="image wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms"><img src={featureImage14} alt="" title="" /></figure>
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
                        <div className="lower-text">Lorem ipsum dolor sit consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua. enim ad minim veniam quis nostrud exercitation.</div>
                    </div>
                    <div className="facts-box">
                        <div className="row clearfix">
                            <div className="fact-block col-lg-4 col-md-6 col-sm-12">
                                <div className="fact-inner">
                                    <div className="fact-count wow zoomInStable" data-wow-delay="0ms" data-wow-duration="2000ms"><div className="count-box counted"><span className="count-text" data-stop="25" data-speed="2000">25</span>+</div></div>
                                    <h4>Years Exp.</h4>
                                    <div className="text">Excepteur sint occaecat cupidatat.</div>
                                </div>
                            </div>
                            <div className="fact-block col-lg-4 col-md-6 col-sm-12">
                                <div className="fact-inner">
                                    <div className="fact-count wow zoomInStable" data-wow-delay="300ms" data-wow-duration="2000ms"><div className="count-box counted"><span className="count-text" data-stop="712" data-speed="5000">712</span></div></div>
                                    <h4>Project Done</h4>
                                    <div className="text">Excepteur sint occaecat cupidatat.</div>
                                </div>
                            </div>
                            <div className="fact-block col-lg-4 col-md-6 col-sm-12">
                                <div className="fact-inner">
                                    <div className="fact-count wow zoomInStable" data-wow-delay="600ms" data-wow-duration="2000ms"><div className="count-box counted"><span className="count-text" data-stop="310" data-speed="4000">310</span></div></div>
                                    <h4>Awards Win</h4>
                                    <div className="text">Excepteur sint occaecat cupidatat.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="history-section">
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
            </section>
            <section className="testimonials-section">
                <div className="circles-two">
                    <div className="c-1"></div>
                    <div className="c-2"></div>
                </div>
                <div className="auto-container">
                    <div className="sec-title centered">
                        <h2>What People Say?</h2>
                        <div className="lower-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</div>
                    </div>

                    <div className="carousel-box">
                        <div className="testimonial-carousel owl-theme owl-carousel">
                            <div className="testimonial-block">
                                <div className="inner">
                                    <div className="content-box">
                                        <div className="content">
                                            <div className="quote-icon"><span className="flaticon-quote-1"></span></div>
                                            <div className="text">Lorem ipsum dolor sit amet consectetur adipis elit eiusmod tempor incidunt sed labore dolore magna.</div>
                                        </div>
                                    </div>
                                    
                                    <div className="info">
                                        <div className="image"><img src={testiThumb1} alt="" /></div>
                                        <div className="name">Mark Adams</div>
                                        <div className="designation">Designer</div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-block">
                                <div className="inner">
                                    <div className="content-box">
                                        <div className="content">
                                            <div className="quote-icon"><span className="flaticon-quote-1"></span></div>
                                            <div className="text">Lorem ipsum dolor sit amet consectetur adipis elit eiusmod tempor incidunt sed labore dolore magna.</div>
                                        </div>
                                    </div>
                                    
                                    <div className="info">
                                        <div className="image"><img src={testiThumb2} alt="" /></div>
                                        <div className="name">Fiona Edwards</div>
                                        <div className="designation">Developer</div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-block">
                                <div className="inner">
                                    <div className="content-box">
                                        <div className="content">
                                            <div className="quote-icon"><span className="flaticon-quote-1"></span></div>
                                            <div className="text">Lorem ipsum dolor sit amet consectetur adipis elit eiusmod tempor incidunt sed labore dolore magna.</div>
                                        </div>
                                    </div>
                                    
                                    <div className="info">
                                        <div className="image"><img src={testiThumb3} alt="" /></div>
                                        <div className="name">Dominic Allen</div>
                                        <div className="designation">Designer</div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-block">
                                <div className="inner">
                                    <div className="content-box">
                                        <div className="content">
                                            <div className="quote-icon"><span className="flaticon-quote-1"></span></div>
                                            <div className="text">Lorem ipsum dolor sit amet consectetur adipis elit eiusmod tempor incidunt sed labore dolore magna.</div>
                                        </div>
                                    </div>
                                    
                                    <div className="info">
                                        <div className="image"><img src={testiThumb1} alt="" /></div>
                                        <div className="name">Mark Adams</div>
                                        <div className="designation">Designer</div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-block">
                                <div className="inner">
                                    <div className="content-box">
                                        <div className="content">
                                            <div className="quote-icon"><span className="flaticon-quote-1"></span></div>
                                            <div className="text">Lorem ipsum dolor sit amet consectetur adipis elit eiusmod tempor incidunt sed labore dolore magna.</div>
                                        </div>
                                    </div>
                                    
                                    <div className="info">
                                        <div className="image"><img src={testiThumb2} alt="" /></div>
                                        <div className="name">Fiona Edwards</div>
                                        <div className="designation">Developer</div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-block">
                                <div className="inner">
                                    <div className="content-box">
                                        <div className="content">
                                            <div className="quote-icon"><span className="flaticon-quote-1"></span></div>
                                            <div className="text">Lorem ipsum dolor sit amet consectetur adipis elit eiusmod tempor incidunt sed labore dolore magna.</div>
                                        </div>
                                    </div>
                                    
                                    <div className="info">
                                        <div className="image"><img src={testiThumb3} alt="" /></div>
                                        <div className="name">Dominic Allen</div>
                                        <div className="designation">Designer</div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-block">
                                <div className="inner">
                                    <div className="content-box">
                                        <div className="content">
                                            <div className="quote-icon"><span className="flaticon-quote-1"></span></div>
                                            <div className="text">Lorem ipsum dolor sit amet consectetur adipis elit eiusmod tempor incidunt sed labore dolore magna.</div>
                                        </div>
                                    </div>
                                    
                                    <div className="info">
                                        <div className="image"><img src={testiThumb1} alt="" /></div>
                                        <div className="name">Mark Adams</div>
                                        <div className="designation">Designer</div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-block">
                                <div className="inner">
                                    <div className="content-box">
                                        <div className="content">
                                            <div className="quote-icon"><span className="flaticon-quote-1"></span></div>
                                            <div className="text">Lorem ipsum dolor sit amet consectetur adipis elit eiusmod tempor incidunt sed labore dolore magna.</div>
                                        </div>
                                    </div>
                                    
                                    <div className="info">
                                        <div className="image"><img src={testiThumb2} alt="" /></div>
                                        <div className="name">Fiona Edwards</div>
                                        <div className="designation">Developer</div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-block">
                                <div className="inner">
                                    <div className="content-box">
                                        <div className="content">
                                            <div className="quote-icon"><span className="flaticon-quote-1"></span></div>
                                            <div className="text">Lorem ipsum dolor sit amet consectetur adipis elit eiusmod tempor incidunt sed labore dolore magna.</div>
                                        </div>
                                    </div>
                                    
                                    <div className="info">
                                        <div className="image"><img src={testiThumb3} alt="" /></div>
                                        <div className="name">Dominic Allen</div>
                                        <div className="designation">Designer</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs