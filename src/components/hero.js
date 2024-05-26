import React from 'react';
import img from '../resources/h_porp.jpg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/hero.css';  // Import the CSS file

function Hero() {
    const { t } = useTranslation('hero');

    return (
        <div
            className='hero'
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className='mask'>
                <div className='content'>
                    <h1 className='mb-3'>{t('myPortfolio')}</h1>
                    <Link to="/cv">
                        <button className='btn btn-outline-light btn-lg'>
                            {t('showCV')}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
