import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            // Lưu thông tin đăng nhập vào localStorage
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
            
            alert("Login successful! Welcome back.");
            navigate('/');  // Redirect to home page after sign in
        } else {
            alert("Invalid credentials, please try again.");
        }
    };

    return (
        <div className="signin-container">
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
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
                <button type="submit">Sign In</button>
            </form>
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
    );
};

export default SignIn;
