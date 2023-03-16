import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import banner1 from "../../assets/373883.jpg";
import banner2 from "../../assets/4846461.jpg";
import banner3 from "../../assets/7303151.jpg";

export const Widget = () => {
  return (
    <Container>
      <Row>
        <Col md="4" lg="4">
          <Card>
            <Card.Img src={banner1} alt="Card image" />
            <Card.ImgOverlay className="widget">
              <Card.Title>Sport Berater</Card.Title>
              <Card.Text>
                Everything You Need to Know <br />
                Laufen mit uns
              </Card.Text>
              <Button>
                <Link
                  to={"/products"}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  entdecken
                </Link>
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md="4" lg="4">
          <Card>
            <Card.Img src={banner2} alt="Card image" />
            <Card.ImgOverlay className="widget">
              <Card.Title>Neuheiten</Card.Title>
              <Card.Text>
                FINDE DEN RICHTIGEN <br />
                das am besten zu dir passt.
              </Card.Text>
              <Button>
                <Link
                  to={"/products"}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  entdecken
                </Link>
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md="4" lg="4">
          <Card>
            <Card.Img src={banner3} alt="Card image" />
            <Card.ImgOverlay className="widget">
              <Card.Title> Modernen Produktion</Card.Title>
              <Card.Text>
                Die besten Laufschuhe <br />
                Hier geht es zu den besten Laufschuhen 2023!
              </Card.Text>
              <Button>
                <Link
                  to={"/products"}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  entdecken
                </Link>
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
