import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

//Bootstrap
import Button from "react-bootstrap/Button";

function FollowButton({ idToFollow, setRender, followers }) {
  const username = useParams(); //username lo uso en la ruta
  const token = useSelector((state) => state.user.token);
  const loggedId = useSelector((state) => state.user.userData.id);

  async function handleFollow(event) {
    event.preventDefault();
    const response = await axios({
      method: "PATCH",
      url: `${import.meta.env.VITE_APP_BACK}users/${username}/follow`,
      headers: {
        Authorization: "Bearer " + token,
      },
      data: {
        userId: idToFollow,
      },
    });
    return setRender((prevState) => prevState + 1);
  }

  async function handleUnFollow(event) {
    event.preventDefault();
    const response = await axios({
      method: "PATCH",
      url: `${import.meta.env.VITE_APP_BACK}users/${username}/unfollow`,
      headers: {
        Authorization: "Bearer " + token,
      },
      data: {
        userId: idToFollow,
      },
    });
    return setRender((prevState) => prevState + 1);
  }

  return (
    <>
      {loggedId !== idToFollow &&
        (followers.includes(loggedId) ? (
          <form className="btn-follow-component" onSubmit={handleUnFollow}>
            <Button className=" btn-unfollow-white btn-follow" type="submit">
              Unfollow
            </Button>
          </form>
        ) : (
          <form onSubmit={handleFollow} className="btn-follow-component">
            <Button className="btn-lb btn-follow" type="submit">
              Follow
            </Button>
          </form>
        ))}
    </>
  );
}

export default FollowButton;
