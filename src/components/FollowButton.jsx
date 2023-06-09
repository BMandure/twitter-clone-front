import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

//Bootstrap
import Button from "react-bootstrap/Button";

function FollowButton({ idToFollow, setRender, followers, render }) {
  const username = useParams(); //username lo uso en la ruta
  const token = useSelector((state) => state.user.token);
  const loggedId = useSelector((state) => state.user.userData.id);

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
    return setRender(render + 1);
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
    return setRender((render) => render + 1);
  }

  return (
    <>
      {/* {abc ? abc : abc} */}
      {followers.includes(loggedId) ? (
        <form className="btn-follow-component" onSubmit={handleUnFollow}>
          <Button className="btn-lb btn-follow" type="submit">
            Unfollow
          </Button>
        </form>
      ) : (
        <form onSubmit={handleFollow}>
          <Button className="btn-lb btn-follow" type="submit">
            Follow
          </Button>
        </form>
      )}
    </>
  );
}

export default FollowButton;
