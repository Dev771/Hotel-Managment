import { useEffect, useRef, useState } from "react";
/*import bannerImage from "../../assets/images/background/banner-image-2.jpg";*/
import galleryImage13 from "../../assets/images/gallery/13.jpg";
import galleryImage14 from "../../assets/images/gallery/14.jpg";
import galleryImage15 from "../../assets/images/gallery/15.jpg";
import galleryImage16 from "../../assets/images/gallery/16.jpg";
import galleryImage17 from "../../assets/images/gallery/17.jpg";
import galleryImage18 from "../../assets/images/gallery/18.jpg";
import { useLocation } from "react-router-dom";

const GalleryGrid = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const bannerimg = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734698514/PSK%20Hotels/Reception/1920_X_620_ucm457.jpg";
  const tabs = [
    { tabName: "All", img: [] },
    { tabName: "Banquet Hall - Pearl", img: [] },
    { tabName: "Banquet Hall - Shipre", img: [] },
    { tabName: "Restaurant - Kohinoor", img: [] },
    { tabName: "Delux Room", img: [] },
    { tabName: "Premium Suite Room", img: [] },
    { tabName: "Family Suite Room", img: [] },
  ];

  const location = useLocation();
  const topRef = useRef<HTMLElement>(null);

  // Parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get('tab');

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  useEffect(() => {
    if(paramValue) {
      tabs.map((a, i) => {
        if(a.tabName === paramValue) {
          setSelectedTab(i);
        }
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramValue]); 

  return (
    <>
      <section className="page-banner" ref={topRef}>
        <div
          className="image-layer"
          style={{ backgroundImage: `url(${bannerimg})` }}
        ></div>
        <div className="banner-bottom-pattern"></div>
        <div className="banner-inner">
          <div className="auto-container">
            <div className="inner-container clearfix">
              <h1>Gallery Grid</h1>
              <div className="page-nav">
                <ul className="bread-crumb clearfix">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="active">Gallery Grid</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section-two">
        <div className="auto-container">
          {/* Mixit Gallery */}
          <div className="mixit-gallery filter-gallery">
            <div className="filters clearfix">
              <ul className="filter-tabs filter-btns clearfix">
                { tabs.map((a, i) => (
                  <li className={`filter ${selectedTab === i && 'active'}`} onClick={() => setSelectedTab(i)} data-role="button" data-filter="all">
                    {a.tabName}
                  </li>
                ))}
              </ul>
            </div>
            <div className="filter-list row clearfix">
              {[
                galleryImage13,
                galleryImage14,
                galleryImage15,
                galleryImage16,
                galleryImage17,
                galleryImage18,
              ].map((image, index) => (
                <div
                  key={index}
                  className={`gallery-item  all col-lg-4 col-md-6 col-sm-12`}
                >
                  <div
                    className="gallery-block wow fadeInUp"
                    data-wow-delay={`${index * 300}ms`}
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="image">
                        <img src={image} alt={`Gallery Image ${index + 1}`} />
                      </div>
                      <a
                        href={image}
                        className="overlink lightbox-image"
                        data-fancybox="gallery-1"
                      >
                        <span className="icon flaticon-cross"></span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryGrid;
