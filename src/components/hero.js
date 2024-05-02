import img from './h_porp.jpg';

function Hero() {
    return (
        <div
            className='p-5 text-center bg-image d-flex justify-content-center align-items-center'
            style={{backgroundImage: `url(${img})`, height: '50vh'}}
        >
            <div className='mask' style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                <div>
                    <h1 className='mb-3 text-white'>Heading</h1>
                    <h4 className='mb-3 text-white'>Subheading</h4>
                    <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                        Call to action
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;
