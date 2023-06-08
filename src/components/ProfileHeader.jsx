import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FollowButton from "./FollowButton";

<<<<<<< HEAD
function ProfileHeader() {
  const user = useSelector((state) => state.user.userData);
=======
function ProfileHeader({ userData }) {
  console.log(userData.followers.length);
>>>>>>> 5e9d20c200969213e17b395ee9b65955a2c8331f
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
<<<<<<< HEAD

          <h1 className="m-0">
            {user.firstname} {user.lastname}
          </h1>
          <small className="profile-grey-user">@{user.username}</small>
=======
>>>>>>> 5e9d20c200969213e17b395ee9b65955a2c8331f
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

<<<<<<< HEAD
        <div
          className="col-5 d-flex d-flex flex-column align-items-end justify-content-between"
          id="follows-box"
        >
          <button type="submit" className="btn-lb me-2">
            Follow
          </button>
          <p className="profile-followers mx-3" id="follows-counter">
            <Link
              to={`/profile/${user.username}/following`}
              style={{ color: "black", textDecoration: "none" }}
            >
              <strong>{user.following.length}</strong> Following
            </Link>
            <Link
              to={`/profile/${user.username}/followers`}
              style={{ color: "black", textDecoration: "none" }}
            >
              <strong>{user.followers.length}</strong> Followers
            </Link>
          </p>
=======
            <h1 className="m-0">
              {userData.firstname} {userData.lastname}
            </h1>
            <small className="profile-grey-user">@{userData.username}</small>
          </div>

          <div
            className="col-5 d-flex d-flex flex-column align-items-end justify-content-between"
            id="follows-box"
          >
            <button type="submit" className="btn-lb me-2">
              Follow
            </button>
            <p className="profile-followers mx-3" id="follows-counter">
              <Link
                to="/profile/bandido/following"
                style={{ color: "black", textDecoration: "none" }}
              >
                <strong>{userData.following.length}</strong> Following
              </Link>
              <Link
                to="/profile/bandido/followers"
                style={{ color: "black", textDecoration: "none" }}
              >
                <strong>{userData.followers.length}</strong> Followers
              </Link>
            </p>
          </div>
>>>>>>> 5e9d20c200969213e17b395ee9b65955a2c8331f
        </div>
      </>
    )
  );
}

export default ProfileHeader;
