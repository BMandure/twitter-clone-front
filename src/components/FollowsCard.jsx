import { Link } from "react-router-dom";
import "./Follow.css";
import FollowButton from "./FollowButton";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function FollowsCard({ follower, setRender }) {
  const user = useSelector((state) => state.user);
  return (
    <Row className="follow-card">
      <Col xs={12} className="follow-card-container">
        {follower._id !== user.userData.id ? (
          <img
            src={
              follower.avatar.includes("http")
                ? follower.avatar
                : "http://localhost:3000/img/" + follower.avatar
            }
            className="follow-card-avatar-img"
            alt={`profile image of ${follower.username}`}
          />
        ) : (
          <img
            src={
              user.userData.avatar.includes("http")
                ? user.userData.avatar
                : "http://localhost:3000/img/" + user.userData.avatar
            }
            className="follow-card-avatar-img"
            alt={`profile image of ${user.userData.username}`}
          />
        )}

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
        <FollowButton
          idToFollow={follower._id}
          setRender={setRender}
          followers={follower.followers}
        />
      </Col>
    </Row>
  );
}

export default FollowsCard;
