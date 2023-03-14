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
                <h3>Comfortable Running Shoes</h3>
                <p>
                  These lightweight and breathable shoes are perfect for runners
                  who want a comfortable and supportive shoe that won't weigh
                  them down.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={banner2} alt="Second slide" />
              <Carousel.Caption className="caption-text">
                <h3>Stylish Leather Boots</h3>
                <p>
                  These sleek and sophisticated boots are made with high-quality
                  leather and are perfect for dressing up or down. They're a
                  must-have for any fashion-forward wardrobe.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={banner3} alt="Third slide" />
              <Carousel.Caption className="caption-text">
                <h3>Durable Hiking Boots</h3>
                <p>
                  Take on any trail with these rugged and durable hiking boots.
                  They're designed to keep your feet dry and comfortable on even
                  the toughest hikes.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs="12" sm="12" md="4" lg="4">
          <Figure>
            <Figure.Image src={pimg2} alt="Image description" />
            <Figure.Caption>
              Find the perfect shoes to complete your look at our online store.
              We offer a wide selection of shoes for men, women, and kids, with
              styles ranging from casual to formal.
            </Figure.Caption>
            <Button>
              <Link
                to="/products"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Shop now
              </Link>
            </Button>
          </Figure>
        </Col>
      </Row>
    </Container>
  );
};
