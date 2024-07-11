import classes from "../styles/auth.module.css";
import bg from "../assets/header.jpg";
// import Message from "../components/message";

const Auth = () => {
  return (
    <div className={classes.auth}>
      <form className={classes.form}>
        <h1>Sign In to furnishop</h1>
        <div className={classes.inputContainer}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            autoComplete="email"
          />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            autoComplete="current-password"
          />
        </div>
        <button>Continue</button>
      </form>
      <div className={classes.bgImg}>
        <img src={bg} alt="Login | Background" />
      </div>
    </div>
  );
};

export default Auth;
