import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

//Componentes y css
import "./Profile.css";
import Tweet from "../components/Tweet";
import ProfileHeader from "../components/ProfileHeader";
import NotTweets from "../components/NotTweets";

function Profile() {
  const token = useSelector((state) => state.user.token);
  const params = useParams();
  const [userData, setUserData] = useState(null);
  const [tweets, setTweets] = useState([]);
  const [render, setRender] = useState(0);

  useEffect(() => {
    async function getUserData() {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_BACK}users/${params.username}`,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUserData(response.data);
      setTweets(response.data.tweets);
    }
    getUserData();
  }, [render, params]);

  return (
    <>
      {!userData ? (
        <Loading />
      ) : (
        <ProfileHeader
          userData={userData}
          setRender={setRender}
          render={render}
        />
      )}

      {!tweets ? (
        <Loading />
      ) : tweets.length === 0 ? (
        <NotTweets />
      ) : (
        tweets.map((tweet) => {
          return (
            <Tweet
              key={tweet._id}
              tweet={tweet}
              author={userData}
              setTweets={setTweets}
              setRender={setRender}
            />
          );
        })
      )}
    </>
  );
}

export default Profile;
