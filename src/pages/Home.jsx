//Componentes y css
import "./Home.css";
import WriteATweet from "../components/WriteATweet";
import Tweet from "../components/Tweet";

function Home() {
  const repetir = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <>
      <WriteATweet />
      {repetir.map(() => (
        <Tweet />
      ))}
    </>
  );
}

export default Home;
