import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import FollowButton from "./FollowButton";
import { Col, Row } from "react-bootstrap";
import "./Profile.css";

function ProfileHeader({ userData, setRender, render }) {
  const params = useParams();

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
              src={
                userData.avatar.includes("http")
                  ? userData.avatar
                  : "http://localhost:3000/img/" + userData.avatar
              }
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
            <FollowButton
              setRender={setRender}
              idToFollow={userData.id}
              followers={userData.followers}
            />
            <div className="profile-followers mx-3" id="follows-counter">
              <Link
                to={`/profile/${params.username}/followers`}
                className="profile-follow-link"
              >
                <strong className="fw-bolder">
                  {userData.followers.length}
                </strong>{" "}
                Followers
              </Link>
              <Link
                to={`/profile/${params.username}/following`}
                className="profile-follow-link"
              >
                <strong className="fw-bolder">
                  {userData.following.length}
                </strong>{" "}
                Following
              </Link>
            </div>
          </Col>
        </Row>
      </>
    )
  );
}

export default ProfileHeader;
