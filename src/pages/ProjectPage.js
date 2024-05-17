import React from 'react';
import '../styles/project.css';
import nasa from '../resources/nasa.png'
import chess from '../resources/chess.png'
import computers from '../resources/computers.png'
import network from '../resources/testing.png'
import {useTranslation} from "react-i18next";

function ProjectPage() {
    const { t } = useTranslation('project');

    return (
        <div>
            <br />
            <div className="project-container">
                <div className="project-image">
                    <img src={nasa} alt="Project 1" />
                </div>
                <div className="project-text">
                    <h2>{t('nasaTitle')}</h2>
                    <p>{t('nasa')}</p>
                    <br/>
                    <a href="https://github.com/PawWin/NASA-Project.git" className="project-button">{t('button')}</a>
                </div>
            </div>

            <div className="project-container">
                <div className="project-image">
                    <img src={chess} alt="Project 2" />
                </div>
                <div className="project-text">
                    <h2>{t('chessTitle')}</h2>
                    <p>{t('chess')}
                    </p>
                    <br/>
                    <a href="https://github.com/OskarBelza/ChessProject.git" className="project-button">{t('button')}</a>
                </div>
            </div>

            <div className="project-container">
                <div className="project-image">
                    <img src={computers} alt="Project 3" />
                </div>
                <div className="project-text">
                    <h2>{t('predictionTitle')}</h2>
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
                    <a href="https://github.com/OskarBelza/ComputerPricePrediction.git" className="project-button">{t('button')}</a>
                </div>
            </div>

            <div className="project-container">
                <div className="project-image">
                    <img src={network} alt="Project 4" />
                </div>
                <div className="project-text">
                    <h2>{t('testingTitle')}</h2>
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
                    <br/><br/>
                    <a href="https://github.com/OskarBelza/JsonPlaceHolderExplorer.git" className="project-button">{t('button')}</a>
                </div>
            </div>
            <br/>
        </div>
    );
}

export default ProjectPage;
