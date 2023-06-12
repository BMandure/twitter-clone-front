import img from "../assets/Travolta-confundido-el-meme-del-momento.png";

function NotTweets() {
  return (
    <div className="d-flex flex-column align-items-center mt-3">
      <img src={img} alt="" className="w-75" />
      <p className="fw-bold fs-2 text-center mt-2">
        No hay nada que ver aqui... Por ahora
      </p>
    </div>
  );
}

export default NotTweets;
