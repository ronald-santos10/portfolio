import Image from 'next/image'
import logo from '../../../public/logo.svg'
import './styles/Header.scss'

function Header(){
    return(
        <div className='header'>
            <a href='/'><Image src={logo} alt='Logo Ronald Santos' className='logo' priority={true}/></a>
            <nav>
                <ul>
                <a href="#about-section"><li>Sobre</li></a>
               <a href="#stacks-section"> <li>Stacks</li></a>
                <a href="#projects-section"><li>Projetos</li></a>
                <a href="#contact-section"><li>Contato</li></a>
                </ul>
            </nav>
        </div>
    )
}

export default Header;