
const TermsAndCondition = () => (
    <div className='page-wrapper'>
        <section className="featured-section-four about-page" style={{ paddingBottom: '60px' }}>
            <span className="dotted-pattern dotted-pattern-11"></span>
            <div className="circles-two">
                <div className="c-1"></div>
                <div className="c-2"></div>
            </div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="text-column col-lg-12 col-md-12 col-sm-12">
                        <div className="inner">
                            <div className="sec-title">
                                <h2>Privacy Policy:</h2>
                            </div>
                            <div className="text">
                                <ul>
                                    <li>We will not disclose any information obtained through our website to any third party without their express consent.</li>
                                    <li>PSK INN will have a record of the incoming email address if you have sent us an email or submitted an inquiry. We do not add your email address to a mailing list and we will not send you unsolicited email (SPAM). We will only use your email address to respond to your requests and communicate directly with you.</li>
                                    <li>PSK INN does not provide facilities for the secure transmission of information across the Internet.</li>
                                    <li>Website users should be aware that there are inherent risks in transmitting information across the Internet.</li>
                                    <li>We shall not be responsible in any manner whatsoever for any violation or misuse of your personal information by unauthorized persons consequent to misuse of the internet environment.</li>
                                    <li>
                                        <b>Grievance Officer:</b>
                                        <div className="link-box">
                                            The contact details of the Grievance Officer are provided below:
                                            Front Office Manager – <a href="mailTo:pskinnhotel@gmail.com">pskinnhotel@gmail.com</a>
                                            <div>
                                                <a>
                                                    GT Rd, opp. raymond showroom, Subhash Nagar, Mughalsarai, Mughalsarai Railway Station , Uttar Pradesh 232101
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <b>Changes to the Policy:</b>
                                        <div className="link-box">
                                            <div>
                                            Hotel PSK INN reserves its right to revise this privacy policy from time to time at its sole discretion.
                                            </div>
                                            <div>
                                            Such a policy will be available on the company website.
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/*<div className="signature"><img src={signatureImage1} alt="" title="" /></div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="map-section">
            <div className="map-layer">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14429.483192871516!2d83.09030294317385!3d25.291743211999872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3b28c8fe633f%3A0x3707bb8593724275!2sHotel%20Psk%20Inn%20A%20Boutique%20Hotel!5e0!3m2!1sen!2sin!4v1734635272229!5m2!1sen!2sin" width="600" height="450" style={{ border:0, width: '100%', height: '80vh' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    </div>
)

export default TermsAndCondition;