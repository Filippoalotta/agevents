import '../scss/Events.scss'
import { Link } from 'react-router-dom';
import eventsImg from '../images/events-home-dec.png'

function Events(){

    const scrollToTop = ()=> {
        window.scrollTo({
            top: 0
        });
    };

    return(
        <>  
            <section className="events-container">
                <img src={eventsImg} alt="I nostri eventi" />
                <div className="events-content">
                    <h2>Scopri i nostri eventi!</h2>
                    <div className="dash"></div>
                    <p>Da compleanni indimenticabili a conferenze aziendali di successo, realizziamo eventi su misura che lasciano un&apos;impronta duratura. Affidati a noi per esperienze straordinarie.</p>
                        <Link to={'/servizi'}>
                            <button className='button2' onClick={scrollToTop}>Scopri di più!</button>
                        </Link>
                </div>
            </section>
        </>
    )
}

export default Events;