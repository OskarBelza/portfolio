import '../Styles/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/header";
import Hero from "../components/hero";
import Footer from "../components/footer";
import img from "../resources/face.png";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectPage from "./ProjectPage";
import ContactPage from "./ContactPage";
import CVPage from "./CVPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<ProjectPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/cv" element={<CVPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Routes>
                    <Header/>
                </header>
                <Footer/>
            </div>
        </Router>
    );
}

function Home() {
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
                    <h3>HTML</h3>
                    <p>Proficient</p>
                </div>
                <div className="skill-box">
                    <h3>CSS</h3>
                    <p>Proficient</p>
                </div>
                <div className="skill-box">
                    <h3>JavaScript</h3>
                    <p>Proficient</p>
                </div>
                <div className="skill-box">
                    <h3>React</h3>
                    <p>Intermediate</p>
                </div>
                <div className="skill-box">
                    <h3>Python</h3>
                    <p>Intermediate</p>
                </div>
                <div className="skill-box">
                    <h3>Java</h3>
                    <p>Intermediate</p>
                </div>
            </div>
            <br/><br/>
        </main>
    );
}

export default App;
