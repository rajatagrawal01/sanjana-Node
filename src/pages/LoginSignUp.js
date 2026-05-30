import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import Swal from 'sweetalert2';
export default function LoginSignUp() {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const navigate = useNavigate();
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  const isValid = emailRegex.test(email) &&
    passRegex.test(pass);
  const handleSignup = () => {
    const newUser = {
      name,
      email,
      pass
    }
    const oldUser = JSON.parse(localStorage.getItem("users")) || [];
    const alreadyExist = oldUser.find((user) =>
      user.email === email 
    )
    if (alreadyExist) {
      Swal.fire({
        title: 'Account Exists' ,
        text: 'User already registered with this email',
        icon: 'warning'
      })
      return;
    } else {
      oldUser.push(newUser);

      localStorage.setItem(
        "users",
        JSON.stringify(oldUser)
      );
      localStorage.setItem("loggedIn", true);

      localStorage.setItem(
        "currentUser",
        JSON.stringify(newUser)
      );

      Swal.fire({
        title: 'Success',
        text: 'Account Created successfully',
        icon: 'Success'
      }).then(() => {
        window.location.href = "/";
        navigate("/LoginPage");
      })
    }
  }
  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
        </div>
        <button className='cont' disabled={!checked || !email || !pass || !name || !isValid} onClick={handleSignup}>Continue</button>

        <p className="loginSignup-login">
          Already have an account? <span><Link to="/LoginPage" style={{ textDecoration: "none", color: "red" }}>Login here</Link></span>
        </p>

        <div className="loginSignup-agree">
          <input type="checkbox"
            onChange={(e) => setChecked(e.target.checked)} />
          <p>
            By continuing, i agree to the terms of use & privacy policy.
          </p>
        </div>

      </div>

    </div>
  );
}