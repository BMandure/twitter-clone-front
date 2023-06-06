//Componentes y css
import "./Profile.css";
import Tweet from "../components/Tweet";
import ProfileHeader from "../components/ProfileHeader";

function Profile() {
  const repetir = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <>
      <ProfileHeader />
      {repetir.map(() => (
        <Tweet />
      ))}
    </>
  );
}

export default Profile;