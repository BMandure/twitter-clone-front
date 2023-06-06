//ICONOS
import twitterLogo from "../assets/twitter-logo.svg";
import homeIcon from "../assets/home.svg";
import profileIcon from "../assets/profile.svg";
import writeIcon from "../assets/write.svg";
import logoutIcon from "../assets/logout.svg";

function Sidebar() {
  return (
    <>
      <aside className="position-fixed px-3 w-auto" style={{ height: "100vh" }}>
        <div
          className="d-flex flex-column justify-content-between"
          style={{ height: "100vh" }}
        >
          <div className="my-3">
            <a className="d-flex logo-twitter">
              <img src={twitterLogo} alt="" />
            </a>
            <div className="d-flex justify-content-center my-3">
              <div className="d-flex flex-column justify-content-between align-items-center">
                <a className="my-2">
                  <img src={homeIcon} alt="" />
                </a>
                <a className="my-2">
                  <img src={profileIcon} alt="" />
                </a>
              </div>
              <div className="flex-column justify-content-between ms-3 my-auto profile-and-home">
                <a className="text-decoration-none text-black fw-semibold fs-6 my-2">
                  Home
                </a>
                <a className="text-decoration-none text-black fw-semibold fs-6 my-2">
                  Profile
                </a>
              </div>
            </div>
            <div className="gap-2 my-4">
              <a className="btn btn-lb rounded-pill py-2 w-100 btn-tweet">
                Tweet
              </a>
              <a className="btn btn-lb rounded-circle p-2 btn-tweet-md">
                <img src={writeIcon} alt="" />
              </a>
            </div>
          </div>
          <form className="d-grid gap-2 my-4" action="/logOut" method="POST">
            <button className="btn btn-danger rounded-pill py-2 w-100 btn-tweet">
              Logout
            </button>
            <button className="btn btn-danger rounded-circle p-2 btn-tweet-md">
              <img src={logoutIcon} alt="" />
            </button>
          </form>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;