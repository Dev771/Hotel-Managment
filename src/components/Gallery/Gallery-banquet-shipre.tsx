import bannerImage from "../../assets/images/background/banner-image-2.jpg";
import galleryImage13 from "../../assets/images/gallery/13.jpg";
import galleryImage14 from "../../assets/images/gallery/14.jpg";
import galleryImage15 from "../../assets/images/gallery/15.jpg";
import galleryImage16 from "../../assets/images/gallery/16.jpg";
import galleryImage17 from "../../assets/images/gallery/17.jpg";
import galleryImage18 from "../../assets/images/gallery/18.jpg";

const GalleryGrid = () => {
  return (
    <>
      <section className="page-banner">
        <div
          className="image-layer"
          style={{ backgroundImage: `url(${bannerImage})` }}
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
                <li className="filter" data-role="button" data-filter="all">
                  All
                </li>
                <li className="filter" data-role="button" data-filter=".banquet-pearl">
                  Banquet Hall - Pearl
                </li>
                <li className="filter active" data-role="button" data-filter=".banquet-shipre">
                  Banquet Hall - Shipre
                </li>
                <li className="filter" data-role="button" data-filter=".Restaurant">
                  Restaurant - Kohinoor
                </li>
                <li className="filter" data-role="button" data-filter=".DeluxRoom">
                  Delux Room
                </li>
                <li className="filter" data-role="button" data-filter=".PremiumRoom">
                  Premium Suite Room
                </li>
                <li className="filter" data-role="button" data-filter=".FamilyRoom">
                  Family Suite Room
                </li>
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
