import bannerImage from '../../assets/images/background/banner-image-9.jpg';
import featuredImage1 from '../../assets/images/resource/featured-image-54.jpg';
import featuredImage2 from '../../assets/images/resource/featured-image-55.jpg';
import roomImage1 from '../../assets/images/resource/featured-image-21.jpg';
import roomImage2 from '../../assets/images/resource/featured-image-22.jpg';
import roomImage3 from '../../assets/images/resource/featured-image-23.jpg';
import { useLocation } from 'react-router-dom';

const RoomSingle = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const paramVal = queryParams.get('id') || "0";
    const id = parseInt(paramVal, 10);

    const RoomTab = [
        { id: 0, roomName: "Delux Room", roomPrice: "5000", desc: "1 bed", roomSize: "23.5", desc2: "Lorem Ipsum sadadas dasndasnd asjd jnas djas djas djas djas jdaj dajsd asd jasd jasd jasd jasd asj", img: [] },
        { id: 1, roomName: "", roomPrice: "", desc: "", roomSize: "", desc2: "", img: [] },
        { id: 2, roomName: "", roomPrice: "", desc: "", roomSize: "", desc2: "", img: [] }
    ]

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
                    <h2>{RoomTab[id].roomName}</h2>
                    <div className="pricing clearfix">
                        <div className="price">
                        Start From: <span>₹{RoomTab[id].roomPrice}</span> / Per Night
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
                        Room size {RoomTab[id].roomSize} m²
                        </p>
                        <p>
                            {RoomTab[id].desc}
                        </p>
                        <p>
                            {RoomTab[id].desc2}
                        </p>
                    </div>
                    </div>
                </div>
                <div className="details-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="details-inner">
                    <h3>Room Amenities</h3>
                    <div className="text">
                    </div>
                    <ul className="info clearfix">
                        <li>
                        <span className="icon flaticon-tv"></span> Television
                        </li>
                        <li>
                        <span className="icon flaticon-wifi"></span> Air purifiers
                        </li>
                        <li>
                        <span className="icon flaticon-coffee-cup"></span> Breakfast
                        </li>
                        <li>
                        <span className="icon flaticon-bathtub"></span> Free Toiletries
                        </li>
                        <li>
                        <span className="icon flaticon-stones"></span> Safety Deposit Box
                        </li>
                        <li>
                        <span className="icon flaticon-newspaper"></span> Wake up service/Alarm clock
                        </li>
                        <li>
                        <span className="icon flaticon-wine-glass"></span> Mini Bar
                        </li>
                        <li>
                        <span className="icon flaticon-dumbbell"></span> Fireplace
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
                        <h4>Family Suit Room</h4>
                        <div className="pricing clearfix">
                            <div className="price">
                            From <span>₹8000.00</span>
                            </div>
                            <div className="rating">
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            </div>
                        </div>
                        <div className="text"></div>
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
                        <h4>Premium Suit Room</h4>
                        <div className="pricing clearfix">
                            <div className="price">
                            From <span>₹7000.00</span>
                            </div>
                            <div className="rating">
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            </div>
                        </div>
                        <div className="text"></div>
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
                        <h4>Delux Room</h4>
                        <div className="pricing clearfix">
                            <div className="price">
                            From <span>₹5000.00</span>
                            </div>
                            <div className="rating">
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            </div>
                        </div>
                        <div className="text"></div>
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