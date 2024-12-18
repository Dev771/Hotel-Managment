import bannerImage from '../../assets/images/background/banner-image-9.jpg';
import featuredImage1 from '../../assets/images/resource/featured-image-54.jpg';
import featuredImage2 from '../../assets/images/resource/featured-image-55.jpg';
import roomImage1 from '../../assets/images/resource/featured-image-21.jpg';
import roomImage2 from '../../assets/images/resource/featured-image-22.jpg';
import roomImage3 from '../../assets/images/resource/featured-image-23.jpg';

const RoomSingle = () => {
    return (
        <>
            <section className="page-banner ext-banner">
                <div className="image-layer" style={{ backgroundImage: `url(${bannerImage})` }}></div>
                <div className="banner-bottom-pattern"></div>
                <div className="banner-inner">
                <div className="auto-container">
                    <div className="inner-container clearfix"></div>
                </div>
                </div>
            </section>
            <section className="room-single">
                <div className="circles-two">
                <div className="c-1"></div>
                <div className="c-2"></div>
                </div>
                <span className="dotted-pattern dotted-pattern-3"></span>
                <span className="tri-pattern tri-pattern-3"></span>
                <div className="auto-container">
                <div className="upper-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="upper-inner">
                    <h2>Family Suite Room</h2>
                    <div className="pricing clearfix">
                        <div className="price">
                        Start From: <span>$50.00</span> / Per Night
                        </div>
                        <div className="rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        </div>
                    </div>
                    <div className="text">
                        <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed perspiciatis unde omnis iste natus
                        error sitvou ptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae illo inventore veritatis et quasi architecto beatae vitae dicta
                        sunt explicabo.
                        </p>
                        <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt labore dolore
                        sit magnam aliquam quaerat voluptatem.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="details-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="details-inner">
                    <h3>Room Amenities</h3>
                    <div className="text">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                        error sitvou ptatem accusantium doloremque laudantium.
                    </div>
                    <ul className="info clearfix">
                        <li>
                        <span className="icon flaticon-tv"></span> Television
                        </li>
                        <li>
                        <span className="icon flaticon-wifi"></span> Wi-Fi
                        </li>
                        <li>
                        <span className="icon flaticon-coffee-cup"></span> Breakfast
                        </li>
                        <li>
                        <span className="icon flaticon-bathtub"></span> Bathtub
                        </li>
                        <li>
                        <span className="icon flaticon-stones"></span> Spa
                        </li>
                        <li>
                        <span className="icon flaticon-newspaper"></span> Newspaper
                        </li>
                        <li>
                        <span className="icon flaticon-wine-glass"></span> Mini Bar
                        </li>
                        <li>
                        <span className="icon flaticon-dumbbell"></span> Gymnasium
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="lower-box">
                    <div className="row clearfix">
                    <div className="image-block col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <figure className="image">
                        <a href={featuredImage1} className="lightbox-image">
                            <img src={featuredImage1} alt="" title="" />
                        </a>
                        </figure>
                    </div>
                    <div className="image-block col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <figure className="image">
                        <a href={featuredImage2} className="lightbox-image">
                            <img src={featuredImage2} alt="" title="" />
                        </a>
                        </figure>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="rooms-section alternate">
                <span className="dotted-pattern dotted-pattern-3"></span>
                <span className="tri-pattern tri-pattern-3"></span>
                <div className="auto-container">
                <div className="sec-title centered">
                    <h2>Room & Suites</h2>
                    <div className="lower-text">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                    error sit voluptatem.
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="room-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                        <div className="image-box">
                        <figure className="image">
                            <a href="/room-single">
                            <img src={roomImage1} alt="" title="" />
                            </a>
                        </figure>
                        </div>
                        <div className="lower-box">
                        <h4>Balcony Room</h4>
                        <div className="pricing clearfix">
                            <div className="price">
                            From <span>$50.00</span>
                            </div>
                            <div className="rating">
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            </div>
                        </div>
                        <div className="text">Excepteur sint occaecat cupidatat dent in sun in culpa qui officia deserunt mollit anim id est.</div>
                        <div className="link-box">
                            <a href="/room-single" className="theme-btn btn-style-three">
                            <span className="btn-title">Check Availability</span>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="room-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                        <div className="image-box">
                        <figure className="image">
                            <a href="/room-single">
                            <img src={roomImage2} alt="" title="" />
                            </a>
                        </figure>
                        </div>
                        <div className="lower-box">
                        <h4>Deluxe Room</h4>
                        <div className="pricing clearfix">
                            <div className="price">
                            From <span>$50.00</span>
                            </div>
                            <div className="rating">
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            </div>
                        </div>
                        <div className="text">Excepteur sint occaecat cupidatat dent in sun in culpa qui officia deserunt mollit anim id est.</div>
                        <div className="link-box">
                            <a href="/room-single" className="theme-btn btn-style-three">
                            <span className="btn-title">Check Availability</span>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="room-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                        <div className="image-box">
                        <figure className="image">
                            <a href="/room-single">
                            <img src={roomImage3} alt="" title="" />
                            </a>
                        </figure>
                        </div>
                        <div className="lower-box">
                        <h4>Luxury Room</h4>
                        <div className="pricing clearfix">
                            <div className="price">
                            From <span>$50.00</span>
                            </div>
                            <div className="rating">
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            </div>
                        </div>
                        <div className="text">Excepteur sint occaecat cupidatat dent in sun in culpa qui officia deserunt mollit anim id est.</div>
                        <div className="link-box">
                            <a href="/room-single" className="theme-btn btn-style-three">
                            <span className="btn-title">Check Availability</span>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
}

export default RoomSingle;