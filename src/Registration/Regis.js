import { Link } from "react-router-dom";
import "./Regis.css";
import { useState } from "react";
const Regis = () => {
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_Password] = useState("");
  const passRegEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^?&*]).{7,}/;

  const [error, seterror] = useState("");
  const changeHandler = (event) => {
    setPassword(event.target.value);
  };
  const changeHandlerConfirm = (event) => {
    setConfirm_Password(event.target.value);
  };
  const sumbitHandler = (e) => {
    e.preventDefault();
    seterror("");
    if (password.trim().length < 7) {
      seterror("password must contains at least seven caratter!");
    } else if (!passRegEx.test(password)) {
      seterror("must contains lowerCase & upercase & symbole & number!");
    } else if (password !== confirm_password) {
      seterror("passwords do not match!");
    }
  };
  return (
    <div className="input_data">
      <form onSubmit={sumbitHandler}>
        <label htmlFor="user_email">Email</label>
        <input id="user_email" type="email" required />
        <label htmlFor="user_name">Name</label>
        <input id="user_name" type="text" required />
        <label htmlFor="user_password">Password</label>
        <input
          id="user_password"
          type="password"
          onChange={changeHandler}
          required
        />
        <p className="error">{error}</p>
        <label htmlFor="user_password2">confirm Password</label>
        <input
          id="user_password2"
          type="password"
          onChange={changeHandlerConfirm}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        do you have an account?
        <Link to="/signin">Sign in</Link>
      </p>
    </div>
  );
};

export default Regis;
