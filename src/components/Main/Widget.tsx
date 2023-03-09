import banner1 from "../../assets/373883.jpg";
import banner2 from "../../assets/4846461.jpg";
import banner3 from "../../assets/7303151.jpg";

export const Widget = () => {
  return (
    <div className="widget-container">
      <div className="widget-wrapper">
        <div className="widget-col">
          <div className="banner-content">
            <div className="content-main">
              <h6 className="b-black"> Neu für Ihr Sport </h6>
              <h3>Laufen mit uns</h3>
              <p>Everything You Need to Know</p>
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
              <h3>FINDE DEN RICHTIGEN</h3>
              <p>
                Mit dem Online Shoe Advisor findest du das Laufschuh-Modell, das
                am besten zu dir passt.{" "}
              </p>
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
              <h3>Die besten Laufschuhe</h3>
              <p>Hier geht es zu den besten Laufschuhen 2023! </p>
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
