import '../scss/AboutPage.scss'
import aboutImg from '../images/about-img.png'
import mission from '../images/VideoMission.mp4'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function AboutPage(){

    return(
        <>
            <Header></Header>
            <section className="about-page">
                <div className="about-page-container">
                    <div className="about-page-content">
                        <h2>La nostra storia</h2>
                        <div className="dash"></div>
                        <p>Dagli umili inizi a una solida presenza nel settore, abbiamo costantemente superato le aspettative dei nostri clienti, trasformando idee in realtà e celebrando momenti indimenticabili insieme. Con il nostro team esperto e la nostra visione innovativa, guardiamo avanti con entusiasmo a nuove sfide e opportunità.</p>
                    </div>
                    <img src={aboutImg} alt="About image" />
                </div>
                <Banner></Banner>
                <div className="about-page-container marg">
                    <video src={mission} muted autoPlay loop></video>
                    <div className="about-page-content">
                        <h2>La nostra missione</h2>
                        <div className="dash"></div>
                        <p>Eleviamo ogni evento a un&apos;esperienza straordinaria, guidati dalla passione per l&apos;eccellenza e l&apos;innovazione. Con dedizione e creatività, ci impegniamo a superare le aspettative dei nostri clienti, creando ricordi indimenticabili e connessioni durature in ogni occasione. La nostra missione è trasformare le tue visioni in realtà.</p>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default AboutPage;