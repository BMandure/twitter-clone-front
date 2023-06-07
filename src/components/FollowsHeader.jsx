function FollowsHeader({ inFollowing }) {
  return (
    <section className="container border-bottom">
      <div className="row pt-5">
        <div className="col-1">
          <a
            href={"#"}
            className="fs-3 text-decoration-none text-black d-block"
          >
            <i class="bi bi-arrow-left"></i>
          </a>
        </div>
        <div className="col-11">
          <div>
            <h3>Aldu Piedrabuena</h3>
            <small className="mt-n2">@alduu</small>
          </div>
          <div className="d-flex justify-content-around mt-4">
            <a
              href={"#"}
              className={`fs-5  fw-semibold  pb-2 ${
                inFollowing
                  ? "button-not-underlined"
                  : "button-border-underlined"
              }`}
            >
              Followers
            </a>
            <a
              href={"#"}
              className={`fs-5  fw-semibold  pb-2 ${
                inFollowing
                  ? "button-border-underlined"
                  : "button-not-underlined"
              }`}
            >
              Following
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FollowsHeader;
