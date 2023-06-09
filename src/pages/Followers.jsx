//Componentes y css

import FollowsHeader from "../components/FollowsHeader";
import FollowsCard from "../components/FollowsCard";
import "./followers.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Followers() {
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.token);
  const [followers, setFollowers] = useState([]);
  const [render, setRender] = useState(0);

  useEffect(() => {
    async function getFollowers() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/users/${user.username}/followers`,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setFollowers(response.data);
    }
    getFollowers();
  }, [render]);

  return (
    <>
      <FollowsHeader inFollowing={false} />
      <section className="container-follow">
        {followers &&
          followers.map((follower) => (
            <FollowsCard
              key={follower.id}
              follower={follower}
              setRender={setRender}
            />
          ))}
      </section>
    </>
  );
}

export default Followers;
