import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

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
      <WriteATweet setRender={setRender} />
      {tweets.map((tweet) => {
        return <Tweet key={tweet._id} tweet={tweet} setRender={setRender} />;
      })}
    </>
  );
}

export default Home;
