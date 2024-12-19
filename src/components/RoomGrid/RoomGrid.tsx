import bannerImage from '../../assets/images/background/banner-image-2.jpg';
import featuredImage21 from '../../assets/images/resource/featured-image-21.jpg';
import featuredImage22 from '../../assets/images/resource/featured-image-22.jpg';
import featuredImage23 from '../../assets/images/resource/featured-image-23.jpg';
import featuredImage24 from '../../assets/images/resource/featured-image-24.jpg';
import featuredImage25 from '../../assets/images/resource/featured-image-25.jpg';
import featuredImage26 from '../../assets/images/resource/featured-image-26.jpg';
import featuredImage27 from '../../assets/images/resource/featured-image-27.jpg';
import featuredImage28 from '../../assets/images/resource/featured-image-28.jpg';
import featuredImage29 from '../../assets/images/resource/featured-image-29.jpg';
import DateSelectComp from '../DateSelectComp/DateSelectComp';

const roomsData = [
    { title: 'Balcony Room', price: '$50.00', image: featuredImage21 },
    { title: 'Deluxe Room', price: '$50.00', image: featuredImage22 },
    { title: 'Luxury Room', price: '$50.00', image: featuredImage23 },
    { title: 'Sea View Room', price: '$50.00', image: featuredImage24 },
    { title: 'Superior Room', price: '$50.00', image: featuredImage25 },
    { title: 'Signature Room', price: '$50.00', image: featuredImage26 },
    { title: 'Luxury Suite Room', price: '$50.00', image: featuredImage27 },
    { title: 'Queen Room Balcony', price: '$50.00', image: featuredImage28 },
    { title: 'Studio Sea View', price: '$50.00', image: featuredImage29 },
];

const RoomCard = ({ room } : { room: { title: string, price: string, image: string } }) => (
    <div className="room-block-two col-lg-4 col-md-6 col-sm-12">
        <div className="inner-box">
            <div className="image-box">
                <figure className="image">
                <a href="room-single">
                    <img src={room.image} alt={room.title} title={room.title} />
                </a>
                </figure>
            </div>
            <div className="lower-box">
                <h4>{room.title}</h4>
                <div className="pricing clearfix">
                <div className="price">From <span>{room.price}</span></div>
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
                <a href="room-single" className="theme-btn btn-style-three">
                    <span className="btn-title">Check Availability</span>
                </a>
                </div>
            </div>
        </div>
    </div>
);

const RoomGrid = () => (
    <>
        <section className="page-banner">
        <div className="image-layer" style={{ backgroundImage: `url(${bannerImage})` }}></div>
        <div className="banner-bottom-pattern"></div>
        <div className="banner-inner">
            <div className="auto-container">
            <div className="inner-container clearfix">
                <h1>Room Grid</h1>
                <div className="page-nav">
                <ul className="bread-crumb clearfix">
                    <li><a href="index.html">Home</a></li>
                    <li className="active">Rooms Grid</li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </section>

        <section className="rooms-section">
            <div className="auto-container">
                <div className="filters-section filters-container">
                    <DateSelectComp />
                </div>

                <div className="row clearfix">
                {roomsData.map((room, index) => (
                    <RoomCard key={index} room={room} />
                ))}
                </div>
            </div>
        </section>
    </>
);

export default RoomGrid;
