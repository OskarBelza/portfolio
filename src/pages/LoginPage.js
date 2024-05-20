import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/auth.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const { setIsLoggedIn, setUser } = useAuth();
    const location = useLocation();
    const showToast = location.state && location.state.showToast;
    const { t } = useTranslation('login');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', {
                email: formData.email,
                password: formData.password
            });
            if (response.status === 200) {
                setIsLoggedIn(true);
                setUser(response.data.user);
                navigate("/", { state: { showLoginSuccess: true } });
            } else {
                toast.error(t('loginFail'));
            }
        } catch (error) {
            toast.error(t('emailExist'));
        }
    };

    useEffect(() => {
        if (showToast) {
            toast.error(t('nonAuth'));
        }
    }, [showToast]);

    return (
        <div className="auth-container">
            <h2>{t('login')}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="password">{t('password')}</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit">{t('signIn')}</button>
            </form>
            <ToastContainer />
            <p>{t('account')}<Link to="/register">{t('register')}</Link></p>
        </div>
    );
};

export default LoginPage;
