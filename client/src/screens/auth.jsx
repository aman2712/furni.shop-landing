import { useState, useContext, useEffect } from "react";
import classes from "../styles/auth.module.css";
import bg from "../assets/header.jpg";
import Message from "../components/message";
import { useFetch } from "../hooks/useFetch";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import InputField from "../components/input";

const Auth = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [signUp, setSignUp] = useState(false);
  const [body, setBody] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  const [loginLoading, loginData, loginError, triggerLogin] = useFetch({
    endpoint: "/users/login",
    method: "POST",
  });

  const [registerLoading, registerData, registerError, triggerRegister] =
    useFetch({
      endpoint: "/users",
      method: "POST",
    });

  useEffect(() => {
    const handleAuthData = (data) => {
      setIsAuth(true);
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    };

    if (registerData) handleAuthData(registerData.data);
    if (loginData) handleAuthData(loginData.data);
  }, [registerData, loginData, setIsAuth, navigate]);

  function handleChange(e) {
    const { id, value } = e.target;
    setBody((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }

  function handleFormSwitch() {
    setSignUp((prev) => !prev);
  }

  function handleSubmit() {
    if (signUp) {
      triggerRegister(body);
    } else {
      triggerLogin(body);
    }
  }

  return (
    <div className={classes.auth}>
      <form className={classes.form}>
        <h1>{signUp ? "Create Your Account" : "Sign In to furnishop"}</h1>
        {loginError && !signUp && (
          <Message type="error" text={loginError.message} />
        )}
        {registerError && signUp && (
          <Message type="error" text={registerError.message} />
        )}
        {signUp && (
          <InputField
            label="Name"
            type="text"
            id="name"
            value={body.name}
            onChange={handleChange}
            autoComplete="name"
          />
        )}
        <InputField
          label="Email"
          type="email"
          id="email"
          value={body.email}
          onChange={handleChange}
          autoComplete="email"
        />
        <InputField
          label="Password"
          type="password"
          id="password"
          value={body.password}
          onChange={handleChange}
          autoComplete="current-password"
        />
        <button
          type="button"
          disabled={loginLoading || registerLoading}
          onClick={handleSubmit}
        >
          Continue
        </button>
        {signUp ? (
          <p className={classes.bottomText}>
            Already have an account?{" "}
            <span onClick={handleFormSwitch}>Sign In</span>
          </p>
        ) : (
          <p className={classes.bottomText}>
            Don't have an account?{" "}
            <span onClick={handleFormSwitch}>Sign Up</span>
          </p>
        )}
      </form>
      <div className={classes.bgImg}>
        <img src={bg} alt="Login | Background" />
      </div>
    </div>
  );
};

export default Auth;
