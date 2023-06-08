import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//Componentes y css
import "./Profile.css";
import Tweet from "../components/Tweet";
import ProfileHeader from "../components/ProfileHeader";

function Profile() {
<<<<<<< HEAD
  return (
    <>
      <ProfileHeader />
      {/*repetir.map(() => (
        <Tweet />
      ))*/}
=======
  const token = useSelector((state) => state.user.token);
  const params = useParams();
  const [userData, setUserData] = useState(null);
  const [tweets, setTweets] = useState([]);
  const [render, setRender] = useState(0);

  useEffect(() => {
    async function getUserData() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/users/${params.username}`,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUserData(response.data);
      setTweets(response.data.tweets);
    }
    getUserData();
  }, [render]);

  return (
    <>
      {userData && <ProfileHeader userData={userData} />}
      {tweets &&
        tweets.map((tweet) => {
          return (
            <Tweet
              key={tweet._id}
              tweet={tweet}
              author={userData}
              setRender={setRender}
            />
          );
        })}
>>>>>>> 5e9d20c200969213e17b395ee9b65955a2c8331f
    </>
  );
}

export default Profile;
