import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login Admin</h2>
        <form>
          <div className="input-group">
            <label htmlFor="adminId">Id Admin</label>
            <input
              type="text"
              id="adminId"
              placeholder="Masukkan Id Admin"
              required
            />
          </div>
          <div className="input-group">
            <div className="password-label">
              <label htmlFor="password">Password</label>
              <span
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Masukkan Password"
                required
              />
            </div>
          </div>
          <button type="submit" className="login-btn">
            Log in
          </button>
        </form>
        <p className="forgot-password">Forget your password</p>
      </div>
    </div>
  );
};

export default Login;
