import Image from 'next/image'
import logo from '../../../public/logo.svg'

function Header(){
    return(
        <div className='header'>
            <Image src={logo} alt='Logo Ronald Santos'/>
            <nav>
                <ul>
                    <li>Sobre mim</li>
                    <li>Skills</li>
                    <li>Projetos</li>
                    <li>Contatos</li>
                </ul>
            </nav>
            <button>Português</button>
        </div>
    )
}

export default Header;