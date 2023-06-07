import { Link } from "react-router-dom";
import avatar from "../assets/generic-avatar.svg";

function FollowsCard() {
  return (
    <div className="row mt-1">
      <div className="col-2 d-flex align-items-center">
        <img src={avatar} className="w-75 followers-image" alt="..." />
      </div>
      <div className="col-10 d-flex justify-content-between  align-items-center pt-2 pb-2">
        <div>
          <Link
            to="/profile/juancito"
            className="text-decoration-none text-black"
          >
            <p className="title-followers">Juan Perez </p>
          </Link>
          <small className="mt-n3">@Juancito</small>
        </div>
        <button type="submit" className="btn fw-semibold button-following">
          Following
        </button>

        {/* <form action="/usuarios/<%=user.username%>/unfollow?_method=PATCH" method="POST">
                                    <input type="hidden" name="idToUnfollow" value="<%=userfollower.id%>">
                                    <button type="submit" className="btn fw-semibold button-following">Following</button>
                                </form> */}

        {/* // <form action="/usuarios/<%=user.username%>/follow?_method=PATCH" method="POST">
                                    //     <input type="hidden" name="idToFollow" value="<%=userfollower.id%>">
                                    //     <button type="submit" className="btn fw-semibold button-follow">Follow</button>
                                    // </form>      */}
      </div>
    </div>
  );
}

export default FollowsCard;
