import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();

    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const users = await axios.get("http://localhost:4000/users");
    const checkUser = users.data.find(
      (item) => item.email === user.email && item.password === user.password
    );

    if (checkUser) {
      alert("Login successful");
      navigate("/home");
    } else {
      alert("No account found. Redirecting to signup.");
      navigate("/signup");
    }
  }
  return (
    <div className="container">
      <form onSubmit={(event) => handleLogin(event)}>
        <div className="row justify-content-center">
          <h3 className="my-4 text-center">Login Form</h3>
          <div className="col-6">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" ref={emailRef} />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                ref={passwordRef}
              />
            </div>
            <div className="mt-3">
              <input
                type="submit"
                className="btn btn-primary me-3"
                value="Login"
              />
              <input type="reset" className="btn btn-secondary" value="Clear" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
