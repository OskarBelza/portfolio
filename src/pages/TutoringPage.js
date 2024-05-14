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
            <div className="schedule-container">
                <div className="day-container">
                    <div className="day-header">Monday</div>
                    <hr className="divider" />
                    <div className="time-slot">
                        <div className="time">10:00 AM</div>
                        <div className="reserve-button"><button>Reserve</button></div>
                    </div>
                    <div className="time-slot">
                        <div className="time">1:00 PM</div>
                        <div className="reserve-button"><button>Reserve</button></div>
                    </div>
                </div>
                <div className="day-container">
                    <div className="day-header">Tuesday</div>
                    <hr className="divider" />
                    <div className="time-slot">
                        <div className="time">9:00 AM</div>
                        <div className="reserve-button"><button>Reserve</button></div>
                    </div>
                    <div className="time-slot">
                        <div className="time">12:00 PM</div>
                        <div className="reserve-button"><button>Reserve</button></div>
                    </div>
                    <div className="time-slot">
                        <div className="time">3:00 PM</div>
                        <div className="reserve-button"><button>Reserve</button></div>
                    </div>
                </div>
                <div className="day-container">
                    <div className="day-header">Wednesday</div>
                    <hr className="divider" />
                    <div className="time-slot">
                        <div className="time">11:00 AM</div>
                        <div className="reserve-button"><button>Reserve</button></div>
                    </div>
                    <div className="time-slot">
                        <div className="time">2:00 PM</div>
                        <div className="reserve-button"><button>Reserve</button></div>
                    </div>
                    <div className="time-slot">
                        <div className="time">5:00 PM</div>
                        <div className="reserve-button"><button>Reserve</button></div>
                    </div>
                </div>
                <div className="day-container">
                    <div className="day-header">Thursday</div>
                    <hr className="divider" />
                    <div className="time-slot">
                        <div className="time">10:00 AM</div>
                        <div className="reserve-button"><button>Reserve</button></div>
                    </div>
                    <div className="time-slot">
                        <div className="time">1:00 PM</div>
                        <div className="reserve-button"><button>Reserve</button></div>
                    </div>
                    <div className="time-slot">
                        <div className="time">4:00 PM</div>
                        <div className="reserve-button"><button>Reserve</button></div>
                    </div>
                </div>
                <div className="day-container">
                    <div className="day-header">Friday</div>
                    <hr className="divider" />
                    <div className="time-slot">
                        <div className="time">9:00 AM</div>
                        <div className="reserve-button"><button>Reserve</button></div>
                    </div>
                    <div className="time-slot">
                        <div className="time">12:00 PM</div>
                        <div className="reserve-button"><button>Reserve</button></div>
                    </div>
                    <div className="time-slot">
                        <div className="time">3:00 PM</div>
                        <div className="reserve-button"><button>Reserve</button></div>
                    </div>
                </div>
                <div className="day-container">
                    <div className="day-header">Saturday</div>
                    <hr className="divider" />
                    <div className="time-slot">
                        <div className="time">11:00 AM</div>
                        <div className="reserve-button"><button>Reserve</button></div>
                    </div>
                    <div className="time-slot">
                        <div className="time">2:00 PM</div>
                        <div className="reserve-button"><button>Reserve</button></div>
                    </div>
                    <div className="time-slot">
                        <div className="time">5:00 PM</div>
                        <div className="reserve-button"><button>Reserve</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TutoringPage;
