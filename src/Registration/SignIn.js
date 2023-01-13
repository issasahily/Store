import "./SignIn.css";
const SignIn = () => {
  return (
    <form className="sign" autoComplete="on">
      <label htmlFor="user_email">Email</label>
      <input id="user_email" type="email" required />
      <label htmlFor="user_password">Password</label>
      <input id="user_password" type="password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignIn;
