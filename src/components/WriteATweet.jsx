import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import "./writeATweet.css";

function WriteATweet({ setRender }) {
  const userData = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.token);
  const [text, setText] = useState("");
  const [err, setErr] = useState(null);
  async function textHandler(event) {
    event.preventDefault();
    if (text.length > 140) {
      return setErr("El texto no puede exceder los 140 caracteres");
    }
    const response = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_APP_BACK}/users/tweet`,
      data: {
        textTweet: text,
      },
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (response === "text cannot exceed 140 characters") {
      return setErr("El texto no puede exceder los 140 caracteres");
    }
    setText("");
    setErr(null);
    return setRender((state) => state + 1);
  }
  return (
    <form className="row my-3 mx-4" onSubmit={textHandler}>
      <h1 className="mb-3 fs-5 text-start px-0">Home</h1>
      <div className="col-2 wAT-container">
        <img
          src={
            userData.avatar.includes("http")
              ? userData.avatar
              : `${import.meta.env.VITE_SUPABASE_API_IMG}${userData.avatar}`
          }
          alt="img perfil"
          className="writeATweet-avatar"
        />
      </div>
      <div className="col-10 d-flex align-items-center disable-r-padding mx-auto">
        <textarea
          className="form-control border-0"
          id="textTweet"
          name="textTweet"
          placeholder="What's happening?"
          rows="3"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        ></textarea>
      </div>
      <div className="d-flex w-100 my-2 justify-content-end align-items-center px-0 gap-3">
        {text.length > 0 && (
          <span
            className={
              text.length > 140 &&
              "text-danger bg-danger bg-opacity-25 rounded-pill px-3"
            }
          >
            {140 - text.length}
          </span>
        )}
        <button type="submit" className="btn-lb">
          Tweet
        </button>
      </div>
      {err && (
        <p className="border text-center p-1 rounded bg-danger bg-opacity-25 text-danger">
          {err}
        </p>
      )}
    </form>
  );
}

export default WriteATweet;
