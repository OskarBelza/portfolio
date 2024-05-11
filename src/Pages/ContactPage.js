import React, { useState } from 'react';
import '../Styles/contact.css'

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // tutaj możesz dodać logikę wysyłania formularza
        console.log(formData);
        // zerowanie formularza po wysłaniu
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="form-container">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactPage;

