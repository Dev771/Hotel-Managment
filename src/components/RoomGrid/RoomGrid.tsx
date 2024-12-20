import DateSelectComp from '../DateSelectComp/DateSelectComp';

const bannerimg = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734690973/PSK%20Hotels/Home%20Page/a_view_nn6pm6.jpg";
const roomsData = [
    { title: 'Deluxe Room', price: '₹5000.00', image: "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734683519/PSK%20Hotels/Delux%20Room/A3__3235_updated_rmikhx.jpg", id: 0 },
    { title: 'Premium Suite Room', price: '₹7000.00', image: "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734683585/PSK%20Hotels/Premium%20Room/A3__3224_updated_uxdaon.jpg", id: 1 },
    { title: 'Family Suite Room', price: '₹8000.00', image: "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734683558/PSK%20Hotels/Family%20Room/A3__3172_updated_z9vn3u.jpg", id: 2 },

];

const RoomCard = ({ room } : { room: { title: string, price: string, image: string, id: number } }) => (
    <div className="room-block-two col-lg-4 col-md-6 col-sm-12">
        <div className="inner-box">
            <div className="image-box">
                <figure className="image">
                <a href={`room-single/${room.id}`}>
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
                <div className="text"></div>
                <div className="link-box">
                <a href={`room-single/${room.id}`} className="theme-btn btn-style-three">
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
        <div className="image-layer" style={{ backgroundImage: `url(${bannerimg})` }}></div>
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
