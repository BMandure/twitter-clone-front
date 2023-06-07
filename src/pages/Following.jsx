//Componentes y css

import FollowsHeader from "../components/FollowsHeader";
import FollowsCard from "../components/FollowsCard";
import avatar from "../assets/generic-avatar.svg";
import "./followers.css";

function Followings() {
  const repetir = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <>
      <FollowsHeader inFollowing={true} />
      <section className="container">
        {repetir.map(() => (
          <FollowsCard />
        ))}
      </section>
    </>
  );
}

export default Followings;
