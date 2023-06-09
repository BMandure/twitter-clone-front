import { Link } from "react-router-dom";
import "./Follow.css";
import FollowButton from "./FollowButton";
import { Col, Row } from "react-bootstrap";

function FollowsCard({ follower, setRender }) {
  return (
    <Row className="follow-card">
      <Col xs={12} className="follow-card-container">
        <img
          src={follower.avatar}
          className="follow-card-avatar-img"
          alt={`profile image of ${follower.username}`}
        />
        <div className="follow-username">
          <p className="title-followers">
            {`${follower.firstname} ${follower.lastname}`}{" "}
          </p>
          <Link
            to={`/profile/${follower.username}`}
            className="follow-username-link"
          >
            <small className="mt-n3">@{follower.username}</small>
          </Link>
        </div>
        <FollowButton idToFollow={follower.id} setRender={setRender} />
      </Col>
    </Row>
  );
}

export default FollowsCard;
