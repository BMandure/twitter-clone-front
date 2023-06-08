import { Link } from "react-router-dom";
import avatar from "../assets/generic-avatar.svg";
import FollowButton from "./FollowButton";

function FollowsCard({ follower, setRender }) {
  return (
    <div className="row mt-1 follow-card">
      <div className="col-2 d-flex align-items-center">
        <img src={follower.avatar} className="w-75 followers-image" alt="..." />
      </div>
      <div className="col-10 d-flex justify-content-between  align-items-center pt-2 pb-2">
        <div>
          <Link
            to={`/profile/${follower.username}`}
            className="text-decoration-none text-black"
          >
            <p className="title-followers">
              {`${follower.firstname} ${follower.lastname}`}{" "}
            </p>
          </Link>
          <small className="mt-n3">@{follower.username}</small>
        </div>
        <FollowButton idToFollow={follower.id} setRender={setRender} />
      </div>
    </div>
  );
}

export default FollowsCard;
