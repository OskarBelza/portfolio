import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/contact.css';
import { useTranslation } from 'react-i18next';

function ContactPage() {
    const { t } = useTranslation('contact');

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

        const emailData = {
            service_id: process.env.REACT_APP_EMAIL_SERVICE_ID,
            template_id: process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            user_id: process.env.REACT_APP_EMAIL_USER_ID,
            template_params: {
                from_name: formData.name,
                from_email: formData.email,
                to_name: 'Your Name',
                message: formData.message
            }
        };

        emailjs.send(
            emailData.service_id,
            emailData.template_id,
            emailData.template_params,
            emailData.user_id
        )
            .then((response) => {
                console.log('Email sent:', response);
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                toast.success(t('emailSent'));
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                toast.error(t('emailError'));
            });
    };

    return (
        <div className="form-container">
            <h2>{t('contactMe')}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('name')}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('Email')}
                    />
                </div>
                <div>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t('message')}
                    ></textarea>
                </div>
                <div className="button-container">
                    <button type="submit">{t('send')}</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
}

export default ContactPage;
