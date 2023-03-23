import { Container, Row } from "react-bootstrap";
export const Anons = () => {
  return (
    <Container>
      <Row>
        <div className="anons-info">
          <p>
            über 7 Mio. Kunden{" "}
            <span>
              <i className="bi bi-person"></i>
            </span>
          </p>

          <p>
            24h-Versand{" "}
            <span>
              <i className="bi bi-truck"></i>
            </span>
          </p>

          <p>
            über 200.000 Artikel{" "}
            <span>
              <i className="bi bi-stack"></i>
            </span>
          </p>

          <p>
            Sicher einkaufen{" "}
            <span>
              <i className="bi bi-shield-check"></i>
            </span>
          </p>
        </div>
      </Row>
    </Container>
  );
};
