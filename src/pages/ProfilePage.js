import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/profile.css';
import {useTranslation} from "react-i18next";

function ProfilePage() {
    const { isLoggedIn, user, setIsLoggedIn } = useAuth();
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();
    const { t } = useTranslation('profile');


    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/bookings/${user._id}`);
                setBookings(response.data.bookings);
            } catch (error) {
                console.error('Failed to fetch user bookings:', error);
                toast.error(t('fetchFail'));
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
            toast.success(t('bookingSuccess'));
        } catch (error) {
            console.error('Failed to cancel booking:', error);
            toast.error(t('bookingFail'));
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false)
    };

    if (!isLoggedIn) {
        navigate('/login');
        return null;
    }

    return (
        <div className="profile-container">
            <div className="welcome-container">
                <h1>{t('welcome')}{user.name}!</h1>
            </div>
            <br/>
            <div className="bookings-container">
                <h2>{t('yourBookings')}</h2>
                <div className="booking-list">
                    {bookings.map((booking, index) => (
                        <div className="booking" key={index}>
                            {t(`days.${booking.day.toLowerCase()}`)} - {booking.time}
                            <button onClick={() => handleCancel(booking.day, booking.time)}>{t('cancel')}</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className='button-container'>
                <button onClick={handleLogout}>{t('logout')}</button>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default ProfilePage;
