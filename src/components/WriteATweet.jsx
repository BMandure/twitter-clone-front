import { useSelector } from "react-redux";

function WriteATweet() {
  const userData = useSelector((state) => state.user.userData);
  return (
    <form className="row my-3 mx-4" action="usuarios/crear" method="POST">
      <h1 className="mb-3 fs-5 text-start px-0">Home</h1>
      <div className="col-1 mx-0 px-0">
        <div className="rounded-circle overflow-hidden px-0">
          <img
            src={userData.avatar}
            alt="img perfil"
            className="img-fluid"
            style={{ width: "50px", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="col-11 d-flex align-items-center disable-r-padding">
        <textarea
          className="form-control border-0"
          id="textTweet"
          name="textTweet"
          placeholder="What's happening?"
          rows="3"
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
    </form>
  );
}

export default WriteATweet;
