import Image from 'next/image'
import logo from '../../../public/logo.svg'
import './styles/Header.scss'

function Header(){
    return(
        <div className='header'>
            <Image src={logo} alt='Logo Ronald Santos' className='logo'/>
            <nav>
                <ul>
                    <li>Sobre</li>
                    <li>Skills</li>
                    <li>Projetos</li>
                    <li>Contatos</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;