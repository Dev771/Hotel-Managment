import { Link } from 'react-router-dom';

/*import mainSlider from '../../assets/images/main-slider/1.jpg';
import featuredImage0 from '../../assets/images/resource/featured-image-0.jpg';
import featuredImage1 from '../../assets/images/resource/featured-image-1.jpg';
import featuredImage2 from '../../assets/images/resource/featured-image-2.jpg';
import featuredImage3 from '../../assets/images/resource/featured-image-3.jpg';
import featuredImage4 from '../../assets/images/resource/featured-image-4.jpg';
import featuredImage5 from '../../assets/images/resource/featured-image-5.jpg';
{/*import gallery1 from '../../assets/images/gallery/1.jpg';
import gallery2 from '../../assets/images/gallery/2.jpg';
import gallery3 from '../../assets/images/gallery/3.jpg';
import gallery4 from '../../assets/images/gallery/4.jpg';
import backGroundImage1 from '../../assets/images/background/image-1.jpg';
import ofThumb1 from '../../assets/images/resource/of-thumb-1.jpg';*/
import DateSelectComp from '../DateSelectComp/DateSelectComp';
import Carasoul from '../Carasoul/Carasoul';

const outside = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734690370/PSK%20Hotels/Home%20Page/Outside_fvazdj.jpg";
const mainimage = "https://res.cloudinary.com/dxzp2cqfc/video/upload/v1734870001/PSK%20Hotels/Home%20Page/1920_X_820_NEW_q6vcz5.mp4";
const backimg = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734690973/PSK%20Hotels/Home%20Page/a_view_nn6pm6.jpg";
const dr = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734683519/PSK%20Hotels/Delux%20Room/A3__3235_updated_rmikhx.jpg";
const pr = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734683585/PSK%20Hotels/Premium%20Room/A3__3224_updated_uxdaon.jpg";
const fr = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734683558/PSK%20Hotels/Family%20Room/A3__3172_updated_z9vn3u.jpg";
const fac250 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734697227/PSK%20Hotels/Home%20Page/250_X_250_dizvac.jpg";
const fac380 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734697227/PSK%20Hotels/Home%20Page/380_X_450_t4k1ca.jpg";
const fac320 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734697228/PSK%20Hotels/Home%20Page/320_X_240_mdygle.jpg";
const pearl = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734697490/PSK%20Hotels/Home%20Page/A3__3376_trnqer.jpg";
const shipre = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734697502/PSK%20Hotels/Home%20Page/A3__3439_pvztxy.jpg";

const HomePage = () => {


    return (
        <div className='page-wrapper'>
            <section className="banner-section banner-one" style={{ height: '100vh' }}>
                <div className="banner-bottom-pattern"></div>
                <div className="banner-carousel owl-theme">
                    <div className="slide-item">
                        <div className="image-layer" >
                            <video className="video-background" autoPlay loop muted>
                                <source src={mainimage} type="video/mp4" />
                            </video>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <div className="content">
                                    <div className="inner">
                                        <h1>Homely Stay <br />At PSK Hotels</h1>
                                        <div className="text"></div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-section">
                <div className="pattern-bottom"></div>
                <span className="dotted-pattern dotted-pattern-1"></span>
                <span className="tri-pattern tri-pattern-1"></span>
                <div className="auto-container">
                    <div className="filters-section">
                        <div className="form-box default-form filter-form wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <DateSelectComp />
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="text-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="sec-title">
                                    <h2>Quality <br />Holidays With Us</h2>
                                </div>
                                <div className="text">Enjoy the stay at our luxury property.</div>
                                <div className="link-box">
                                    <Link to="/about" className="theme-btn btn-style-one"><span className="btn-title">Read More</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image-box">
                                    <span className="dotted-pattern dotted-pattern-2"></span>
                                    <figure className="image"><img src={outside} alt="" title="" /></figure>
                                    <div className="cap"><span className="txt">2 <br />Years <br />of <br />Exp.</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="facts-section">
                <span className="dotted-pattern dotted-pattern-3"></span>
                {/* <span className="tri-pattern tri-pattern-1"></span> */}
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="title-column col-xl-7 col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="sec-title">
                                    <h2>Always Ready <br />to Host You</h2>
                                    <div className="lower-text"></div>
                                </div>
                            </div>
                        </div>
                        <div className="facts-column col-xl-5 col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="facts">
                                    <div className="fact-block">
                                        <div className="fact-inner">
                                            <div className="fact-count wow zoomInStable" data-wow-delay="0ms" data-wow-duration="2000ms"><div className="count-box"><span className="count-text" data-stop="25" data-speed="2000">2</span>+</div></div>
                                            <h4>Years Exp.</h4>
                                            <div className="text"></div>
                                        </div>
                                    </div>
                                    <div className="fact-block">
                                        <div className="fact-inner">
                                            <div className="fact-count wow zoomInStable" data-wow-delay="0ms" data-wow-duration="2000ms"><div className="count-box"><span className="count-text" data-stop="712" data-speed="5000">10000</span></div></div>
                                            <h4>Project Done</h4>
                                            <div className="text"></div>
                                        </div>
                                    </div>
                                    <div className="fact-block">
                                        <div className="fact-inner">
                                            <div className="fact-count wow zoomInStable" data-wow-delay="0ms" data-wow-duration="2000ms"><div className="count-box"><span className="count-text" data-stop="310" data-speed="4000">1</span></div></div>
                                            <h4>Awards Win</h4>
                                            <div className="text"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="dashed-separator"><div className="auto-container"><span></span></div></div>

            <section className="rooms-section-one">
                <div className="outer-container">
                    <div className="auto-container">
                        <div className="sec-title centered">
                            <h2>Room & Suites</h2>
                            <div className="lower-text">Enjoy your stay at our Hotel in various different rooms ans suites</div>
                        </div>
                    </div>

                    <div className="row clearfix">
                        <div className="column col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="room-block-one height-one wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image-layer" style={{backgroundImage: `url(${dr})`}}></div>
                                        <figure className="image"><img src={""} alt="" title="" /></figure>
                                    </div>
                                    <div className="cap-box">
                                        <div className="cap-inner">
                                            <div className="price">From <span>₹5000.00</span></div>
                                            <h5>Delux Room</h5>
                                        </div>
                                    </div>
                                    <div className="hover-box">
                                        <div className="hover-inner">
                                            <h4>Delux Room</h4>
                                            <div className="pricing clearfix">
                                                <div className="price">From <span>₹5000.00</span></div>
                                                <div className="rating">
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                            </div>

                                            <div className="text"></div>
                                            <div className="link-box"><a href="/room-single/0" className="theme-btn btn-style-one"><span className="btn-title">Check Availability</span></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="room-block-one height-one wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image-layer" style={{backgroundImage: `url(${pr})`}}></div>
                                        <figure className="image"><img src={""} alt="" title="" /></figure>
                                    </div>
                                    <div className="cap-box">
                                        <div className="cap-inner">
                                            <div className="price">From <span>₹7000.00</span></div>
                                            <h5>Premium Suite Room</h5>
                                        </div>
                                    </div>
                                    <div className="hover-box">
                                        <div className="hover-inner">
                                            <h4>Premium Suite Room</h4>
                                            <div className="pricing clearfix">
                                                <div className="price">From <span>₹7000.00</span></div>
                                                <div className="rating">
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                            </div>
                                            <div className="text"></div>
                                            <div className="link-box"><a href="/room-single/1" className="theme-btn btn-style-one"><span className="btn-title">Check Availability</span></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="room-block-one height-one wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image-layer" style={{ backgroundImage: `url(${fr})` }}></div>
                                        <figure className="image"><img src={""} alt="" title="" /></figure>
                                    </div>
                                    <div className="cap-box">
                                        <div className="cap-inner">
                                            <div className="price">From <span>₹8000.00</span></div>
                                            <h5>Family Suite Room</h5>
                                        </div>
                                    </div>
                                    <div className="hover-box">
                                        <div className="hover-inner">
                                            <h4>Family Suite Room</h4>
                                            <div className="pricing clearfix">
                                                <div className="price">From <span>₹8000.00</span></div>
                                                <div className="rating">
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                            </div>

                                            <div className="text"></div>
                                            <div className="link-box"><a href="/room-single/2" className="theme-btn btn-style-one"><span className="btn-title">Check Availability</span></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="offers-section-one">
                <div className="auto-container">
                    <div className="upper-box clearfix">
                        <div className="sec-title">
                            <h2>PSK Hotels <br />Facilities</h2>
                            <div className="lower-text"></div>
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="offers-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="offer-block">
                                    <div className="offer-inner">
                                        <div className="fact-thumb wow zoomInStable" data-wow-delay="0ms" data-wow-duration="1500ms"><div className="image"><img src={pearl} alt="" title="" /></div><span> <br /></span></div>
                                        <div className="price"><span></span></div>
                                        <h4>Banquet Hall - Pearl</h4>
                                        <div className="text">We are excited to invite guests to host unforgettable events at our exquisite Banquet Pearl, where elegance meets exceptional service.</div>
                                        <Link to={`/aboutus`} className="over-link"></Link>
                                    </div>
                                </div>
                                <div className="offer-block">
                                    <div className="offer-inner">
                                        <div className="fact-thumb wow zoomInStable" data-wow-delay="300ms" data-wow-duration="1500ms"><div className="image"><img src={shipre} alt="" title="" /></div><span> <br /></span></div>
                                        <div className="price"><span></span></div>
                                        <h4>Banquet Hall - Shipre</h4>
                                        <div className="text">We are excited to invite guests to host unforgettable events at our exquisite Banquet Shipre, where elegance meets exceptional service.</div>
                                        <Link to={`/gallery?tab=Banquet Hall - Shipre`} className="over-link"></Link>
                                    </div>
                                </div>
                                <div className="offer-block">
                                    <div className="offer-inner">
                                        <div className="fact-thumb wow zoomInStable" data-wow-delay="600ms" data-wow-duration="1500ms"><div className="image"><img src={outside} alt="" title="" /></div><span> <br /></span></div>
                                        <div className="price"><span></span></div>
                                        <h4>Restaurant Kohinoor</h4>
                                        <div className="text">We warmly invite you to host memorable dining experiences at Restaurant Kohinoor, where fine cuisine and luxurious ambiance come together.</div>
                                        <Link to={`/gallery?tab=Restaurant - Kohinoor`} className="over-link"></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="images-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">
                                <span className="dotted-pattern dotted-pattern-4"></span>
                                <div className="images">
                                    <div className="image wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms"><img src={fac380} alt="" title="" /></div>
                                    <div className="image wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms"><img src={fac250} alt="" title="" /></div>
                                    <div className="image wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms"><img src={fac320} alt="" title="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="featured-section">
                <div className="pattern-top"></div>
                <span className="dotted-pattern dotted-pattern-3"></span>
                <span className="tri-pattern tri-pattern-3"></span>
                <div className="auto-container">
                    <div className="featured-block">
                        <div className="row clearfix">
                            <div className="text-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <h3>Banquet Hall <br />Shipre</h3>
                                    <div className="text">We are excited to invite guests to host unforgettable events at our exquisite Banquet Shipre, where elegance meets exceptional service.</div>
                                    <div className="link-box">
                                        <Link to="/about" className="theme-btn btn-style-one"><span className="btn-title">Read More</span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="image-box">
                                        <figure className="image"><Link to="#"><img src={shipre} alt="" title="" /></Link></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="featured-block alternate">
                        <div className="row clearfix">
                            <div className="text-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <h3>Banquet Hall <br />Pearl</h3>
                                    <div className="text">We are excited to invite guests to host unforgettable events at our exquisite Banquet Pearl, where elegance meets exceptional service.</div>
                                    <div className="link-box">
                                        <Link to="/about" className="theme-btn btn-style-one"><span className="btn-title">Discover Now</span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="image-box">
                                        <figure className="image"><Link to="#"><img src={pearl} alt="" title="" /></Link></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video-section">
                <div className="image-layer" style={{ backgroundImage: `url(${backimg})` }}>

                </div>
                <div className="auto-container">
                    <div className="content-box wow zoomIn" data-wow-delay="0ms" data-wow-duration="2000ms">
                        <h1>See The Experience Before You Feel it.</h1>
                        <div className="play-link"><Link to="https://www.youtube.com/watch?v=Get7rqXYrbQ" target='_blank' className="lightbox-image"><span className="icon flaticon-play-button-3"></span></Link></div>
                    </div>
                </div>
            </section>
            <section className="testimonials-section">
                <span className="dotted-pattern dotted-pattern-3"></span>
                <span className="tri-pattern tri-pattern-2"></span>
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

export default HomePage