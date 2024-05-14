import React from 'react';
import cvTemplate from '../resources/cv-template.pdf';
import "../styles/cv.css"

const PortfolioPage = () => (
    <div className="pdf-container">
        <embed
            src={cvTemplate}
            type="application/pdf"
            className="pdf-embed"
        />
    </div>
);

export default PortfolioPage;
