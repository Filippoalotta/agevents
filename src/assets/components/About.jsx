import '../scss/About.scss'
import { Link } from 'react-router-dom';
import aboutImg from '../images/who-we-are-img.png'

function About(){

    const scrollToTop = ()=> {
        window.scrollTo({
            top: 0
        });
    };

    return(
        <>
            <section className="about">
                <div className="about-content">
                    <h2>Chi siamo?</h2>
                    <div className="dash"></div>
                    <p>AGevents è la tua agenzia di fiducia, dedicata a creare esperienze straordinarie e indimenticabili. Con passione e creatività, trasformiamo idee in realtà, garantendo servizi impeccabili per compleanni, conferenze e altro ancora.</p>
                    <Link to={'/about'}>
                        <button className='button2' onClick={scrollToTop}>Chi siamo</button>
                    </Link>
                </div>
                <img src={aboutImg} alt="about image" />
            </section>
        </>
    )
}

export default About;