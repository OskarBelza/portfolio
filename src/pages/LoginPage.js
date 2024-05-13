// client/src/components/LoginPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', {
                email: formData.email,
                password: formData.password
            });
            if (response.status === 200) {
                toast.success("Login successful. Welcome back!");
                //setIsLoggedIn(true);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('Login failed: Incorrect email or password');
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit">Login</button>
            </form>
            <ToastContainer />
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
    );
};

export default LoginPage;
