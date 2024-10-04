import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordLengthMessage, setPasswordLengthMessage] = useState("");
  const [passwordComplexityMessage, setPasswordComplexityMessage] =
    useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchMessage, setPasswordMatchMessage] = useState("");
  const [role, setRole] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setMessage(
        "Password must be at least 8 characters long and contain uppercase letters, lowercase letters, and special characters.",
      );
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "https://prj666-team2-backend.vercel.app/api/users/register",
        {
          email,
          password,
          role,
          lastName,
          firstName,
        },
      );
      setMessage(response.data.message);
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      setMessage("Registration failed. Please try again.");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@myseneca\.ca$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const checkPasswordLength = (password) => {
    if (password.length < 8) {
      setPasswordLengthMessage("Password must be at least 8 characters long.");
    } else {
      setPasswordLengthMessage("");
    }
  };

  const checkPasswordComplexity = (password) => {
    const lowercase = /[a-z]/;
    const uppercase = /[A-Z]/;
    const digit = /\d/;
    const specialCharacter = /[@$!%*?&]/;

    if (
      !lowercase.test(password) ||
      !uppercase.test(password) ||
      !digit.test(password) ||
      !specialCharacter.test(password)
    ) {
      setPasswordComplexityMessage(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character. ",
      );
    } else {
      setPasswordComplexityMessage("");
    }
  };

  const passwordMatchCheck = (currentConfirmPassword) => {
    if (
      password &&
      currentConfirmPassword &&
      password !== currentConfirmPassword
    ) {
      setPasswordMatchMessage("Passwords do not match.");
    } else {
      setPasswordMatchMessage("");
    }
  };

  return (
    <div className="registration-form">
      <h2 className="register-title">Register</h2>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className="form-input-select"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className="form-input-select"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            checkPasswordLength(e.target.value);
            checkPasswordComplexity(e.target.value);
          }}
          placeholder="Password"
          required
        />
        <p className="password-errorMessage">{passwordLengthMessage}</p>
        <p className="password-errorMessage">{passwordComplexityMessage}</p>
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          className="form-input-select"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            passwordMatchCheck(e.target.value);
          }}
          placeholder="Confirm Password"
          required
        />
        <p className="password-errorMessage">{passwordMatchMessage}</p>
      </div>
      <div className="form-group">
        <label htmlFor="role">Role:</label>
        <select
          id="role"
          value={role}
          className="form-input-select"
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Job Title</option>
          <option value="Student">Student</option>
          <option value="Professor">Professor</option>
          <option value="Admin">Administrative staff</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          className="form-input-select"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          className="form-input-select"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
      </div>
      <button
        onClick={handleRegister}
        className="btn-register"
        data-testid="register-btn"
      >
        Register
      </button>
      <p>{message}</p>
    </div>
  );
};

export default RegisterPage;
