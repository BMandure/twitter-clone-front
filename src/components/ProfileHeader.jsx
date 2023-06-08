import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FollowButton from "./FollowButton";

function ProfileHeader({ userData }) {
  console.log(userData.followers.length);
  return (
    userData && (
      <>
        {" "}
        <div>
          <img
            src={"https://pbs.twimg.com/media/DeN6MsqW4AAUBDT.jpg"}
            alt="portrait"
            className="img-fluid profile-object-fit"
          />
        </div>
        <div className="row mt-3 mb-3">
          <div
            className="col-7 d-flex flex-column justify-content-around"
            id="profile-content"
          >
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
          </div>

          <div
            className="col-5 d-flex d-flex flex-column align-items-end justify-content-between"
            id="follows-box"
          >
            <FollowButton idToFollow={userData.id} />
            <p className="profile-followers mx-3" id="follows-counter">
              <Link
                to={`/profile/${userData.username}/following`}
                style={{ color: "black", textDecoration: "none" }}
              >
                <strong>{userData.following.length}</strong> Following
              </Link>
              <Link
                to={`/profile/${userData.username}/followers`}
                style={{ color: "black", textDecoration: "none" }}
              >
                <strong>{userData.followers.length}</strong> Followers
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  );
}

export default ProfileHeader;
