import '../scss/Hero.scss'
import { Link } from 'react-router-dom';

function Hero(){

    const scrollToTop = ()=> {
        window.scrollTo({
            top: 0
        });
    };

    return(
        <>
            <section className='hero-container'>
                <div className="hero-content">
                    <h1>Realizziamo eventi indimenticabili</h1>
                    <div className="dash"></div>
                    <p>Noi di <span>AGevents</span> creiamo con passione e cura delle esperienze memorabili per ogni evento</p>
                    <div className='button-container'>
                        <Link to={'/contatti'}>
                            <button className='button2' onClick={scrollToTop}>Prenota ora!</button>
                        </Link>
                        <Link to={'/about'}>
                            <button className='button1' onClick={scrollToTop}>Chi siamo</button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;