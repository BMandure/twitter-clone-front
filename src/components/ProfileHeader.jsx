import { Link } from "react-router-dom";

function ProfileHeader() {
  return (
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
            src={"#"}
            alt="profile-image"
            className="profile-image"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          />

          <h1 className="m-0">Juan Perez</h1>
          <small className="profile-grey-user">@juancitoperez</small>
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
              <strong>100000</strong> Following
            </Link>
            <Link
              to="/profile/bandido/followers"
              style={{ color: "black", textDecoration: "none" }}
            >
              <strong>1</strong> Followers
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
