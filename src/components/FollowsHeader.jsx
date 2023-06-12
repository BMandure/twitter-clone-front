import { Link, useParams } from "react-router-dom";

function FollowsHeader({ inFollowing, userData }) {
  const params = useParams();
  return (
    <section className="container border-bottom">
      <div className="pt-5">
        <div className="follow-container-header">
          <Link
            to={`/profile/${params.username}`}
            className="fs-3 text-decoration-none text-black d-block"
          >
            <i className="bi bi-arrow-left"></i>
          </Link>
          <div>
            <h3>
              {userData.firstname} {userData.lastname}
            </h3>
            <small className="mt-n2">@{userData.username}</small>
          </div>
        </div>

        <div className="follow-switcher">
          <Link
            to={`/profile/${params.username}/followers`}
            className={`link-switch ${
              inFollowing ? "button-not-underlined" : "button-border-underlined"
            }`}
          >
            Followers
          </Link>
          <Link
            to={`/profile/${params.username}/following`}
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
