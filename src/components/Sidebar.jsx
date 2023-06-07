import { Link } from "react-router-dom";

//ICONOS
import twitterLogo from "../assets/twitter-logo.svg";
import homeIcon from "../assets/home.svg";
import profileIcon from "../assets/profile.svg";
import writeIcon from "../assets/write.svg";
import logoutIcon from "../assets/logout.svg";

import { useDispatch } from "react-redux";
import { deleteToken } from "../redux/userSlice";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <>
      <aside className="position-fixed px-3 w-auto" style={{ height: "100vh" }}>
        <div
          className="d-flex flex-column justify-content-between"
          style={{ height: "100vh" }}
        >
          <div className="my-3">
            <Link to="/home" className="d-flex logo-twitter">
              <img src={twitterLogo} alt="" />
            </Link>
            <div className="d-flex justify-content-center my-3">
              <div className="d-flex flex-column justify-content-between align-items-center">
                <Link to="/home" className="my-2">
                  <img src={homeIcon} alt="" />
                </Link>
                <Link to="/profile/Juancito" className="my-2">
                  <img src={profileIcon} alt="" />
                </Link>
              </div>
              <div className="flex-column justify-content-between ms-3 my-auto profile-and-home">
                <Link
                  to="/home"
                  className="text-decoration-none text-black fw-semibold fs-6 my-2"
                >
                  Home
                </Link>
                <Link
                  to="/profile/Juancito"
                  className="text-decoration-none text-black fw-semibold fs-6 my-2"
                >
                  Profile
                </Link>
              </div>
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
          <div
            className="d-grid gap-2 my-4"
            onClick={() => dispatch(deleteToken())}
          >
            <span className="btn btn-danger rounded-pill py-2 w-100 btn-tweet">
              Logout
            </span>
            <span className="btn btn-danger rounded-circle p-2 btn-tweet-md">
              <img src={logoutIcon} alt="" />
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
