//Componentes y css

import FollowsHeader from "../components/FollowsHeader";
import FollowsCard from "../components/FollowsCard";
import "./followers.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

function Followings() {
  const params = useParams();

  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.token);
  const [following, setFollowing] = useState([]);
  const [data, setData] = useState(null);
  const [render, setRender] = useState(0);

  useEffect(() => {
    async function getFollowing() {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_BACK}users/${
          params.username
        }/following`,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setFollowing(response.data.following);
      setData(response.data);
    }
    getFollowing();
  }, [render]);

  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <FollowsHeader inFollowing={true} userData={data} />
      )}
      <section className="container-follow">
        {!following ? (
          <Loading />
        ) : (
          following.map((user) => (
            <FollowsCard key={user._id} follower={user} setRender={setRender} />
          ))
        )}
      </section>
    </>
  );
}

export default Followings;
