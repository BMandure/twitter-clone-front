import { Col, Row, Container } from "react-bootstrap";

import "./Home.css";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <Container>
      <Row>
        <Col sm={2}>
          <Sidebar />
        </Col>
        <Col sm={6}>Prueba</Col>
        <Col sm={4}>Abc</Col>
      </Row>
    </Container>
  );
}

export default Home;
