import banner1 from "../../assets/banner.webp";
import banner2 from "../../assets/banner2.webp";
import banner3 from "../../assets/banner3.webp";
import pimg2 from "../../assets/slider3.jpg";
import { Link } from "react-router-dom";
import { Button, Carousel, Col, Container, Figure, Row } from "react-bootstrap";
export const MainBanner = () => {
  return (
    <Container className="module-main-banner">
      <Row>
        <Col xs="12" sm="12" md="8" lg="8">
          <Carousel variant="dark">
            <Carousel.Item>
              <img className="d-block w-100" src={banner1} alt="First slide" />
              <Carousel.Caption className="caption-text">
                <h3>Bequeme Laufschuhe</h3>
                <p>
                  Diese leichten und atmungsaktiven Schuhe sind perfekt für
                  Läufer die einen bequemen und stützenden Schuh wollen, der
                  nicht wiegt sie runter.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={banner2} alt="Second slide" />
              <Carousel.Caption className="caption-text">
                <h3>Stilvolle Lederstiefel</h3>
                <p>
                  Diese eleganten und raffinierten Stiefel sind mit hoher
                  Qualität gefertigt Leder und eignen sich perfekt zum An- und
                  Ausziehen. Sie sind ein Must-Have für jede modische Garderobe.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={banner3} alt="Third slide" />
              <Carousel.Caption className="caption-text">
                <h3>Strapazierfähige Wanderschuhe</h3>
                <p>
                  Nehmen Sie mit diesen robusten und langlebigen Wanderschuhen
                  jeden Trail in Angriff. Sie wurden entwickelt, um Ihre Füße
                  trocken und bequem zu halten die härtesten Wanderungen.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs="12" sm="12" md="4" lg="4">
          <Figure>
            <Figure.Image src={pimg2} alt="Image description" />
            <Figure.Caption>
              Finden Sie die perfekten Schuhe, um Ihren Look in unserem
              Online-Shop zu vervollständigen. Wir bieten eine große Auswahl an
              Schuhen für Männer, Frauen und Kinder, mit Stilen, die von lässig
              bis formell reichen.
            </Figure.Caption>
            <Button>
              <Link
                to="/products"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                entdecken
              </Link>
            </Button>
          </Figure>
        </Col>
      </Row>
    </Container>
  );
};
