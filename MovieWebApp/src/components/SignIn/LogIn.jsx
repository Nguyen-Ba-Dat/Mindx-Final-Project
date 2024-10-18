import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css';
const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogIn = (e) => {
        e.preventDefault();
        
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            // Lưu thông tin đăng nhập vào localStorage
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
            
            alert("Login successful! Welcome back.");
            navigate('/');  // Redirect to home page after Log in
        } else {
            alert("Invalid credentials, please try again.");
        }
    };

    return (
<div className="Login-container">
    <h2>Login Now</h2>
    <form onSubmit={handleLogIn}>
        <div className="input-group">
            <label>Username</label>
            <i className="bx bx-user"></i> 
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
        </div>
        <div className="input-group">
            <label>Password</label>
            <i className="bx bx-lock"></i>
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
            />
        </div>
        <button type="submit">Login</button>
    </form>

    <p>Forgot Password?<a href="/forgot-password">Click here</a></p>
    <p>New User? <a href="/signup">Register here</a></p>

    <div className="or-divider">Or Login with</div>

    <div className="social-buttons">
        <i className="bx bxl-facebook-square"></i> 
        <i className="bx bxl-twitter"></i>         
        <i className="bx bxl-pinterest"></i>       
        <i className="bx bxl-linkedin-square"></i> 
    </div>
</div>

    );
};

export default LogIn;
