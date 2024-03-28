import Image from 'next/image'
import photo from '../../../public/photo.png'
import './styles/About.scss'

function About(){
    return(
        <div className='about' id="about-section">
            <Image src={photo} alt='Foto de Ronald' className='photo'/>
            <div className='informations'>
                <h1 className='title'>Olá, me chamo<strong className='bold'> Ronald Santos</strong></h1>
                <p className='description'>Natural de Paripiranga-BA, tenho 22 anos e sou um desenvolvedor Front-end que tem como foco a utilização das mais atuais stacks e tecnologias do mercado. Busco fonte de conhecimento em Javascript, React, React Native e Nextjs, além das stacks para CSS. Estou empolgado em poder contribuir para a evolução no desenvolvimento. Gosto muito de aprender e mais ainda colocar em prática, que tal ver alguns dos meus projetos?</p>
                <button><a href="#projects-section">Ver Projetos</a></button>
            </div>
        </div>
    )
}

export default About;