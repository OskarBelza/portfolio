import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css'; // Ensure this path is correct
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from "react-i18next";

const RegisterPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [showPassword, setShowPassword] = useState(false);
    const { t } = useTranslation('register');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!.%*?&])[A-Za-z\d@$!.%*?&]{8,}$/;
        return regex.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            toast.error(t('passwordMismatch'));
            return;
        }

        if (!validatePassword(password)) {
            toast.error(t('passwordCriteria'));
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/register', { name, email, password });
            if (response.status === 200) {
                toast.success(t('registerSuccess'));
                setFormData({ name: '', email: '', password: '', confirmPassword: '' }); // Clear the form
            } else {
                toast.error(t('registerFail'));
            }
        } catch (error) {
            toast.error(t('emailExist'));
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="auth-container">
            <h2>{t('register')}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('name')}
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                </div>
                <div>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder={t('password')}
                        required
                    />
                </div>
                <div>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder={t('confirmPassword')}
                        required
                    />
                </div>
                <div className="show-password-container">
                    <input
                        type="checkbox"
                        id="showPassword"
                        checked={showPassword}
                        onChange={togglePasswordVisibility}
                    />
                    <label htmlFor="showPassword">{t('showPassword')}</label>
                </div>
                <button type="submit">{t('signUp')}</button>
            </form>
            <ToastContainer />
            <p>{t('account')}<Link to="/login">{t('login')}</Link></p>
        </div>
    );
};

export default RegisterPage;
