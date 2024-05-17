import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';
import Hero from "../components/hero";
import img from "../resources/avatar.png";
import python from "../resources/Python.webp";
import java from "../resources/java.png";
import flask from "../resources/flask.svg";
import sklearn from "../resources/sklearn.png";
import git from "../resources/git.png";
import algorithm from "../resources/algorithm.png";

function HomePage() {
    const { isLoggedIn } = useAuth();
    const { t } = useTranslation('home');

    useEffect(() => {
        if (isLoggedIn) {
            toast.success(t('login'));
        }
    }, [isLoggedIn]);

    return (
        <main>
            <Hero />
            <div className="about-container">
                <div className="text-container">
                    <ToastContainer/>
                    <h2>{t('aboutMe')}</h2>
                    <p>{t('greeting')}</p>
                </div>
                <div className="image-container">
                <img src={img} alt="profile" />
                </div>
            </div>

            <div className="skills-container">
                <div className="skill-box">
                    <div className="text-container">
                        <h3>Python</h3>
                        <ul className="dot-list">
                            <li>OOP</li>
                            <li>ML Libraries</li>
                            <li>Flask</li>
                            <li>Tkinter</li>
                            <li>Beautiful Soap</li>
                            <li>Matplotlib</li>
                        </ul>
                        <div className="progress-bar">
                            <progress value={80} max="100"></progress>
                            <span>{80}%</span>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={python} alt="python"/>
                    </div>
                </div>
                <div className="skill-box">
                    <div className="text-container">
                        <h3>{t('objectProgramming')}</h3>
                        <ul className="dot-list">
                            <li>Java</li>
                            <li>C#</li>
                            <li>{t('abstraction')}</li>
                            <li>{t('encapsulation')}</li>
                            <li>{t('inheritance')}</li>
                            <li>{t('polymorphism')}</li>
                        </ul>
                        <div className="progress-bar">
                            <progress value={70} max="100"></progress>
                            <span>{70}%</span>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={java} alt="java"/>
                    </div>
                </div>
                <div className="skill-box">
                    <div className="text-container">
                        <h3>{t('websiteDesign')}</h3>
                        <ul className="dot-list">
                            <li>Flask</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>CSS</li>
                            <li>HTML</li>
                            <li>Bootstrap</li>
                        </ul>
                        <div className="progress-bar">
                            <progress value={60} max="100"></progress>
                            <span>{60}%</span>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={flask} alt="flask"/>
                    </div>
                </div>
                <div className="skill-box">
                    <div className="text-container">
                        <h3>{t('machineLearning')}</h3>
                        <ul className="dot-list">
                            <li>Sklearn</li>
                            <li>TenserFlow</li>
                            <li>{t('classification')}</li>
                            <li>{t('regression')}</li>
                            <li>{t('neuralNetworks')}</li>
                            <li>{t('imageProcessing')}</li>
                        </ul>
                        <div className="progress-bar">
                            <progress value={45} max="100"></progress>
                            <span>{45}%</span>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={sklearn} alt="sklearn"/>
                    </div>
                </div>
                <div className="skill-box">
                    <div className="text-container">
                        <h3>{t('extraSkills')}</h3>
                        <ul className="dot-list">
                            <li>Git</li>
                            <li>Docker</li>
                            <li>{t('agileProgramming')}</li>
                            <li>Star UML</li>
                            <li>SQL</li>
                        </ul>
                        <div className="progress-bar">
                            <progress value={50} max="100"></progress>
                            <span>{50}%</span>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={git} alt="git"/>
                    </div>
                </div>
                <div className="skill-box">
                    <div className="text-container">
                        <h3>{t('algorithms')}</h3>
                        <ul className="dot-list">
                            <li>{t('sortAlgorithms')}</li>
                            <li>{t('dataStructures')}</li>
                            <li>{t('greedyProgramming')}</li>
                            <li>{t('divideAndConquer')}</li>
                            <li>Genetic Algorithms</li>
                        </ul>
                        <div className="progress-bar">
                            <progress value={65} max="100"></progress>
                            <span>{65}%</span>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={algorithm} alt="alogorithm"/>
                    </div>
                </div>
            </div>
            <br/><br/>
        </main>
    );
}

export default HomePage;
