function Tweet() {
  return (
    <div className="d-flex flex-row justify-content-between p-3 border-top">
      <div
        className="rounded-circle overflow-hidden mx-auto"
        style={{ height: "50px", width: "50px" }}
      >
        <img
          src={"#"}
          alt="fotoperfil"
          className="img-fluid"
          style={{ width: "65px", height: "65px", objectFit: "cover" }}
        />
      </div>
      <div style={{ width: "85%" }}>
        <p className="fw-bold d-inline">Carlos Santana</p>
        <p className="text-secondary d-inline">@bandido 54 • 4hs ago</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut
          vitae odio atque veritatis aliquid nesciunt architecto voluptatibus
          doloremque, harum distinctio perspiciatis sequi numquam odit enim?
        </p>
        <div className="d-flex w-100 justify-content-between">
          <span>
            <img src={"like-active.svg"} alt="" />
          </span>
          <span>
            <img src={"delete.svg"} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
