import "./Register_Login.css";

function Register() {
  return (
    <>
      <section className="container-fluid container-register">
        <div className="col-12 register-card-container">
          <div className="card mb-3 register-card">
            <div className="row g-0 register-container py-0">
              <div className="d-none d-md-inline col-md-5 col-lg-7 welcome-container">
                <img
                  src="twitter-logo-white.svg"
                  className="img-fluid rounded-start logo-welcome"
                  alt="imagen"
                />
                <h5 className="welcome-text card-text">
                  Hi! Welcome to Twitter Clone 👋
                </h5>
              </div>
              <div className="col-sm-12 col-md-7 col-lg-5 right-container">
                <div className="px-sm-5 card-body register-form-container">
                  <h2 className="card-title p-1">Sign Up</h2>
                  <p className="card-text p-1">
                    Create an account and start using Twitter
                  </p>
                  <form
                    action="/register"
                    method="POST"
                    encType="multipart/form-data"
                  >
                    <input
                      className="form-control my-2 py-2"
                      type="text"
                      id="firstname"
                      name="firstname"
                      required
                      placeholder="First Name"
                    />
                    <input
                      className="form-control my-2 py-2"
                      type="text"
                      id="lastname"
                      name="lastname"
                      required
                      placeholder="Last Name"
                    />
                    <input
                      className="form-control my-2 py-2"
                      type="text"
                      id="username"
                      name="username"
                      required
                      placeholder="Username"
                    />
                    <input
                      type="email"
                      className="form-control my-2 py-2"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                    <input
                      className="form-control my-2 py-2"
                      type="password"
                      id="password"
                      name="password"
                      required
                      placeholder="Password"
                    />
                    <input
                      className="form-control my-2 py-2"
                      type="file"
                      id="avatar"
                      name="avatar"
                    />

                    <button type="submit" className="btn-lb sign-up">
                      Sign Up
                    </button>
                    <small className="sign-text">
                      Already have an account?{" "}
                      <a href="/login" className="sign-link">
                        Sign in
                      </a>
                    </small>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
