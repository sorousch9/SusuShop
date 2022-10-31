
import { Col, Container, Row } from "react-bootstrap"
import "./subscribe.scss"

export const Subscribe = () => {
  return (
    <Container>
      <Row>
        <Col xl="5">
          <div className="subscribe-content">
            <h6></h6>
          </div>
        </Col>
        <Col xl="7">
          <div className="subscribe-image">
            <img src="" alt="subscribe"/>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
