import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/info";

const Authentication = () => {
  const [UserName, setUserName] = useState();
  const [pass, setPass] = useState();
  const [text, setText] = useState();
  const navigate = useNavigate();

  const formSubmit = (event) => {
    event.preventDefault();
    if (!UserName || !pass) {
      setText("Fill in the input");
    } else {
      setText("");
      if (data.dataName === UserName && data.dataPassword === pass) {
        navigate("/home");
      } else {
        setText("Login or password is wrong");
      }
    }
  };

  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={formSubmit} className="container sing_in">
        <h1 className="h3 mb-3 fw-normal text-white">Please sign in</h1>
        <h6>{text}</h6>
        <div className="form-floating">
          <input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            onChange={(e) => {
              setPass(e.target.value);
            }}
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" defaultValue="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </main>
  );
};

export default Authentication;
