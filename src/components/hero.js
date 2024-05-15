import img from '../resources/h_porp.jpg';
import { Link } from 'react-router-dom';


function Hero() {
    return (
        <div
            className='p-5 text-center bg-image d-flex justify-content-center align-items-center'
            style={{backgroundImage: `url(${img})`, height: '50vh'}}
        >
            <div className='mask' style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                <div>
                    <h1 className='mb-3 text-white'>My Portfolio</h1>
                    <Link to="/cv">
                        <a className='btn btn-outline-light btn-lg' role='button'>
                            ShowCV
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;
