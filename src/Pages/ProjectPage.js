import React from 'react';
import '../Styles/project.css';

function ProjectPage() {
    return (
        <div>
            <br />
            <div className="project-container">
                <div className="project-image">
                    <img src="https://via.placeholder.com/150" alt="Project 1" />
                </div>
                <div className="project-text">
                    <h2>Nasa Website</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tellus vitae velit convallis euismod nec id magna.</p>
                    <a href="https://github.com/PawWin/NASA-Project.git" className="project-button">Go togi</a>
                </div>
            </div>

            <div className="project-container">
                <div className="project-image">
                    <img src="https://via.placeholder.com/150" alt="Project 2" />
                </div>
                <div className="project-text">
                    <h2>Chess</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tellus vitae velit convallis euismod nec id magna.</p>
                    <a href="https://github.com/OskarBelza/ChessProject.git" className="project-button">Go to</a>
                </div>
            </div>

            <div className="project-container">
                <div className="project-image">
                    <img src="https://via.placeholder.com/150" alt="Project 3" />
                </div>
                <div className="project-text">
                    <h2>Price Prediction of Computer's Parts</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tellus vitae velit convallis euismod nec id magna.</p>
                    <a href="https://github.com/OskarBelza/ComputerPricePrediction.git" className="project-button">Go to</a>
                </div>
            </div>

            <div className="project-container">
                <div className="project-image">
                    <img src="https://via.placeholder.com/150" alt="Project 4" />
                </div>
                <div className="project-text">
                    <h2>Film Recommendation</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tellus vitae velit convallis euismod nec id magna.</p>
                    <a href="https://github.com/OskarBelza/JsonPlaceHolderExplorer.git" className="project-button">Go to</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;
