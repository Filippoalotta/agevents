import '../scss/ServicesPage.scss'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import mission from '../images/mission.jpg'
import birthday from '../images/birt-img.jpg'
import degree from '../images/degree.jpg'
import privateEvent from '../images/foto-ig-service.jpg'
import baptismo from '../images/cat-img.jpg'
import wedding from'../images/wedding.jpg'

function ServicesPage(){

    const scrollToTop = ()=> {
        window.scrollTo({
            top: 0
        });
    };

    return(
        <>
            <Header></Header>
            <section className="services-page">
                <h1>Scegli il tuo evento</h1>
                <div className="dash"></div>
                <div className="services-container">
                    <div className="card">
                        <img src={degree} alt="Organizzazione festa di laurea" />
                        <h3>Lauree</h3>
                        <p>Celebra la laurea con stile. Organizziamo eventi personalizzati per un giorno indimenticabile di festeggiamenti.</p>
                        <button className='button2' onClick={scrollToTop}>
                            <Link to={'/contatti'}>Organizza ora!</Link>
                        </button>
                    </div>
                    <div className="card">
                        <img src={privateEvent} alt="Organizzazione evento privato" />
                        <h3>Eventi privati</h3>
                        <p>Rendiamo unici gli eventi privati. Dalla pianificazione alla realizzazione, creiamo esperienze personalizzate e indimenticabili.</p>
                        <button className='button2' onClick={scrollToTop}>
                            <Link to={'/contatti'}>Organizza ora!</Link>
                        </button>
                    </div>
                    <div className="card">
                        <img src={wedding} alt="Organizzazione matrimonio" />
                        <h3>Matrimoni</h3>
                        <p>Per un matrimonio da sogno. Curiamo ogni dettaglio per un giorno speciale e indimenticabile.</p>
                        <button className='button2' onClick={scrollToTop}>
                            <Link to={'/contatti'}>Organizza ora!</Link>
                        </button>
                    </div>
                    <div className="card">
                        <img src={birthday} alt="Organizzazione festa di compleanno" />
                        <h3>Feste di compleanno</h3>
                        <p>Per festeggiare compleanni indimenticabili. Creiamo atmosfere uniche e momenti speciali su misura per te.</p>
                        <button className='button2' onClick={scrollToTop}>
                            <Link to={'/contatti'}>Organizza ora!</Link>
                        </button>
                    </div>
                    <div className="card">
                        <img src={mission} alt="Organizzazione evento aziendale" />
                        <h3>Eventi aziendali</h3>
                        <p>Per eventi aziendali di successo. Organizziamo esperienze professionali e coinvolgenti che riflettono la tua azienda.</p>
                        <button className='button2' onClick={scrollToTop}>
                            <Link to={'/contatti'}>Organizza ora!</Link>
                        </button>
                    </div>
                    <div className="card">
                        <img src={baptismo} alt="Organizzazione battesimo" />
                        <h3>Battesimi</h3>
                        <p>Per celebrare battesimi con amore e gioia. Creiamo un&apos;atmosfera speciale per accogliere il nuovo arrivato.</p>
                        <button className='button2' onClick={scrollToTop}>
                            <Link to={'/contatti'}>Organizza ora!</Link>
                        </button>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default ServicesPage;