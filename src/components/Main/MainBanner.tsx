
import pimg from "../../assets/banner.webp";
import pimg2 from "../../assets/slider3.jpg";
import { Link } from "react-router-dom";
export const MainBanner = () => {
  return (
    <div className="module-main-banner">
      <div className="module-banner">
        <div className="main-right">
          <div className="main-slider">
            <div className="content-wrapper">
              <div className="content-header">
                <div className="content-description">Exclusives Angebot</div>
                <div className="content-discount">-18% Rabatt</div>
              </div>
              <div className="content-body">
                <h3 className="entry-title">
                  Machen Ihre<br></br> Arbeitsatmosphäre angenehmer
                </h3>
                <div className="content-text">
                  Nur diese Woche. Verpassen Sie nicht ...
                </div>
              </div>
              <div className="content-footer">
                <span className="price-text">ab</span>
                <span className="price">0,99 €</span>
              </div>
              <button className="banner-btn">Jetzt einkaufen</button>
            </div>
            <div className="img-wrapper">
              <img src={pimg} alt="office supplies" />
            </div>
            <Link to="/" className="overlay-link"></Link>
          </div>
        </div>
        <div className="main-left">
          <div className="main-slider2">
            <div className="content-wrapper">
              <div className="content-title">Böttcher AG</div>
              <div className="content-details">
                <div className="content-details c1">Unsere </div>
                <div className="content-details c2">Produkte</div>
              </div>
            </div>
            <div className="img-wrapper">
              <img src={pimg2} alt="ag" />
            </div>
            <Link to="/" className="overlay-link"></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
