//Componentes y css

import FollowsHeader from "../components/FollowsHeader";
import FollowsCard from "../components/FollowsCard";
import "./followers.css";

function Followers() {
  const repetir = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <>
      <FollowsHeader inFollowing={false} />
      <section className="container">
        {repetir.map(() => (
          <FollowsCard />
        ))}
      </section>
    </>
  );
}

export default Followers;
