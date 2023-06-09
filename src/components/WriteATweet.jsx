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
      url: "http://localhost:3000/users/tweet",
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
    return setRender((state) => state + 1);
  }
  return (
    <form className="row my-3 mx-4" onSubmit={textHandler}>
      <h1 className="mb-3 fs-5 text-start px-0">Home</h1>
      <div className="col-1 mx-0 px-0">
        <img
          src={userData.avatar}
          alt="img perfil"
          className="writeATweet-avatar"
        />
      </div>
      <div className="col-11 d-flex align-items-center disable-r-padding">
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
      <div className="d-flex w-100 my-2 justify-content-end px-0">
        <button
          type="submit"
          className="col-2 btn btn-lb rounded-pill justify-content-end"
        >
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
