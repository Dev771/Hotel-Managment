import { useEffect, useRef, useState } from "react";
/*import bannerImage from "../../assets/images/background/banner-image-2.jpg";*/
import { useLocation } from "react-router-dom";

const dr1 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734704696/PSK%20Hotels/GALLERY/Deluxe/370_X_370_2_qmtqze.jpg";
const dr2 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734704693/PSK%20Hotels/GALLERY/Deluxe/370_X_370_1_clof3z.jpg";
const fr1 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734704713/PSK%20Hotels/GALLERY/family/370_X_370_1_ti5qfd.jpg";
const fr2 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734704715/PSK%20Hotels/GALLERY/family/370_X_370_2_bsnri1.jpg";
const fr3 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734704718/PSK%20Hotels/GALLERY/family/370_X_370_3_oqh6mn.jpg";
const fr4 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734704721/PSK%20Hotels/GALLERY/family/370_X_370_4_z4rc8j.jpg";
const pr1 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734704725/PSK%20Hotels/GALLERY/Premium/370_X_370_1_gqlj4n.jpg";
const pr2 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734704728/PSK%20Hotels/GALLERY/Premium/370_X_370_2_hmew2f.jpg";
const pr3 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734704731/PSK%20Hotels/GALLERY/Premium/370_X_370_3_fcevqp.jpg";
const other1 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734704738/PSK%20Hotels/GALLERY/Other/370_X_370_1_hiqv7m.jpg";
const other2 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734704744/PSK%20Hotels/GALLERY/Other/370_X_370_3_twyna1.jpg";
const other3 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734704747/PSK%20Hotels/GALLERY/Other/370_X_370_4_gncy4j.jpg";
const other4 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734704741/PSK%20Hotels/GALLERY/Other/370_X_370_2_svmtf9.jpg";
const pearl1 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734704689/PSK%20Hotels/GALLERY/pearl/370_X_370_6_bju4uz.jpg";
const pearl2 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734704687/PSK%20Hotels/GALLERY/pearl/370_X_370_5_jeicx8.jpg";
const pearl3 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734704684/PSK%20Hotels/GALLERY/pearl/370_X_370_4_cmcpv9.jpg";
const pearl4 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734704681/PSK%20Hotels/GALLERY/pearl/370_X_370_3_coh3k3.jpg";
const pearl5 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734704679/PSK%20Hotels/GALLERY/pearl/370_X_370_2_oveefe.jpg";
const pearl6 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734704676/PSK%20Hotels/GALLERY/pearl/370_X_370_1_gx7pkt.jpg";
const shipre1 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734704663/PSK%20Hotels/GALLERY/shipre/370_X_370_4_fkrhqo.jpg";
const shipre2 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734704660/PSK%20Hotels/GALLERY/shipre/370_X_370_3_p4rpwb.jpg";
const shipre3 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734704657/PSK%20Hotels/GALLERY/shipre/370_X_370_2_tgk9jv.jpg";
const shipre4 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734704656/PSK%20Hotels/GALLERY/shipre/370_X_370_1_u0tnzl.jpg";


const GalleryGrid = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const bannerimg = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734690973/PSK%20Hotels/Home%20Page/a_view_nn6pm6.jpg";
  const tabs = [
    { tabName: "All", img: [dr1, dr2, pr1, pr2, pr3, fr1, fr2, fr3, fr4, pearl1, pearl2, pearl3, pearl4, pearl5, pearl6, shipre1, shipre2, shipre3, shipre4, other1, other2, other3, other4] },
    { tabName: "Banquet Hall - Pearl", img: [pearl1, pearl2, pearl3, pearl4, pearl5, pearl5, pearl6] },
    { tabName: "Banquet Hall - Shipre", img: [shipre1, shipre2, shipre3, shipre4] },
    { tabName: "Restaurant - Kohinoor", img: [other1, other2, other3, other4] },
    { tabName: "Delux Room", img: [dr1, dr2] },
    { tabName: "Premium Suite Room", img: [pr1, pr2, pr3] },
    { tabName: "Family Suite Room", img: [fr1, fr2, fr3, fr4] },
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
              {tabs[selectedTab].img.map((image, index) => (
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
                        target="_blank"
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
