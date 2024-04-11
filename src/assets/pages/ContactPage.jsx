import '../scss/ContactPage.scss'
import wa from '../images/whatsapp-icon.png'
import ig from '../images/ig-icon.png'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { firestore } from '../form/firebase';

function ContactPage(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();

        firestore.collection('messages').add({
            firstName,
            lastName,
            email,
            telephone,
            message
        }).then(() => {
            setFirstName(''),
            setLastName(''),
            setEmail(''),
            setTelephone(''),
            setMessage('')
        }).catch((error) => console.error('error submitting data:', error))
    }

    return(
        <>
            <Header></Header>
            <section className="contact-page">
                <div className="bg-ct-section">
                    <h1>Vuoi affidarti a noi? Contattaci!</h1>
                    <div className="dash"></div>
                </div>
                <div className="contact-container">
                    <div className="info-container">
                        <h2>Informazioni</h2>
                        <div className="dash"></div>
                        <div className="mini-section">
                            <h3>Email</h3>
                            <span>ageventsicilia@gmail.com</span>
                        </div>
                        <div className="mini-section">
                            <h3>Telefono</h3>
                            <span>+39 339 6876224</span>
                        </div>
                        <div className="mini-section">
                            <h3>Social</h3>
                            <img src={wa} alt="Whatsapp icon" title='+39 339 6876224' />
                            <a href="https://www.instagram.com/ag__eventplanner/" rel='noopener' target='_blank'><img src={ig} alt="Instagram icon" /></a>  
                        </div>
                    </div>
                    <div className="form-container">
                        <h2>Richiedi un preventivo</h2>
                        <div className="dash"></div>
                        <form onSubmit={handleSubmit}>
                            <input type="text" className='input1' value={firstName} placeholder='Inserisci il tuo nome' autoComplete='off' onChange={(e) => setFirstName(e.target.value)} required/>
                            <input type="text" className='input1' value={lastName} placeholder='Inserisci il tuo cognome' autoComplete='off' onChange={(e) => setLastName(e.target.value)} required/>
                            <input type="email" className='input1' value={email} name="email" id="email" placeholder='Inserisci la tua email' autoComplete='off' onChange={(e) => setEmail(e.target.value)} required/>
                            <input type="text" className='input1' value={telephone} name="telephone" id="telephone" placeholder='Inserisci il tuo numero' autoComplete='off' onChange={(e) => setTelephone(e.target.value)} required/>
                            <textarea name="message" id="message" value={message} placeholder='Scrivici un messaggio' autoComplete='off' onChange={(e) => setMessage(e.target.value)} required></textarea>
                            <input type="submit" value="Invia messaggio" className='button2'/>
                        </form>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default ContactPage;