import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function FollowButton({ idToFollow, setRender }) {
  const username = useParams(); //username lo uso en la ruta
  const token = useSelector((state) => state.user.token);

  async function handleFollow(event) {
    event.preventDefault();
    const response = await axios({
      method: "PATCH",
      url: `http://localhost:3000/users/${username}/follow`,
      headers: {
        Authorization: "Bearer " + token,
      },
      data: {
        userId: idToFollow,
      },
    });
    return setRender((state) => state + 1);
  }

  async function handleUnFollow(event) {
    event.preventDefault();
    const response = await axios({
      method: "PATCH",
      url: `http://localhost:3000/users/${username}/unfollow`,
      headers: {
        Authorization: "Bearer " + token,
      },
      data: {
        userId: idToFollow,
      },
    });
    return setRender((state) => state + 1);
  }

  return (
    <>
      {/* {abc ? abc : abc} */}
      <form onSubmit={handleFollow}>
        <button className="btn-lb me-2" type="submit">
          Follow
        </button>
      </form>

      <form onSubmit={handleUnFollow}>
        <button className="btn-lb me-2" type="submit">
          Unfollow
        </button>
      </form>
    </>
  );
}

export default FollowButton;
