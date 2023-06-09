import { Link } from "react-router-dom";
import "./Sidebar.css";

//ICONOS
import twitterLogo from "../assets/twitter-logo.svg";
import homeIcon from "../assets/home.svg";
import profileIcon from "../assets/profile.svg";
import writeIcon from "../assets/write.svg";
import logoutIcon from "../assets/logout.svg";

import { useDispatch, useSelector } from "react-redux";
import { deleteToken } from "../redux/userSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);
  return (
    <aside className="sidebar-aside">
      <div
        className="d-flex flex-column justify-content-between"
        style={{ height: "100vh" }}
      >
        <div className="my-3">
          <Link to="/home" className="d-flex logo-twitter">
            <img src={twitterLogo} alt="" />
          </Link>
          <div className="sidebar-icon-container">
            <Link to="/home" className="sidebar-link">
              <div className="d-flex gap-2">
                <img src={homeIcon} alt="" className="icon-link" />
                <p className="profile-and-home my-0">Home</p>
              </div>
            </Link>
            <Link
              replace
              to={`/profile/${user.username}`}
              className="sidebar-link"
            >
              <div className="d-flex gap-2">
                <img src={profileIcon} alt="" className="icon-link" />
                <p className="profile-and-home my-0">Profile</p>
              </div>
            </Link>
          </div>
          <div>
            <Link
              to="/home"
              className="profile-and-home btn btn-lb rounded-pill py-2 w-100 btn-tweet text-center"
            >
              <p className="my-0 w-100">Tweet</p>
            </Link>
            <Link
              to="/home"
              className="btn p-2 btn-tweet-md  rounded-circle btn-lb icon-write"
            >
              <img src={writeIcon} className="image-write" alt="write image" />
            </Link>
          </div>
        </div>
        <div className="my-3" onClick={() => dispatch(deleteToken())}>
          <span className="btn btn-danger rounded-pill py-2 w-100 btn-tweet">
            Logout
          </span>
          <span className="btn p-2 btn-tweet-md rounded-circle btn-danger icon-logout">
            <img src={logoutIcon} alt="" className="image-logout" />
          </span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
