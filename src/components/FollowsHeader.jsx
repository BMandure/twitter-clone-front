import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function FollowsHeader({ inFollowing }) {
  const user = useSelector((state) => state.user.userData);
  return (
    <section className="container border-bottom">
      <div className="row pt-5">
        <div className="col-1">
          <Link
            to="/profile/bandido"
            className="fs-3 text-decoration-none text-black d-block"
          >
            <i className="bi bi-arrow-left"></i>
          </Link>
        </div>
        <div className="col-11">
          <div>
            <h3>Aldu Piedrabuena</h3>
            <small className="mt-n2">@alduu</small>
          </div>
          <div className="d-flex justify-content-around mt-4">
            <Link
              to={`/profile/${user.username}/followers`}
              className={`fs-5  fw-semibold  pb-2 ${
                inFollowing
                  ? "button-not-underlined"
                  : "button-border-underlined"
              }`}
            >
              Followers
            </Link>
            <Link
              to={`/profile/${user.username}/following`}
              className={`fs-5  fw-semibold  pb-2 ${
                inFollowing
                  ? "button-border-underlined"
                  : "button-not-underlined"
              }`}
            >
              Following
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FollowsHeader;
