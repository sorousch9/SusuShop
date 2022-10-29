import { Container, Row } from "react-bootstrap";
import "./anons.scss";
import { BsTruck, BsPeople } from "react-icons/bs";
import {
  RiMedal2Fill,
  RiShieldKeyholeLine,
} from "react-icons/ri";
export const Anons = () => {
  return (
    <Container className="container">
      <Row>
        <div className="anons-info">
          <p>
            über 7 Mio. Kunden{" "}
            <span>
              <BsPeople />
            </span>
          </p>

          <p>
            24h-Versand{" "}
            <span>
              <BsTruck />
            </span>
          </p>

          <i className="bussiness-shop">
            zum Geschäftskundenshop
          </i>

          <p>
            über 200.000 Artikel{" "}
            <span>
              <RiMedal2Fill />
            </span>
          </p>

          <p>
            Sicher einkaufen{" "}
            <span>
              <RiShieldKeyholeLine />
            </span>
          </p>
        </div>
      </Row>
    </Container>
  );
};
