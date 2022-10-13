import { Container } from "react-bootstrap";
import "./anons.scss";
import { BsTruck,BsPeople } from "react-icons/bs";
import { RiArrowGoBackLine,RiMedal2Fill,RiShieldKeyholeLine } from "react-icons/ri";
export const Anons = () => {
  return (
    <Container className="container">
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

        <p>
          Rücksendung kostenlos{" "}
          <span>
            <RiArrowGoBackLine />
          </span>
        </p>

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
    </Container>
  );
};
