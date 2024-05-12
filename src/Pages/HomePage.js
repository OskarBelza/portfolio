import Hero from "../components/hero";
import img from "../resources/avatar.png";
import python from "../resources/Python.webp";
import java from "../resources/java.png";
import flask from "../resources/flask.svg";
import sklearn from "../resources/sklearn.png";
import git from "../resources/git.png";
import algorithm from "../resources/algorithm.png";
import React from "react";

function HomePage() {
    return (
        <main>
            <Hero />
            <div className="about-container">
                <div className="text-container">
                    <h2>About Me</h2>
                    <p>Hey, my name is Oskar and I am a student at the University of Economics in Katowice.
                        I am currently studying a major in computer science with a specialisation in programming
                        and algorithms, and in the future I plan to focus mainly on the topics of machine
                        learning,
                        neural networks and image processing. In my free time, I develop hobbies such as board
                        games,
                        theatre or art, and I also like to deepen my knowledge in topics that particularly
                        interest
                        me,
                        such as the aforementioned machine learning. I'm also very passionate about tea,
                        especially
                        Eastern tea and the traditional way of brewing it. I also enjoy reading, especially
                        Sci-Fi
                        and Fantasy, and when I have a free moment I like to play computer games, especially
                        Baldur's Gate.
                        In addition to this I work behind the bar at weekends which has allowed me to develop my
                        soft
                        skills and gain practical experience. If you would like to find out more about me, I
                        invite
                        you
                        to explore this site and especially to take a look at the projects I have done so far,
                        as
                        well as
                        my CV. In addition to this, on my site you can create an account which will enable you
                        to
                        sign
                        up for tutoring with me, where I can share my knowledge with you and help you develop in
                        areas
                        such as mathematics or programming
                    </p>
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
                        <h3>Object Programming</h3>
                        <ul className="dot-list">
                            <li>Java</li>
                            <li>C#</li>
                            <li>Abstraction</li>
                            <li>Encapsulation</li>
                            <li>Inheritance</li>
                            <li>Polymorphism</li>
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
                        <h3>Website Design</h3>
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
                        <h3>Machine Learning</h3>
                        <ul className="dot-list">
                            <li>Sklearn</li>
                            <li>TenserFlow</li>
                            <li>Classification</li>
                            <li>Regression</li>
                            <li>Neural Networks</li>
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
                        <h3>Extra Skills</h3>
                        <ul className="dot-list">
                            <li>Git</li>
                            <li>Docker</li>
                            <li>Agile Programming</li>
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
                        <h3>Algorithms</h3>
                        <ul className="dot-list">
                            <li>Sort Algorithms</li>
                            <li>Data Structures</li>
                            <li>Greedy Programming</li>
                            <li>Divide and Conquer</li>
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