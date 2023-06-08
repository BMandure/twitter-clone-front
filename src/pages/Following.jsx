//Componentes y css

import FollowsHeader from "../components/FollowsHeader";
import FollowsCard from "../components/FollowsCard";
import "./followers.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Followings() {
  const [following, setFollowing] = useState([]);
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    async function getFollowing() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/users/${user.username}/following`,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(response.data);
      setFollowing(response.data);
    }
    getFollowing();
  }, []);

  return (
    <>
      <FollowsHeader inFollowing={true} />
      <section className="container-follow">
        {following && following.map((user) => <FollowsCard follower={user} />)}
      </section>
    </>
  );
}

export default Followings;
