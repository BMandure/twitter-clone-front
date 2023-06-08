import { Link } from "react-router-dom";
import { format } from "date-fns";
import likeActive from "../assets/like-active.svg";
import deleteIcon from "../assets/delete.svg";

function Tweet({ tweet }) {
  function formatDate(createdAt) {
    return format(new Date(createdAt), "MM/dd/yyyy - hh:mm aaa");
  }
  return (
    <div className="d-flex flex-row justify-content-between p-3 border-top">
      <div
        className="rounded-circle overflow-hidden mx-auto"
        style={{ height: "50px", width: "50px" }}
      >
        <img
          src={tweet.author.avatar}
          alt="fotoperfil"
          className="img-fluid"
          style={{ width: "65px", height: "65px", objectFit: "cover" }}
        />
      </div>
      <div style={{ width: "85%" }}>
        <Link to="/profile/bandido" className="text-decoration-none text-black">
          <p className="fw-bold d-inline">
            {tweet.author.firstname} {tweet.author.lastname}
          </p>
          <p className="text-secondary d-inline">
            @{tweet.author.username} • {formatDate(tweet.createdAt)}
          </p>
        </Link>
        <p>{tweet.text}</p>
        <div className="d-flex w-100 justify-content-between">
          <span>
            <img src={likeActive} alt="" />
            {tweet.likes.length}
          </span>
          <span>
            <img src={deleteIcon} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
