import '../scss/Location.scss'
import { Link } from 'react-router-dom';
import location from '../images/location-img.png'

function Location(){

    const scrollToTop = ()=> {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return(
        <>
            <section className="location">
                <div className="location-content">
                    <h2>Le nostre location</h2>
                    <div className="dash"></div>
                    <p>Esplora le nostre suggestive location, ambienti unici perfetti per ogni tipo di evento. Dalle ville storiche ai moderni spazi urbani, offriamo soluzioni versatili e affascinanti. Scopri il fascino delle nostre destinazioni e crea il tuo evento indimenticabile con noi.</p>
                    <Link to={'/contatti'}>
                        <button className='button2' onClick={scrollToTop}>Scopri di più</button>
                    </Link>
                </div>
                <img src={location} alt="location image" />
            </section>
        </>
    )
}

export default Location;