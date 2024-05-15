import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../context/AuthContext';
import "../styles/tutoring.css"

function TutoringPage() {
    const { isLoggedIn, user } = useAuth();
    const [schedule, setSchedule] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const response = await axios.get('http://localhost:5000/tutoring');
                setSchedule(response.data);
            } catch (error) {
                console.error('Failed to fetch tutoring schedule:', error);
                toast.error('Failed to fetch tutoring schedule');
            }
        };
        fetchSchedule();
    }, []);

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
            await axios.put('http://localhost:5000/tutoring', updatedSchedule); // Aktualizacja harmonogramu w bazie danych
            await axios.post('http://localhost:5000/reserve', { userId: user._id, day: updatedSchedule[dayIndex].day, time: selectedTime }); // Dodanie rezerwacji do użytkownika
        } catch (error) {
            console.error('Failed to update tutoring schedule:', error);
            toast.error('Failed to update tutoring schedule');
        }
    };

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login", { state: { showToast: true } });
        }
    }, [isLoggedIn, navigate]);

    return (
        <div className="tutoring-container">
            <h1>Tutoring</h1>
            <p>Here you can sign up for tutoring sessions.</p>
            <div className="schedule-container">
                {schedule.map((day, dayIndex) => (
                    <div className="day-container" key={dayIndex}>
                        <div className="day-header">{day.day}</div>
                        <hr className="divider" />
                        {day.times.map((time, timeIndex) => (
                            <div className="time-slot" key={timeIndex}>
                                <div className="time">{time}</div>
                                <div className="reserve-button">
                                    {day.bookings && day.bookings.find(booking => booking.time === time) ? (
                                        <button disabled>Reserved</button>
                                    ) : (
                                        <button onClick={() => handleReservation(dayIndex, timeIndex)}>Reserve</button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <ToastContainer />
        </div>
    );
}

export default TutoringPage;
