import { Col, Row, Container } from "react-bootstrap";

//Componentes y css
import "./Home.css";
import Sidebar from "../components/Sidebar";
import Trendings from "../components/Trendings";
import WriteATweet from "../components/WriteATweet";
import Tweet from "../components/Tweet";

function Home() {
  const repetir = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <Container>
      <Row>
        <Col sm={2}>
          <Sidebar />
        </Col>
        <Col sm={6} className="border-end border-start p-0">
          <WriteATweet />
          {repetir.map(() => (
            <Tweet />
          ))}
        </Col>
        <Col sm={4}>
          <Trendings />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
