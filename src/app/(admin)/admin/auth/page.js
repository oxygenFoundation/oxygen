"use client";

import { useState } from "react";
import "../auth.css";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className={`cont ${isSignup ? "s--signup" : ""}`}>
      {/* Sign In Form */}
      <div className="form sign-in">
        <h2>Welcome</h2>
        <label>
          <span>Email</span>
          <input type="email" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" />
        </label>
        <p className="forgot-pass">Forgot password?</p>
        <button type="button" className="submit">Sign In</button>
      </div>

      {/* Right Side Panel */}
      <div className="sub-cont">
        <div className="img">
          <div className="img__text m--up">
            <h3>Don&apos;t have an account? Please Sign up!</h3>
          </div>
          <div className="img__text m--in">
            <h3>If you already have an account, just sign in.</h3>
          </div>
          <div className="img__btn" onClick={() => setIsSignup(!isSignup)}>
            <span className="m--up">Sign Up</span>
            <span className="m--in">Sign In</span>
          </div>
        </div>

        {/* Sign Up Form */}
        <div className="form sign-up">
          <h2>Create your Account</h2>
          <label>
            <span>Name</span>
            <input type="text" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" />
          </label>
          <button type="button" className="submit">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
