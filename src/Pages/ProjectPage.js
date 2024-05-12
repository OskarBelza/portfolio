import React from 'react';
import '../Styles/project.css';
import nasa from '../resources/nasa.png'
import chess from '../resources/chess.png'
import computers from '../resources/computers.png'
import network from '../resources/testing.png'

function ProjectPage() {
    return (
        <div>
            <br />
            <div className="project-container">
                <div className="project-image">
                    <img src={nasa} alt="Project 1" />
                </div>
                <div className="project-text">
                    <h2>Nasa Website</h2>
                    <p>Nasa was a project to develop our teamwork and coding skills in line with agile programming. In this project we created
                        a space-themed website that makes strong use of the possibilities offered by the API from Nasa but not only. We created
                        four main functions: display of APOD images, a live map of disasters as seen from space, a comparison scale of asteroids
                        that pass close to the earth and the possibility to see a star map of a selected constellation. In addition to this,
                        we created the possibility of logging in and registering, so that users can create their own account and add photos
                        of interest to the gallery, as well as a few smaller options such as charts with data from space, pages dedicated
                        to individual planets and a map showing the position of other planets in relation to the Earth. For the website,
                        we mainly used the Python language and its wide range of libraries, such as Sunpy, Folium and Astropy, and for the web
                        page we used the Flask framework, as well as CSS and HTML. In this project, I was responsible, among other things,
                        for managing the work, but also for implementing 3 of the 4 main features, a few minor ones and helping with the front-end.
                    </p>
                    <br/>
                    <a href="https://github.com/PawWin/NASA-Project.git" className="project-button">Go to</a>
                </div>
            </div>

            <div className="project-container">
                <div className="project-image">
                    <img src={chess} alt="Project 2" />
                </div>
                <div className="project-text">
                    <h2>Chess</h2>
                    <p>Chess was my final project for the Java language. I decided to create a basic structure for playing chess in order to do so,
                        I used the object-oriented nature of the Java language. I created separate classes for each of the pawns that inherit from
                        the pawn class, as well as classes such as chess board, move and game to efficiently manage the state of the game and also
                        move possibilities. I have used both the chess board and pawn representation so that the board records the figures at a given
                        time, but also each pawn knows its current position, which makes it easy to verify the legality of a move. My chess set also
                        implements all the more complicated chess moves such as castling or beating in flight, and of course check, stalemate and checkmate.
                        After ending the project, I decided to develop it on my own by creating a game interface and also implementing a simple chess
                        engine that allows you to play against a bot. The project taught me more object-oriented thinking, especially in larger projects
                        where there are a lot of classes and you have to plan the interaction between them wisely, and also showed me how interesting chess
                        programming can be and encouraged me to continue this project.
                    </p>
                    <br/>
                    <a href="https://github.com/OskarBelza/ChessProject.git" className="project-button">Go to</a>
                </div>
            </div>

            <div className="project-container">
                <div className="project-image">
                    <img src={computers} alt="Project 3" />
                </div>
                <div className="project-text">
                    <h2>Price Prediction of Computer's Parts</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tellus vitae velit convallis euismod nec id magna.</p>
                    <a href="https://github.com/OskarBelza/ComputerPricePrediction.git" className="project-button">Go to</a>
                </div>
            </div>

            <div className="project-container">
                <div className="project-image">
                    <img src={network} alt="Project 4" />
                </div>
                <div className="project-text">
                    <h2>Testing and Optimization</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tellus vitae velit convallis euismod nec id magna.</p>
                    <a href="https://github.com/OskarBelza/JsonPlaceHolderExplorer.git" className="project-button">Go to</a>
                </div>
            </div>
            <br/>
        </div>
    );
}

export default ProjectPage;
