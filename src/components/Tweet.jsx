import { Link } from "react-router-dom";
import { format } from "date-fns";
import likeActive from "../assets/like-active.svg";
import like from "../assets/like.svg";
import deleteIcon from "../assets/delete.svg";
import retweet from "../assets/9041918_retweet_icon.svg";
import comment from "../assets/8664929_comment_chat_message_icon.svg";
import { useSelector } from "react-redux";
import axios from "axios";
import "./tweet.css";
import { Tooltip } from "antd";

function Tweet({ tweet, author, setTweets, setRender }) {
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
    const response = await axios({
      method: "PATCH",
      url: `${import.meta.env.VITE_APP_BACK}/users/like/${tweet._id}`,
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return setRender((state) => state + 1);
  };

  const handleDelete = async (event) => {
    setTweets((prevState) => prevState.filter((t) => t._id !== tweet._id));

    const response = await axios({
      method: "DELETE",
      url: `${import.meta.env.VITE_APP_BACK}/users/delete/${tweet._id}`,
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
          src={
            author.avatar.includes("http")
              ? author.avatar
              : `${import.meta.env.VITE_APP_BACK}/img/` + author.avatar
          }
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
        <p className="mb-1" style={{ overflowWrap: "break-word" }}>
          {tweet.text}
        </p>
        <div className="d-flex w-100 justify-content-between">
          <span className="d-flex gap-4">
            <img src={comment} alt="comment icon" />
            <img src={retweet} alt="retweet icon" />
            <span className="like-btn" onClick={(event) => handleLike(event)}>
              <img src={likebtn()} alt="like button" />
              {tweet.likes.length}
            </span>
          </span>
          {userData.username === author.username && (
            <span
              className="delete-btn"
              onClick={(event) => handleDelete(event)}
            >
              <Tooltip
                placement="left"
                title={"Delete tweet"}
                color={"#dc3545"}
              >
                <img src={deleteIcon} alt="delete icon" />
              </Tooltip>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tweet;
