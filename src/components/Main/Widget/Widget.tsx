import "./widget.scss";
import banner1 from "../../../assets/373883.jpg";
import banner2 from "../../../assets/4846461.jpg";
import banner3 from "../../../assets/7303151.jpg";

export const Widget = () => {
  return (
    <div className="widget-container">
      <div className="widget-wrapper">
        <div className="widget-col">
          <div className="banner-content">
            <div className="content-main">
              <h6 className="b-black"> Neu für Ihr Büro</h6>
              <h3>Gütes Gefühl am Arbeiten</h3>
              <p>Freude am Arbeitsumfeld</p>
            </div>
            <div className="button"> entdecken</div>
          </div>
          <div className="banner-thumbnail">
            <img src={banner1} alt="banner" />
          </div>
        </div>
        <div className="widget-col">
          <div className="banner-content">
            <div className="content-main">
              <h6>Neuheiten</h6>
              <h3>Elegante Haushaltsartikel</h3>
              <p>Gute Dinge kommen bald... </p>
            </div>
            <div className="button"> entdecken</div>
          </div>
          <div className="banner-thumbnail">
            <img src={banner2} alt="banner" />
          </div>
        </div>{" "}
        <div className="widget-col">
          <div className="banner-content">
            <div className="content-main">
              <h6> Modernen Produktion</h6>
              <h3>Nachhaltigkeit</h3>
              <p>Weniger neue Ressourcen für die Produktion </p>
            </div>
            <div className="button"> entdecken</div>
          </div>
          <div className="banner-thumbnail">
            <img src={banner3} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
};
