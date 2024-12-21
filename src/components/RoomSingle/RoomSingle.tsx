/*import bannerImage from '../../assets/images/background/banner-image-9.jpg';*/
import { useParams } from 'react-router-dom';

interface Rooms {
    [key: string]: {
        roomName: string;
        roomPrice: string;
        desc: string;
        roomSize: string;
        desc2: string;
        img: string[];
    };
}

const RoomSingle = () => {

    const { id = 0 } = useParams();
    
    const dr1 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734683519/PSK%20Hotels/Delux%20Room/A3__3292_updated_wdcxtu.jpg";
    const dr2 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734683519/PSK%20Hotels/Delux%20Room/A3__3235_updated_rmikhx.jpg";
    
    const fr1 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734683558/PSK%20Hotels/Family%20Room/A3__3172_updated_z9vn3u.jpg";
    const fr2 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734683558/PSK%20Hotels/Family%20Room/A3__3178_updated_rejo9z.jpg";
    
    const pr1 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734683585/PSK%20Hotels/Premium%20Room/A3__3224_updated_uxdaon.jpg";
    const pr2 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734683585/PSK%20Hotels/Premium%20Room/A3__3249_updated_jbtwzl.jpg";

    const banimg = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734767951/PSK%20Hotels/Lobby/1920_X_820_hbrw2w.jpg";
    
    const RoomTab : Rooms = {
        0: { roomName: "Delux Room", roomPrice: "5000", desc: "1 extra-large double bed", roomSize: "23.69", desc2: "The fireplace is the standout feature of this double room. This air-conditioned double room is comprised of a flat-screen TV with cable channels, a private bathroom as well as a terrace with city views. The unit has 1 bed.", img: [dr1, dr2] },
        1: { roomName: "Premium Suite Room", roomPrice: "7000", desc: "1 extra-large double bed", roomSize: "47.38", desc2: "The fireplace is the standout feature of this suite. The air-conditioned suite has 1 bedroom and 1 bathroom with a walk-in shower and a bath. Boasting a terrace with city views, this suite also features soundproof walls and a flat-screen TV with cable channels. The unit has 1 bed.", img: [pr1, pr2] },
        2: { roomName: "Family Suite Room", roomPrice: "8000", desc: "1 single bedand1 extra-large double bed", roomSize: "34.84", desc2: "This family room features a fireplace. This air-conditioned family room is comprised of a flat-screen TV with cable channels, a private bathroom as well as a terrace with city views. The unit has 2 beds.", img: [fr1, fr2] }
    }

    return (
        <>
            <section className="page-banner ext-banner">
                <div className="image-layer" style={{ backgroundImage: `url(${banimg})` }}></div>
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
                        <a href={RoomTab[id].img[0]} className="lightbox-image">
                            <img src={RoomTab[id].img[0]} alt="" title="" />
                        </a>
                        </figure>
                    </div>
                    <div className="image-block col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <figure className="image">
                        <a href={RoomTab[id].img[1]} className="lightbox-image">
                            <img src={RoomTab[id].img[1]} alt="" title="" />
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
                            <a href="/room-single/2">
                            <img src={fr1} alt="" title="" />
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
                            <a href="/room-single/2" className="theme-btn btn-style-three">
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
                            <a href="/room-single/1">
                            <img src={pr1} alt="" title="" />
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
                            <a href="/room-single/1" className="theme-btn btn-style-three">
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
                            <a href="/room-single/0">
                            <img src={dr1} alt="" title="" />
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
                            <a href="/room-single/0" className="theme-btn btn-style-three">
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