import { Col, Row, Container } from "react-bootstrap";
import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Trendings from "./Trendings";

function Middle() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/" && navigate("/home");
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col sm={2}>
            <Sidebar />
          </Col>
          <Col
            sm={6}
            className="border-end border-start p-0"
            style={{ minHeight: "100vh" }}
          >
            <Outlet />
          </Col>
          <Col sm={4}>
            <Trendings />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Middle;
