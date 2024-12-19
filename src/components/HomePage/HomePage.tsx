import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mainSlider from '../../assets/images/main-slider/1.jpg';
import featuredImage0 from '../../assets/images/resource/featured-image-0.jpg';
import featuredImage1 from '../../assets/images/resource/featured-image-1.jpg';
import featuredImage2 from '../../assets/images/resource/featured-image-2.jpg';
import featuredImage3 from '../../assets/images/resource/featured-image-3.jpg';
import featuredImage4 from '../../assets/images/resource/featured-image-4.jpg';
import featuredImage5 from '../../assets/images/resource/featured-image-5.jpg';
import chairUmbrella from '../../assets/images/resource/chair-umbrella.png';
import gallery1 from '../../assets/images/gallery/1.jpg';
import gallery2 from '../../assets/images/gallery/2.jpg';
import gallery3 from '../../assets/images/gallery/3.jpg';
import gallery4 from '../../assets/images/gallery/4.jpg';
import gallery5 from '../../assets/images/gallery/5.jpg';
import backGroundImage1 from '../../assets/images/background/image-1.jpg';
import ofThumb1 from '../../assets/images/resource/of-thumb-1.jpg';
import testThumb1 from '../../assets/images/resource/testi-thumb-1.jpg';
import testThumb2 from '../../assets/images/resource/testi-thumb-2.jpg';
import testThumb3 from '../../assets/images/resource/testi-thumb-3.jpg';
import newsImage1 from '../../assets/images/resource/news-image-1.jpg';
import newsImage2 from '../../assets/images/resource/news-image-2.jpg';
import newsImage3 from '../../assets/images/resource/news-image-3.jpg';

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import dayjs, { Dayjs } from 'dayjs';
import { DateRange } from '@mui/x-date-pickers-pro/models';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
// import { Checkbox, ListItemText, MenuItem } from '@mui/material';

const HomePage = () => {

    // const [roomCheckInfo, setRoomCheckInfo] = useState({ arrival: new Date(), departure: `${Date.now()}`, adults: 0, children: 0 });
    const [value, setValue] = useState<DateRange<Dayjs>>([
        dayjs('2022-04-17'),
        dayjs('2022-04-21'),
    ]);
    
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        navigate("/room-single");
    }

    return (
        <div className='page-wrapper'>
            <section className="banner-section banner-one" style={{ height: '100vh' }}>
                <div className="banner-bottom-pattern"></div>
                <div className="banner-carousel owl-theme">
                    <div className="slide-item">
                        <div className="image-layer" style={{ backgroundImage: `url(${mainSlider})` }}></div>
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
                            <form method="post" onSubmit={handleSubmit}>
                                <div className="row clearfix">
                                    {/* <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                        <div className="field-label">Arrival</div>
                                        <div className="field-inner">
                                            <input id="arrival-date" className="date-picker" type="date" name="field-name" value={roomCheckInfo.arrival.toISOString().split('T')[0]} onChange={(e) => setRoomCheckInfo({ ...roomCheckInfo, arrival: new Date(e.target.value) })} placeholder="" />
                                        </div>
                                    </div>
                                    <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                        <div className="field-label">Departure</div>
                                        <div className="field-inner">
                                            <input id="depart-date" className="date-picker" type="date" name="field-name" value={roomCheckInfo.departure} onChange={(e) => setRoomCheckInfo({ ...roomCheckInfo, departure: e.target.value })} placeholder="" />
                                        </div>
                                    </div> */}
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DateRangePicker']}>
                                            <DemoItem label="Controlled picker" component="DateRangePicker">
                                                <DateRangePicker
                                                    value={value}
                                                    onChange={(newValue) => setValue(newValue)}
                                                />
                                            </DemoItem>
                                        </DemoContainer>
                                    </LocalizationProvider>
                                    <div>
                                    </div>
                                    {/* <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                        <div className="field-label">Guests</div>
                                        <div className="field-inner">
                                            <div className="check-sel-box">
                                                <div className="check-sel-btn">
                                                    <span className="adult-info">2 Adults.</span>
                                                    <span className="child-info">1 Children</span>
                                                </div>
                                                <ul className="check-sel-droplist">
                                                    <li>
                                                        <div className="sel-title">Select Adults:</div>
                                                        <div className="clearfix">
                                                            <div className="radio-block adult-block"><input type="radio" name="adult-group" id="radio-1" value="1 Adults." /><label htmlFor="radio-1">1</label></div>
                                                            <div className="radio-block adult-block"><input type="radio" name="adult-group" id="radio-2" value="2 Adults." checked /><label htmlFor="radio-2">2</label></div>
                                                            <div className="radio-block adult-block"><input type="radio" name="adult-group" id="radio-3" value="3 Adults." /><label htmlFor="radio-3">3</label></div>
                                                            <div className="radio-block adult-block"><input type="radio" name="adult-group" id="radio-4" value="4 Adults." /><label htmlFor="radio-4">4</label></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="sel-title">Select Children:</div>
                                                        <div className="clearfix">
                                                            <div className="radio-block child-block"><input type="radio" name="child-group" id="radio-5" value="1 Children" checked /><label htmlFor="radio-5">1</label></div>
                                                            <div className="radio-block child-block"><input type="radio" name="child-group" id="radio-6" value="2 Children" /><label htmlFor="radio-6">2</label></div>
                                                            <div className="radio-block child-block"><input type="radio" name="child-group" id="radio-7" value="3 Children" /><label htmlFor="radio-7">3</label></div>
                                                            <div className="radio-block child-block"><input type="radio" name="child-group" id="radio-8" value="4 Children" /><label htmlFor="radio-8">4</label></div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                        <div className="field-label e-label">&nbsp;</div>
                                        <div className="field-inner">
                                            <button className="theme-btn btn-style-one" type='submit'><span className="btn-title">Check Availability</span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="text-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="sec-title">
                                    <h2>Quality <br />Holidays With Us</h2>
                                </div>
                                <div className="text">TO BE WRITTER</div>
                                <div className="link-box">
                                    <Link to="/about" className="theme-btn btn-style-one"><span className="btn-title">Read More</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image-box">
                                    <span className="dotted-pattern dotted-pattern-2"></span>
                                    <figure className="image"><img src={featuredImage0} alt="" title="" /></figure>
                                    <div className="cap"><span className="txt">2 <br />Years <br />of <br />Exp.</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="facts-section">
                <span className="dotted-pattern dotted-pattern-3"></span>
                <div className="left-bottom-image"><img src={chairUmbrella} alt="" title="" /></div>
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
                                            <div className="fact-count wow zoomInStable" data-wow-delay="0ms" data-wow-duration="2000ms"><div className="count-box"><span className="count-text" data-stop="712" data-speed="5000">1,00,000</span>+</div></div>
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
                                        <div className="image-layer" style={{backgroundImage: `url(${gallery2})`}}></div>
                                        <figure className="image"><img src={gallery1} alt="" title="" /></figure>
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
                                            <div className="link-box"><a href="/room-single" className="theme-btn btn-style-one"><span className="btn-title">Check Availability</span></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="room-block-one height-one wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image-layer" style={{ backgroundImage: `url(${gallery2})` }}></div>
                                        <figure className="image"><img src={gallery2} alt="" title="" /></figure>
                                    </div>
                                    <div className="cap-box">
                                        <div className="cap-inner">
                                            <div className="price">From <span>$50.00</span></div>
                                            <h5>Sea View Room</h5>
                                        </div>
                                    </div>
                                    <div className="hover-box">
                                        <div className="hover-inner">
                                            <h4>Sea View Room</h4>
                                            <div className="pricing clearfix">
                                                <div className="price">From <span>$50.00</span></div>
                                                <div className="rating">
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                            </div>

                                            <div className="text">Excepteur sint occaecat cupidatat pro dent in sun in culpa qui officia deserunt mollit anim.</div>
                                            <div className="link-box"><a href="/room-single" className="theme-btn btn-style-one"><span className="btn-title">Check Availability</span></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>*/}
                        </div>
                        <div className="column col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="room-block-one height-one wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image-layer" style={{backgroundImage: `url(${gallery3})`}}></div>
                                        <figure className="image"><img src={gallery1} alt="" title="" /></figure>
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
                                            <div className="link-box"><a href="/room-single" className="theme-btn btn-style-one"><span className="btn-title">Check Availability</span></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="room-block-one height-two wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image-layer" style={{ backgroundImage: `url(${gallery3})` }}></div>
                                        <figure className="image"><img src={gallery3} alt="" title="" /></figure>
                                    </div>
                                    <div className="cap-box">
                                        <div className="cap-inner">
                                            <div className="price">From <span>$50.00</span></div>
                                            <h5>Superior Room</h5>
                                        </div>
                                    </div>
                                    <div className="hover-box">
                                        <div className="hover-inner">
                                            <h4>Superior Room</h4>
                                            <div className="pricing clearfix">
                                                <div className="price">From <span>$50.00</span></div>
                                                <div className="rating">
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                            </div>

                                            <div className="text">Excepteur sint occaecat cupidatat pro dent in sun in culpa qui officia deserunt mollit anim.</div>
                                            <div className="link-box"><a href="/room-single" className="theme-btn btn-style-one"><span className="btn-title">Check Availability</span></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>*/}
                        </div>
                        <div className="column col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="room-block-one height-one wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image-layer" style={{ backgroundImage: `url(${gallery4})` }}></div>
                                        <figure className="image"><img src={gallery4} alt="" title="" /></figure>
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
                                            <div className="link-box"><a href="/room-single" className="theme-btn btn-style-one"><span className="btn-title">Check Availability</span></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="room-block-one height-one wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image-layer" style={{ backgroundImage: `url(${gallery5})` }}></div>
                                        <figure className="image"><img src={gallery5} alt="" title="" /></figure>
                                    </div>
                                    <div className="cap-box">
                                        <div className="cap-inner">
                                            <div className="price">From <span>$50.00</span></div>
                                            <h5>Luxury Suite Room</h5>
                                        </div>
                                    </div>
                                    <div className="hover-box">
                                        <div className="hover-inner">
                                            <h4>Luxury Suite Room</h4>
                                            <div className="pricing clearfix">
                                                <div className="price">From <span>$50.00</span></div>
                                                <div className="rating">
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                            </div>

                                            <div className="text">Excepteur sint occaecat cupidatat pro dent in sun in culpa qui officia deserunt mollit anim.</div>
                                            <div className="link-box"><a href="/room-single" className="theme-btn btn-style-one"><span className="btn-title">Check Availability</span></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </section>
            <section className="offers-section-one">
                <div className="auto-container">
                    <div className="upper-box clearfix">
                        <div className="sec-title">
                            <h2>PSK Hotels <br />Other Offers</h2>
                            <div className="lower-text"></div>
                        </div>
                        {/*<div className="link-box">
                            <Link to="packages.html" className="theme-btn btn-style-one"><span className="btn-title">View All Offers</span></Link>
                        </div>*/}
                    </div>
                    <div className="row clearfix">
                        <div className="offers-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="offer-block">
                                    <div className="offer-inner">
                                        <div className="fact-thumb wow zoomInStable" data-wow-delay="0ms" data-wow-duration="1500ms"><div className="image"><img src={ofThumb1} alt="" title="" /></div><span> <br />off</span></div>
                                        <div className="price"><span></span></div>
                                        <h4>Banquet Hall - Pearl</h4>
                                        <div className="text">We are excited to invite guests to host unforgettable events at our exquisite Banquet Pearl, where elegance meets exceptional service.</div>
                                        <a href="package-single.html" className="over-link"></a>
                                    </div>
                                </div>
                                <div className="offer-block">
                                    <div className="offer-inner">
                                        <div className="fact-thumb wow zoomInStable" data-wow-delay="300ms" data-wow-duration="1500ms"><div className="image"><img src={ofThumb1} alt="" title="" /></div><span> <br />off</span></div>
                                        <div className="price"><span></span></div>
                                        <h4>Banquet Hall - Shipre</h4>
                                        <div className="text">We are excited to invite guests to host unforgettable events at our exquisite Banquet Shipre, where elegance meets exceptional service.</div>
                                        <a href="package-single.html" className="over-link"></a>
                                    </div>
                                </div>
                                <div className="offer-block">
                                    <div className="offer-inner">
                                        <div className="fact-thumb wow zoomInStable" data-wow-delay="600ms" data-wow-duration="1500ms"><div className="image"><img src={ofThumb1} alt="" title="" /></div><span> <br />off</span></div>
                                        <div className="price"><span></span></div>
                                        <h4>Restaurant Kohinoor</h4>
                                        <div className="text">We warmly invite you to host memorable dining experiences at Restaurant Kohinoor, where fine cuisine and luxurious ambiance come together.</div>
                                        <a href="package-single.html" className="over-link"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="images-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">
                                <span className="dotted-pattern dotted-pattern-4"></span>
                                <div className="images">
                                    <div className="image wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms"><img src={featuredImage1} alt="" title="" /></div>
                                    <div className="image wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms"><img src={featuredImage2} alt="" title="" /></div>
                                    <div className="image wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms"><img src={featuredImage3} alt="" title="" /></div>
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
                                    <h3>Host at our<br />Banquet - Pearl</h3>
                                    <div className="text">We are excited to invite guests to host unforgettable events at our exquisite Banquet Pearl, where elegance meets exceptional service.</div>
                                    <div className="link-box">
                                        <a href="about.html" className="theme-btn btn-style-one"><span className="btn-title">Read More</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="image-box">
                                        <figure className="image"><Link to="#"><img src={featuredImage4} alt="" title="" /></Link></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="featured-block alternate">
                        <div className="row clearfix">
                            <div className="text-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <h3>Host at our<br />Banquet - Shipre</h3>
                                    <div className="text">We are excited to invite guests to host unforgettable events at our exquisite Banquet Shipre, where elegance meets exceptional service.</div>
                                    <div className="link-box">
                                        <Link to="/about" className="theme-btn btn-style-one"><span className="btn-title">Discover Now</span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="image-box">
                                        <figure className="image"><Link to="#"><img src={featuredImage5} alt="" title="" /></Link></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video-section">
                <div className="image-layer" style={{ backgroundImage: `url(${backGroundImage1})` }}></div>
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
                                        <div className="image"><img src={testThumb1} alt="" /></div>
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
                                        <div className="image"><img src={testThumb2} alt="" /></div>
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
                                        <div className="image"><img src={testThumb3} alt="" /></div>
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
                                        <div className="image"><img src={testThumb1} alt="" /></div>
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
                                        <div className="image"><img src={testThumb2} alt="" /></div>
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
                                        <div className="image"><img src={testThumb3} alt="" /></div>
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
                                        <div className="image"><img src={testThumb1} alt="" /></div>
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
                                        <div className="image"><img src={testThumb2} alt="" /></div>
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
                                        <div className="image"><img src={testThumb3} alt="" /></div>
                                        <div className="name">Dominic Allen</div>
                                        <div className="designation">Designer</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<section className="news-section">
                <div className="pattern-top"></div>
                <div className="auto-container">
                    <div className="upper-box clearfix">
                        <div className="sec-title">
                            <h2>Stay Update <br />with Hotera</h2>
                            <div className="lower-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        </div>
                        <div className="link-box">
                            <Link to="/blog" className="theme-btn btn-style-one"><span className="btn-title">View All Post</span></Link>
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="news-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image-box">
                                    <figure className="image"><a href="blog-single.html"><img src={newsImage1} alt="" title="" /></a></figure>
                                </div>
                                <div className="post-meta">
                                    <span>on 2 Sep, 2019  /  by admin</span>
                                </div>
                                <h4><a href="blog-single.html">Disclosing the Secrets of Success in Hotera.</a></h4>
                                <div className="link-box">
                                    <a href="blog-single.html"><span className="icon flaticon-arrows-10"></span>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="news-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="image-box">
                                    <figure className="image"><a href="blog-single.html"><img src={newsImage2} alt="" title="" /></a></figure>
                                </div>
                                <div className="post-meta">
                                    <span>on 2 Sep, 2019  /  by admin</span>
                                </div>
                                <h4><a href="blog-single.html">The Top Hotel Trends to Watch in 2020.</a></h4>
                                <div className="link-box">
                                    <a href="blog-single.html"><span className="icon flaticon-arrows-10"></span>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="news-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="image-box">
                                    <figure className="image"><a href="blog-single.html"><img src={newsImage3} alt="" title="" /></a></figure>
                                </div>
                                <div className="post-meta">
                                    <span>on 2 Sep, 2019  /  by admin</span>
                                </div>
                                <h4><a href="blog-single.html">Seven Best Things To Do In Buckeye Arizona.</a></h4>
                                <div className="link-box">
                                    <a href="blog-single.html"><span className="icon flaticon-arrows-10"></span>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>*/}
        </div>
    )
}

export default HomePage