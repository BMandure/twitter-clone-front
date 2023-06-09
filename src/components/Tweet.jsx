import { Link } from "react-router-dom";
import { format } from "date-fns";
import likeActive from "../assets/like-active.svg";
import like from "../assets/like.svg";
import deleteIcon from "../assets/delete.svg";
import { useSelector } from "react-redux";
import axios from "axios";
import "./tweet.css";

function Tweet({ tweet, author, setRender }) {
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
    <div className="tweet-container border-top">
      <div>
        <img
          src={author.avatar}
          alt="fotoperfil"
          className="img-fluid avatar"
        />
      </div>
      <div style={{ width: "85%" }}>
        <p className="tweet-name">
          {author.firstname} {author.lastname}
        </p>{" "}
        <Link to={`/profile/${author.username}`} className="tweet-username">
          <small>@{author.username}</small>
        </Link>
        <p className="text-secondary d-inline">
          {" "}
          • {formatDate(tweet.createdAt)}
        </p>
        <p>{tweet.text}</p>
        <div className="d-flex w-100 justify-content-between">
          <span className="like-btn" onClick={(event) => handleLike(event)}>
            <img src={likebtn()} alt="like button" />
            {tweet.likes.length}
          </span>
          {userData.username === author.username && (
            <span className="delete-btn">
              <img src={deleteIcon} alt="delete icon" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tweet;
