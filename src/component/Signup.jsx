import axios from "axios";
import React, { useRef, useState } from "react";

const Signup = () => {
  const [data, setData] = useState([]);

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const user = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      name: nameRef.current.value,
      phone: phoneRef.current.value,
    };
    axios
      .post("http://localhost:4000/users/", user)
      .then((res) => {
        alert("Data added successfully!");
        event.target.reset();
      })
      .catch((err) => {
        alert("There was an error adding the data!", err);
      });
  }

  return (
    <div className="container">
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="row justify-content-center">
          <h3 className="my-4 text-center">Sign-up Form</h3>
          <div className="col-6">
            <div className="form-group">
              <label className="form-label">Username</label>
              <input type="text" className="form-control" ref={usernameRef} />
            </div>
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
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" ref={nameRef} />
            </div>
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input type="number" className="form-control" ref={phoneRef} />
            </div>
            <div className="mt-3">
              <input
                type="submit"
                className="btn btn-primary me-3"
                value="Sign-up"
              />
              <input type="reset" className="btn btn-secondary" value="Clear" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
