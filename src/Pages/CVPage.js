import React from 'react';
import { PDFViewer, Document, Page } from '@react-pdf/renderer';

import PortfolioPDF from '../resources/cv-template.pdf';

const PortfolioPage = () => (
    <div style={{ width: '100%', height: '100vh' }}>
        <PDFViewer width="100%" height="100%">
            <Document file={PortfolioPDF}>
                <Page pageNumber={1} />
            </Document>
        </PDFViewer>
    </div>
);

export default PortfolioPage;
