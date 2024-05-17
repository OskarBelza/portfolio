import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../context/AuthContext';
import "../styles/tutoring.css"
import {useTranslation} from "react-i18next";

function TutoringPage() {
    const { isLoggedIn, user } = useAuth();
    const [schedule, setSchedule] = useState([]);
    const navigate = useNavigate();
    const { t } = useTranslation('tutoring');


    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const response = await axios.get('http://localhost:5000/tutoring');
                setSchedule(response.data);
            } catch (error) {
                if(isLoggedIn) {
                    console.error('Failed to fetch tutoring schedule:', error);
                    toast.error(t('fetchFail'));
                }
            }
        };
        fetchSchedule();
    }, [isLoggedIn]);

    const handleReservation = async (dayIndex, timeIndex) => {
        try {
            const updatedSchedule = [...schedule];
            const selectedTime = updatedSchedule[dayIndex].times[timeIndex];
            updatedSchedule[dayIndex].times.splice(timeIndex, 1);
            if (!updatedSchedule[dayIndex].bookings) {
                updatedSchedule[dayIndex].bookings = [];
            }
            updatedSchedule[dayIndex].bookings.push({ time: selectedTime });
            setSchedule(updatedSchedule);
            await axios.put('http://localhost:5000/tutoring', updatedSchedule);
            await axios.post('http://localhost:5000/reserve', { userId: user._id, day: updatedSchedule[dayIndex].day, time: selectedTime });
            toast.success(t('bookingSuccess'))
        } catch (error) {
            if(isLoggedIn){
                console.error('Failed to update tutoring schedule:', error);
                toast.error(t('bookingFail'));
            }
        }
    };

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login", { state: { showToast: true } });
        }
    }, [isLoggedIn, navigate]);

    return (
        <div className="tutoring-container">
            <ToastContainer />
            <h1>{t('tutoring')}</h1>
            <p>{t('about')}</p>
            <div className="schedule-container">
                {schedule.map((day, dayIndex) => (
                    <div className="day-container" key={dayIndex}>
                        <div className="day-header">{t(`days.${day.day.toLowerCase()}`)}</div>
                        <hr className="divider" />
                        {day.times.map((time, timeIndex) => (
                            <div className="time-slot" key={timeIndex}>
                                <div className="time">{time}</div>
                                <div className="reserve-button">
                                    {day.bookings && day.bookings.find(booking => booking.time === time) ? (
                                        <button disabled>{t('reserve')}</button>
                                    ) : (
                                        <button onClick={() => handleReservation(dayIndex, timeIndex)}>{t('reserve')}</button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TutoringPage;
