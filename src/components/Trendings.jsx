import "./Trendings.css";

function Trendings() {
  return (
    <>
      <aside className="position-fixed px-3">
        <div id="trending-happening">
          <h6 className="trending-titles">What's happening</h6>
          <ul className="trending-list">
            <li className="trending-itemList">
              <p className="trending-greyText">Programming · Trending</p>
              <p className="trending-bolder">#MongoVsSequelize</p>
              <p className="trending-greyText">97.5K Tweets</p>
            </li>
            <li className="trending-itemList">
              <p className="trending-greyText">Entertainment · Trending</p>
              <p className="trending-bolder">#StarWars</p>
              <p className="trending-greyText">97.5K Tweets</p>
            </li>
            <li className="trending-itemList">
              <p className="trending-greyText">News · Trending</p>
              <p className="trending-bolder">#LifeInMars</p>
              <p className="trending-greyText">97.5K Tweets</p>
            </li>
          </ul>
        </div>
        <div id="trending-whoFollow">
          <h6 className="trending-titles">Who to follow</h6>
          <div className="row mt-3">
            <div className="col-2">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="unknowAvatar"
                style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              />
            </div>
            <div className="col-6">
              <p className="trending-bolder">HackAcademy</p>
              <small className="trending-greyText">@HackAcademyDev</small>
            </div>
            <div className="col-4 d-flex align-self-center">
              <button type="button" className="btn-lb px-4">
                Follow
              </button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-2">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="unknowAvatar"
                style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              />
            </div>
            <div className="col-6">
              <p className="trending-bolder">JavaScript</p>
              <small className="trending-greyText">@JavaScript</small>
            </div>
            <div className="col-4 d-flex align-self-center">
              <button type="button" className="btn-lb px-4">
                Follow
              </button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-2">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="unknowAvatar"
                style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              />
            </div>
            <div className="col-6">
              <p className="trending-bolder">MongoDB</p>
              <small className="trending-greyText">@MongoDB</small>
            </div>
            <div className="col-4 d-flex align-self-center">
              <button type="button" className="btn-lb px-4">
                Follow
              </button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-2">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="unknowAvatar"
                style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              />
            </div>
            <div className="col-6">
              <p className="trending-bolder">Node.js</p>
              <small className="trending-greyText">@nodejs</small>
            </div>
            <div className="col-4 d-flex align-self-center">
              <button type="button" className="btn-lb px-4">
                Follow
              </button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-2">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="unknowAvatar"
                style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              />
            </div>
            <div className="col-6">
              <p className="trending-bolder">MDN Web Docs</p>
              <small className="trending-greyText">@MozDevNet</small>
            </div>
            <div className="col-4 d-flex align-self-center">
              <button type="button" className="btn-lb px-4">
                Follow
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Trendings;
