import '../scss/Banner.scss'
import { Link } from 'react-router-dom';

function Banner(){

    const scrollToTop = ()=> {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return(
        <>
            <section className="banner-container">
                <div className="banner-content">
                    <h2>Prenota il tuo evento ora!</h2>
                    <div className='dash'></div>
                    <p>Risparmia tempo e stress. Prenota ora per un&apos;organizzazione impeccabile e un&apos;esperienza indimenticabile. Dai vita alle tue idee e lascia che il nostro team realizzi il tuo evento perfetto per te.</p>
                    <Link to={'/contatti'}>
                        <button className='button2' onClick={scrollToTop}>Prenota ora!</button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Banner;