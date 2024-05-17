import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useTranslation} from "react-i18next";

const RegisterPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const { t } = useTranslation('register');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', formData);
            if (response.status === 200) {
                toast.success(t('registerSuccess'));
            } else {
                toast.error(t('registerFail'));
            }
        } catch (error) {
            toast.error(t('emailExist'));
        }
    };

    return (
        <div className="auth-container">
            <h2>{t('register')}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">{t('name')}</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="password">{t('password')}</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit">{t('signUp')}</button>
            </form>
            <ToastContainer />
            <p>{t('account')}<Link to="/login">{t('login')}</Link></p>
        </div>
    );
};

export default RegisterPage;
