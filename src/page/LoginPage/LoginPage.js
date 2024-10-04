import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/actions/authActions";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://prj666-team2-backend.vercel.app/api/users/login",
        {
          email,
          password,
        },
      );
      dispatch(setUser(response.data.user));
      navigate("/main");
    } catch (error) {
      console.error("Login error:", error); // 오류 메시지를 콘솔에 출력
      setMessage("Login failed");
    }
  };

  return (
    <div className="login-form" data-testid="login-1">
      <h2 className="login-title">Login</h2>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <button
        onClick={handleLogin}
        className="btn-login"
        data-testid="login-button"
      >
        Login
      </button>
      <p>{message}</p>
    </div>
  );
};

export default LoginPage;
