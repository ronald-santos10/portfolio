import Image from 'next/image'
import logo from '../../../public/logo.svg'
import './styles/Header.scss'

function Header(){
    return(
        <div className='header'>
            <a href='/'><Image src={logo} alt='Logo Ronald Santos' className='logo' priority={true}/></a>
            <nav>
                <ul>
                <li><a href="#about-section">Sobre</a></li>
                <li><a href="#stacks-section">Stacks</a></li>
                <li><a href="#projects-section">Projetos</a></li>
                <li><a href="#contact-section">Contato</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;