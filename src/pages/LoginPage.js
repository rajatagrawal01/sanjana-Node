import React, { useContext, useState } from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
export default function LoginPage() {
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const isValid = emailRegex.test(email) &&
        passRegex.test(pass);

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const matchUser = users.find((user) =>
            user.email === email &&
            user.pass === pass
        )
        if (matchUser) {
            localStorage.setItem("loggedIn", true);
            localStorage.setItem(
                "currentUser", JSON.stringify(matchUser)
            )
            // swal alert
            Swal.fire({
                title: 'Success!',
                text: 'Login Successfully',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                window.location.href = "/";
            })
        }
        else {
            Swal.fire({
                title: 'Error!',
                text: 'Invalid Email or Password',
                icon: 'error'
            })
        }
    }
    return (
        <div className="loginSignup">

            <div className="loginSignup-container">

                <h1>Login</h1>
            
                <div className="loginSignup-fields">
                    <input type="text" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
                </div>

                <button className='cont' disabled={!email || !pass || !isValid} onClick={handleLogin}>Continue</button>

                <p className="loginSignup-login">
                    Not a Member?Create an account
                    <span>
                        <Link to="/LoginSignUp" style={{ textDecoration: "none", color: "red" }}>
                            Sign Up
                        </Link>
                    </span>
                </p>
            </div>

        </div>
    )
}
