import "./bottom.scss";
import { Col, Container, Row } from "react-bootstrap";
import paypal from "../../../assets/paypal.png";
import visa from "../../../assets/Visa.png";
import giro from "../../../assets/Giro.png";
import sofort from "../../../assets/sofort.png";

export const Bottom = () => {
  return (
    <div className="footer-bottom">
      <Container>
        <Row>
          <Col>
            <div className="footer-widgets">
              <div className="widgets-title">
                <h4>Zahlungsmöglichkeiten</h4>
              </div>
              <div className="widgets-content">
                <ul>
                  <li>Rechnung</li>
                  <li>Lastschrift</li>
                  <li>Vorkasse</li>
                  <li>
                    <img src={paypal} alt="paypal" />
                  </li>
                  <li>
                    <img src={visa} alt="visa" />
                  </li>
                  <li>
                    <img src={giro} alt="giro" />
                  </li>
                  <li>
                    <img src={sofort} alt="sofort" />
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col>
            <div className="footer-widgets">
              <div className="widgets-title">
                <h4>Unsere Vorteile</h4>
              </div>
              <div className="widgets-content">
                <ul>
                  <li>
                    24h-Versand <span className="send"></span>
                  </li>
                  <li>
                    Rücksendung kostenlos <span className="back"></span>
                  </li>
                  <li>
                    über 7 Mio. Kunden <span className="customer"></span>
                  </li>
                  <li>
                    über 200.000 Artikel <span className="article"></span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col>
            <div className="footer-widgets">
              <div className="widgets-title">
                <h4>Mein Konto</h4>
              </div>
              <div className="widgets-content">
                <ul>
                  <li>Meine Bestellungen</li>
                  <li>Paketverfolgung</li>
                  <li>Rücksendung & Reklamation</li>
                  <li>Zahlungen & Rechnungen</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col>
            <div className="footer-widgets">
              <div className="widgets-title">
                <h4>Susu shop</h4>
              </div>
              <div className="widgets-content">
                <ul>
                  <li>Kontakt</li>
                  <li>Hilfe</li>
                  <li>Kunden über uns</li>
                  <li>Wir über uns</li>
                  <li>Jobs</li>
                  <li>Impressum</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col>
            <div className="footer-widgets">
              <div className="widgets-title">
                <h4>Informationen</h4>
              </div>
              <div className="widgets-content">
                <ul>
                  <li>AGB</li>
                  <li>Datenschutz</li>
                  <li>Widerruf</li>
                  <li>über 200.000 Artikel</li>
                  <li>ElektroG</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
