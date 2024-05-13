import './styles/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import Footer from "./components/footer";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import CVPage from "./pages/CVPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage"



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
