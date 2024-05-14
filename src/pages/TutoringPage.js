import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import "../styles/tutoring.css"

function TutoringPage() {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        return <Navigate to="/login" state={{ showToast: true }} />;
    }

    return (
        <div className="tutoring-container">
            <h1>Tutoring</h1>
            <p>Here you can sign up for tutoring sessions.</p>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required/>

                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" required/>

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default TutoringPage;
