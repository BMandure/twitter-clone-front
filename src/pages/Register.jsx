import "./Register_Login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import logoWhite from "../assets/twitter-logo-white.svg";

function Register() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState();
  const [error, setError] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);

    const response = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_APP_BACK}register`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response.data.err === "err") {
      return setError(response.data.message);
    }
    setError(null);
    return navigate("/login");
  };

  return (
    <>
      <section className="container-fluid container-register">
        <div className="col-12 register-card-container">
          <div className="card mb-3 register-card">
            <div className="row g-0 register-container py-0">
              <div className="d-none d-md-inline col-md-5 col-lg-7 welcome-container">
                <img
                  src={logoWhite}
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
                  <form onSubmit={handleSubmit}>
                    <input
                      className="form-control my-2 py-2"
                      type="text"
                      id="firstname"
                      name="firstname"
                      required
                      placeholder="First Name"
                      onChange={(event) => setFirstname(event.target.value)}
                      value={firstname}
                    />
                    <input
                      className="form-control my-2 py-2"
                      type="text"
                      id="lastname"
                      name="lastname"
                      required
                      placeholder="Last Name"
                      onChange={(event) => setLastname(event.target.value)}
                      value={lastname}
                    />
                    <input
                      className="form-control my-2 py-2"
                      type="text"
                      id="username"
                      name="username"
                      required
                      placeholder="Username"
                      onChange={(event) => setUsername(event.target.value)}
                      value={username}
                    />
                    <input
                      type="email"
                      className="form-control my-2 py-2"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                      onChange={(event) => setEmail(event.target.value)}
                      value={email}
                    />
                    <input
                      className="form-control my-2 py-2"
                      type="password"
                      id="password"
                      name="password"
                      required
                      placeholder="Password"
                      onChange={(event) => setPassword(event.target.value)}
                      value={password}
                    />
                    <input
                      className="form-control my-2 py-2"
                      type="file"
                      accept="image/*"
                      id="avatar"
                      name="avatar"
                      onChange={(event) => setAvatar(event.target.files[0])}
                    />

                    {error && (
                      <p className="border text-center p-1 rounded bg-danger bg-opacity-25 text-danger">
                        {error}
                      </p>
                    )}

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
