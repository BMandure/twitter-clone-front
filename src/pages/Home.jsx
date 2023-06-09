import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";

//Componentes y css
import "./Home.css";
import WriteATweet from "../components/WriteATweet";
import Tweet from "../components/Tweet";

function Home() {
  const [tweets, setTweets] = useState([]);
  const token = useSelector((state) => state.user.token);
  const [render, setRender] = useState(0);

  useEffect(() => {
    async function getTweets() {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3000/users/tweets",
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
      {tweets.length === 0 ? (
        <Loading />
      ) : (
        <WriteATweet setRender={setRender} />
      )}

      {tweets.length === 0 ? (
        <Loading />
      ) : (
        tweets.map((tweet) => {
          return (
            <Tweet
              key={tweet._id}
              tweet={tweet}
              author={tweet.author}
              setRender={setRender}
            />
          );
        })
      )}
    </>
  );
}

export default Home;
