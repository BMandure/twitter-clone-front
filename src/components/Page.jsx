import { Col, Row, Container } from "react-bootstrap";
import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Trendings from "./Trendings";
import "./page.css";

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
          <Col xs={1} xl={2}>
            <Sidebar />
          </Col>
          <Col xs={11} xl={6} className="center-page border-start border-end">
            <Outlet />
          </Col>
          <Col xs={0} xl={4}>
            <Trendings />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Middle;
