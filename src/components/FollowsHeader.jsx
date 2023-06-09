import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

function FollowsHeader({ inFollowing }) {
  const user = useSelector((state) => state.user.userData);
  return (
    <section className="container border-bottom">
      <div className="pt-5">
        <div className="follow-container-header">
          <Link
            to={`/profile/${user.username}`}
            className="fs-3 text-decoration-none text-black d-block"
          >
            <i className="bi bi-arrow-left"></i>
          </Link>
          <div>
            <h3>
              {user.firstname} {user.lastname}
            </h3>
            <small className="mt-n2">@{user.username}</small>
          </div>
        </div>

        <div className="follow-switcher">
          <Link
            to={`/profile/${user.username}/followers`}
            className={`link-switch ${
              inFollowing ? "button-not-underlined" : "button-border-underlined"
            }`}
          >
            Followers
          </Link>
          <Link
            to={`/profile/${user.username}/following`}
            className={`link-switch ${
              inFollowing ? "button-border-underlined" : "button-not-underlined"
            }`}
          >
            Following
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FollowsHeader;
