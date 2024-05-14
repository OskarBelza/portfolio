// client/src/components/ProfilePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';
import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
    const { isLoggedIn, setIsLoggedIn } = useAuth();

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="form-container">
            <h1>Profile</h1>
            {isLoggedIn ? (
                <div>
                    <p>Welcome to your profile!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>Please log in to view your profile.</p>
            )}
        </div>
    );
};

export default ProfilePage;
