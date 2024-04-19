import '../scss/Footer.scss'
import logo from '../images/agevents-white.png'

function Footer(){

    return(
        <>
            <footer>
                <div className="footer-content">
                    <div className='nav-footer'>
                        <a href="#head"><img src={logo} alt="AG event logo" className='logo-footer'/></a>
                        <span>+39 339 6876224</span>
                        <span>ageventsicilia@gmail.com</span>
                    </div>
                    <div className='nav-footer'>
                        <h4>Orari</h4>
                        <span>Lun - Ven: 9:00 - 19:00</span>
                        <span>Sab: 9:00 - 16:00</span>
                        <span>Dom: Chiuso</span>
                    </div>
                    <div className='nav-footer'>
                        <h4>Follow Us</h4>
                        <a href="https://www.instagram.com/ag__eventplanner/" rel='noopener' target='_blank'><span>Instagram</span></a>
                        <span title='+39 339 6876224'>Whatsapp</span>
                    </div>
                    <div className='nav-footer'>
                        <h4>Leggi le recensioni su</h4>
                        <a href="https://it.trustpilot.com/review/agevent.netlify.app" rel='noopener' target='_blank'><span>Trustpilot</span></a>
                        <a href="https://www.instagram.com/stories/highlights/18212970154220364/" rel='noopener' target='_blank'><span>Instagram</span></a>
                    </div>
                </div>
                <div className="footer-privacy">
                    <div>Copyright ©2024 AGevent. All Rights Reserved.</div>
                    <div>Web Development by <a href="https://filippoalotta.netlify.app/">Filippo Alotta</a></div>
                </div>
            </footer>
        </>
    )
}

export default Footer;