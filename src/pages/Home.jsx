import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";

//Componentes y css
import "./Home.css";
import WriteATweet from "../components/WriteATweet";
import Tweet from "../components/Tweet";
import NotTweets from "../components/NotTweets";

function Home() {
  const [tweets, setTweets] = useState(null);
  const token = useSelector((state) => state.user.token);
  const [render, setRender] = useState(0);

  useEffect(() => {
    async function getTweets() {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_BACK}users/tweets`,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setTweets(response.data);
    }

    getTweets();
  }, [render]);
  return (
    <>
      <WriteATweet setRender={setRender} />

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
              author={tweet.author}
              setRender={setRender}
              setTweets={setTweets}
            />
          );
        })
      )}
    </>
  );
}

export default Home;
