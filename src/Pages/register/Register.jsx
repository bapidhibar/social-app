import React from 'react'
import "./register.css";

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">FriendBook</h3>
                <span className="loginDesc">
                    Connect with friends and the World around you on FriendBook.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                  <input placeholder="Username" className="loginInput"/>
                    <input placeholder="Email" className="loginInput"/>
                    <input placeholder="Password" className="loginInput"/>
                    <input placeholder=" Confirm Password" className="loginInput"/>
                    <button className="loginButton">Sign Up</button>
                
                    <button className="loginRegisterButton">Login in your Account</button>
                </div>
            </div>

        </div>
    </div>
  )
}
