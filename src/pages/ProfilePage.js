import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/profile.css';

function ProfilePage() {
    const { isLoggedIn, user, setIsLoggedIn } = useAuth();
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/bookings/${user._id}`);
                setBookings(response.data.bookings);
            } catch (error) {
                console.error('Failed to fetch user bookings:', error);
                toast.error('Failed to fetch user bookings');
            }
        };
        if (isLoggedIn && user) {
            fetchBookings();
        }
    }, [isLoggedIn, user]);

    const handleCancel = async (day, time) => {
        try {
            await axios.put(`http://localhost:5000/cancel`, { userId: user._id, day, time });
            const updatedBookings = bookings.filter(booking => !(booking.day === day && booking.time === time));
            setBookings(updatedBookings);
            toast.success('Booking canceled successfully');
        } catch (error) {
            console.error('Failed to cancel booking:', error);
            toast.error('Failed to cancel booking');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false)
    };

    if (!isLoggedIn) {
        navigate('/login', { state: { showToast: true } });
        return null;
    }

    return (
        <div className="profile-container">
            <div className="welcome-container">
                <h1>Welcome, {user.name}!</h1>
            </div>
            <br/>
            <div className="bookings-container">
                <h2>Your Bookings:</h2>
                <div className="booking-list">
                    {bookings.map((booking, index) => (
                        <div className="booking" key={index}>
                            {booking.day} - {booking.time}
                            <button onClick={() => handleCancel(booking.day, booking.time)}>Cancel</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className='button-container'>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default ProfilePage;
