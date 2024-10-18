import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
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
            <h2>Log In</h2>
            <form onSubmit={handleLogIn}>
                <div className="input-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Log In</button>
            </form>
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
    );
};

export default LogIn;
