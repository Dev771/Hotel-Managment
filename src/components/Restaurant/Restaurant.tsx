/*import bannerImage1 from '../../assets/images/background/banner-image-1.jpg';
import signatureImage1 from '../../assets/images/resource/signature-1.png';
import featureImage12 from '../../assets/images/resource/featured-image-12.jpg';
import featureImage13 from '../../assets/images/resource/featured-image-13.jpg';
import featureImage14 from '../../assets/images/resource/featured-image-14.jpg';
import featureImage18 from '../../assets/images/resource/featured-image-18.jpg';
import featureImage19 from '../../assets/images/resource/featured-image-19.jpg';
import featureImage20 from '../../assets/images/resource/featured-image-20.jpg';*/
import { Link } from 'react-router-dom';

const bannerimg = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734698514/PSK%20Hotels/Reception/1920_X_620_ucm457.jpg";
const img1 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1735918798/PSK%20Hotels/Restaurant/A3__3564_q6o9fy.jpg";
const img2 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1735918794/PSK%20Hotels/Restaurant/A3__3573_kxj2ge.jpg";
const img3 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1735918802/PSK%20Hotels/Restaurant/A3__3568_uoxbis.jpg";

{/*const banimg1 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734623175/PSK%20Hotels/Banquet%20Pearl/A3__3358_dbwqbi.jpg";
const banimg2 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734623179/PSK%20Hotels/Banquet%20Pearl/A3__3364_lcm5xk.jpg";
const banimg3 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734622836/PSK%20Hotels/Banquet%20Shipre/A3__3438_kpnpfs.jpg";*/}

const Restaurant = () => {
    return (
        <div className='page-wrapper'>
            <section className="page-banner">
                <div className="image-layer" style={{ backgroundImage: `url(${bannerimg})` }}></div>
                <div className="banner-bottom-pattern"></div>

                <div className="banner-inner">
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            <h1>Dinning</h1>
                            <div className="page-nav">
                                <ul className="bread-crumb clearfix">
                                    <li><Link to="/">Home</Link></li>
                                    <li className="active">Dinning</li>
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
                                    <h2>KOHINOOR<br />HOTEL PSK INN</h2>
                                </div>
                                <div className="text">
                                “Where every bite is a Flavors adventure!”
                                Kohinoor creates an atmosphere that is more than just a meal at a restaurant; it is a self-sufficient haven of joy that continuously defies the routine that engulfs and obscures her capacity to be herself and appreciate a few moments to herself. So, No need to exert yourself.
                                Bon voyage into the world of Flavors!
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



            {/*<section className="featured-section-four about-page">
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
                                    <h2>Banquet Halls<br />Pearl Hall & Shipre Hall</h2>
                                </div>
                                <div className="text">
                                Mughalsarai’s Pearl The Dinner is a lavish sight for all to enjoy. It is one of the classiest and most elegant spaces in Hotel PSK INN and a great place to host celebrations for your significant occasions. The dining halls at Hotel PSK Inn in Mughalsarai, Pearl The Banquet, Oozes luxury. The interiors of the hall will not only awe everyone with their luxurious crystal chandeliers, spectacular wall designs, plush seating arrangements, and other sumptuous pieces of décor, but they will also lend a touch of glitz to your big day. Several banquet rooms with small and medium-sized capacities are available, making them ideal for weddings, birthday parties, wedding anniversaries, and many other events. Also, the Pearl Banquet Vaishali offers free dressing rooms and a sizeable parking space with valet service.
                                <p>
                                •	Dimension: 40 ft. x 87 ft. | Area: 3480 sq. ft. | Height: 3.65 m.
                                </p>
                                <p>
                                •	Opens up in a large space 3480 sq. ft. Large Pre function area
                                </p>
                                <p>
                                •	Guest Entry Point: 1
                                </p>
                                </div>
                                {/*<div className="signature"><img src={signatureImage1} alt="" title="" /></div>
                            </div>
                        </div>
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">
                                <span className="dotted-pattern dotted-pattern-10"></span>
                                <div className="image-box clearfix">
                                    <figure className="image wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms"><img src={banimg1} alt="" title="" /></figure>
                                    <figure className="image wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms"><img src={banimg2} alt="" title="" /></figure>
                                    <figure className="image wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms"><img src={banimg3} alt="" title="" /></figure>
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
            </section>*/}
            {/*<section className="testimonials-section">
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
            </section>*/}
        </div>
    )
}

export default Restaurant