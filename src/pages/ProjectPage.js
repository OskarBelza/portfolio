import React from 'react';
import '../styles/project.css';
import nasa from '../resources/nasa.png'
import chess from '../resources/chess.png'
import computers from '../resources/computer.png'
import dragon from '../resources/dragon.png'
import fit from '../resources/fit.png'
import charts from '../resources/charts.png'
import omnioktagram from '../resources/omnioktagram.png'
import confusion_matrix from '../resources/confusion_matrix_mm.png'
import {useTranslation} from "react-i18next";

function ProjectPage() {
    const { t } = useTranslation('project');

    return (
        <div>
            <br/>
            <div className="project-container">
                <div className="project-image">
                    <img src={nasa} alt="Project 1"/>
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
                    <img src={chess} alt="Project 2"/>
                </div>
                <div className="project-text">
                    <h2>{t('chessTitle')}</h2>
                    <p>{t('chess')}
                    </p>
                    <br/>
                    <a href="https://github.com/OskarBelza/ChessProject.git"
                       className="project-button">{t('button')}</a>
                </div>
            </div>

            <div className="project-container">
                <div className="project-image">
                    <img src={computers} alt="Project 3"/>
                </div>
                <div className="project-text">
                    <h2>{t('predictionTitle')}</h2>
                    <p>{t('prediction')}
                    </p>
                    <br/>
                    <a href="https://github.com/OskarBelza/ComputerPricePrediction.git"
                       className="project-button">{t('button')}</a>
                </div>
            </div>

            <div className="project-container">
                <div className="project-image">
                    <img src={dragon} alt="Project 4"/>
                </div>
                <div className="project-text">
                    <h2>{t('dragonTitle')}</h2>
                    <p>{t('dragon')}
                    </p>
                    <br/><br/>
                    <a href="https://github.com/OskarBelza/SmoczaBrygada"
                       className="project-button">{t('button')}</a>
                </div>
            </div>

            <div className="project-container">
                <div className="project-image">
                    <img src={fit} alt="Project 5"/>
                </div>
                <div className="project-text">
                    <h2>{t('fitTitle')}</h2>
                    <p>{t('fit')}
                    </p>
                    <br/><br/>
                    <a href="https://github.com/OskarBelza/Fit-App"
                       className="project-button">{t('button')}</a>
                </div>
            </div>

            <div className="project-container">
                <div className="project-image">
                    <img src={charts} alt="Project 5"/>
                </div>
                <div className="project-text">
                    <h2>{t('mlTitle')}</h2>
                    <p>
                        {t('ml').split("Heart Attacks").map((part, index, array) => (
                            <React.Fragment key={index}>
                                {part}
                                {index !== array.length - 1 && (
                                    <a href="https://www.kaggle.com/code/oskarbeza/ataki-serca-analiza-i-predykcja"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        Ataki Serca
                                    </a>
                                )}
                            </React.Fragment>
                        ))}
                    </p>
                    <br/><br/>
                    <a href="https://github.com/OskarBelza/ML-DL"
                       className="project-button">{t('button')}</a>
                </div>
            </div>

            <div className="project-container">
                <div className="project-image">
                    <img src={omnioktagram} alt="Project 6"/>
                </div>
                <div className="project-text">
                    <h2>{t('omniTitle')}</h2>
                    <p>{t('omni')}
                    </p>
                    <br/><br/>
                    <a href="https://oskarbelza.github.io/Omnioktagram/"
                       className="project-button">{t('button')}</a>
                </div>
            </div>

            <div className="project-container">
                <div className="project-image">
                    <img src={confusion_matrix} alt="Project 7"/>
                </div>
                <div className="project-text">
                    <h2>{t('mmTitle')}</h2>
                    <p>{t('mm')}
                    </p>
                    <br/><br/>
                    <a href="https://github.com/OskarBelza/PracaDyplomowa"
                       className="project-button">{t('button')}</a>
                </div>
            </div>
            <br/>
        </div>
    )
        ;
}

export default ProjectPage;
