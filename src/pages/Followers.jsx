//Componentes y css

import FollowsHeader from "../components/FollowsHeader";
import FollowsCard from "../components/FollowsCard";
import "./followers.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

function Followers() {
  const params = useParams();
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.token);
  const [followers, setFollowers] = useState([]);
  const [data, setData] = useState(null);
  const [render, setRender] = useState(0);

  useEffect(() => {
    async function getFollowers() {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_BACK}/users/${
          params.username
        }/followers`,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setFollowers(response.data.followers);
      setData(response.data);
    }
    getFollowers();
  }, [render]);

  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <FollowsHeader inFollowing={false} userData={data} />
      )}
      <section className="container-follow">
        {!followers ? (
          <Loading />
        ) : (
          followers.map((follower) => (
            <FollowsCard
              key={follower.id}
              follower={follower}
              setRender={setRender}
            />
          ))
        )}
      </section>
    </>
  );
}

export default Followers;
