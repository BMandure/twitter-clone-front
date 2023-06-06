import "./Register_Login.css";

function Login() {
  return (
    <section className="container-fluid container-login">
      <div className="col-12 login-card-container">
        <div className="card mb-3 login-card">
          <div className="row g-0 login-container">
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
              <div className="px-sm-5 card-body login-form-container">
                <h2 className="card-title p-1">Sign In</h2>
                <p className="card-text p-1">Ready to start using Twitter?</p>
                <form action="/login" method="POST">
                  <input
                    className="form-control my-2 py-2"
                    type="text"
                    name="username_email"
                    placeholder="Username or email"
                  />
                  <input
                    className="form-control my-2 py-2"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  {/* <%if (messages.error){%>
                  <p className="border text-center p-1 rounded bg-danger bg-opacity-25 text-danger">
                    <%=messages.error%>
                  </p>
                  <%}%> */}
                  <button type="submit" className="btn-lb sign-up">
                    Sign In
                  </button>
                  <small className="sign-text">
                    Don't have an account?{" "}
                    <a href="/register" className="sign-link">
                      Sign Up
                    </a>
                  </small>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
