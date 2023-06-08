import { Link } from "react-router-dom";
import { format } from "date-fns";
import likeActive from "../assets/like-active.svg";
import like from "../assets/like.svg";
import deleteIcon from "../assets/delete.svg";
import { useSelector } from "react-redux";
import axios from "axios";

function Tweet({ tweet, setRender }) {
  const userData = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.token);

  function formatDate(createdAt) {
    return format(new Date(createdAt), "MM/dd/yyyy - hh:mm aaa");
  }

  function likebtn() {
    if (tweet.likes.includes(userData.id)) {
      return likeActive;
    } else {
      return like;
    }
  }

  const handleLike = async (event) => {
    event.preventDefault();

    const response = await axios({
      method: "PATCH",
      url: `http://localhost:3000/users/like/${tweet._id}`,
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return setRender((state) => state + 1);
  };

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
        <Link
          to={`/profile/${tweet.author.username}`}
          className="text-decoration-none text-black"
        >
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
            <img
              src={likebtn()}
              alt=""
              onClick={(event) => handleLike(event)}
            />
            {tweet.likes.length}
          </span>
          {userData.username === tweet.author.username && (
            <span>
              <img src={deleteIcon} alt="" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tweet;
