import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../scss/Header.scss'
import logo from '../images/agevents-logo-this.png'

function Header(){

    const [hambOpen, setHambOpen] = useState(true);

    useEffect(() => {
        if (!hambOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [hambOpen]);

    const handleHambOpen = ()=> {
        setHambOpen(!hambOpen);
    }

    return(
        <>
        <header id='head'>
            <Link to={'/'}>
                <img src={logo} alt="AGevent logo" className='logo' />
            </Link>
            <nav className='nav-desk'>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>Chi siamo</Link>
                    </li>
                    <li>
                        <Link to={'/servizi'}>Servizi</Link>
                    </li>
                    <li>
                        <Link to={'/contatti'}>Contatti</Link>
                    </li>
                </ul>
                <Link to={'/contatti'}>
                    <button className='button2'>Prenota ora!</button>
                </Link>
            </nav>
            <nav className={`hamb ${!hambOpen ? 'open' : ''}`} onClick={handleHambOpen}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </nav>
            <nav className={`nav-mb ${!hambOpen ? 'open-translate' : ''}`}>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>Chi siamo</Link>
                    </li>
                    <li>
                        <Link to={'/servizi'}>Servizi</Link>
                    </li>
                    <li>
                        <Link to={'/contatti'}>Contatti</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header;