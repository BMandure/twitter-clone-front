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
                Home
              </div>
            </Link>
            <Link
              replace
              to={`/profile/${user.username}`}
              className="sidebar-link"
            >
              <div className="d-flex gap-2">
                <img src={profileIcon} alt="" className="icon-link" />
                Profile
              </div>
            </Link>
          </div>
          <div className="gap-2 my-4">
            <Link
              to="/home"
              className="btn btn-lb rounded-pill py-2 w-100 btn-tweet"
            >
              Tweet
            </Link>
            <Link
              to="/home"
              className="btn btn-lb rounded-circle p-2 btn-tweet-md"
            >
              <img src={writeIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="my-3" onClick={() => dispatch(deleteToken())}>
          <span className="btn btn-danger rounded-pill py-2 w-100 btn-tweet">
            Logout
          </span>
          <span className="btn btn-danger rounded-circle p-2 btn-tweet-md">
            <img src={logoutIcon} alt="" />
          </span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
