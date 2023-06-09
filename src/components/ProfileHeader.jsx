import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FollowButton from "./FollowButton";
import { Col, Row } from "react-bootstrap";
import "./Profile.css";

function ProfileHeader({ userData }) {
  return (
    userData && (
      <>
        <div>
          <img
            src={"https://pbs.twimg.com/media/DeN6MsqW4AAUBDT.jpg"}
            alt="portrait"
            className="img-fluid profile-object-fit"
          />
        </div>
        <Row className="mt-3 mb-3">
          <Col xs={7} id="profile-content">
            <img
              src={userData.avatar}
              alt="profile-image"
              className="profile-image"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            />

            <h1 className="m-0">
              {userData.firstname} {userData.lastname}
            </h1>
            <small className="profile-grey-user">@{userData.username}</small>
          </Col>

          <Col xs={5} id="follows-box">
            <FollowButton idToFollow={userData.id} />
            <div className="profile-followers mx-3" id="follows-counter">
              <Link
                to={`/profile/${userData.username}/following`}
                className="profile-follow-link"
              >
                <strong className="fw-bolder">
                  {userData.following.length}
                </strong>{" "}
                Following
              </Link>
              <Link
                to={`/profile/${userData.username}/followers`}
                className="profile-follow-link"
              >
                <strong className="fw-bolder">
                  {userData.followers.length}
                </strong>{" "}
                Followers
              </Link>
            </div>
          </Col>
        </Row>
      </>
    )
  );
}

export default ProfileHeader;
