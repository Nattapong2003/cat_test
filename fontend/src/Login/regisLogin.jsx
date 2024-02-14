import React from 'react'
import './style.css'; 
import './movement.js';
function regisLogin() {
  return (
    <div className="container" id="container">
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <span>use your email for register</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Sign In</h1>
                    <span>use your account</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Log In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-lefe">
                        <h1>Welcome Back</h1>
                        <p>please login with your personal info</p>
                        <button className="ghost" id="signIn">
                            Sign in
                        </button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend</h1>
                        <p>Enter your personal details for sign up</p>
                        <button className="ghost" id="signUp">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default regisLogin