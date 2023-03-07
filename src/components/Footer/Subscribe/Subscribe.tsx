import { Col, Container, Row } from "react-bootstrap";
import "./subscribe.scss";
import coupon from "../../../assets/coupon.png";

export const Subscribe = () => {
  return (
    <div className="footer-subscribe">
      <Container>
        <Row>
          <Col md="5">
            <div className="subscribe-content">
              <h6 className="entry-subtitle">
                %20 Rabatt für Ihre erste Bestellung
              </h6>
              <h3 className="entry-title">
                Abonnieren Sie unseren Newsletter ...
              </h3>
              <div className="entry-teaser">
                <p>
                  Melden Sie sich jetzt für unser E-Mail-Abonnement an, um
                  Updates zu Werbeaktionen und Coupons zu erhalten.
                </p>
              </div>
              <div className="form-wrapper">
                <form className="form">
                  <div className="form-fields">
                    <span></span>
                    <input
                      className="subscribe-input"
                      type="email"
                      name="EMAIL"
                      placeholder="Ihre Email Adresse"
                      required
                    />
                    <input
                      className="subscribe-input-submit"
                      type="submit"
                      value="Abonnieren"
                    />
                  </div>
                </form>
              </div>
            </div>
          </Col>
          <Col md="7">
            <div className="subscribe-image">
              <img src={coupon} alt="subscribe" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
