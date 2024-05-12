import '../Styles/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/header";
import Footer from "../components/footer";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectPage from "./ProjectPage";
import ContactPage from "./ContactPage";
import CVPage from "./CVPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import HomePage from "./HomePage"


function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Header/>
                </header>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<ProjectPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/cv" element={<CVPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
