import Image from 'next/image'
import photo from '../../../public/photo.png'
import './styles/About.scss'

function About(){
    return(
        <div className='about'>
            <Image src={photo} alt='Foto de Ronald' className='photo'/>
            <div className='informations'>
                <h1 className='title'>Olá, me chamo<strong> Ronald Santos</strong></h1>
                <p className='description'>Estudante em desenvolvimento Front-End, com um forte interesse em JavaScript, TypeScript, React e React Native. Tenho investido meu tempo livre em projetos práticos e em cursos online para aprimorar minhas habilidades e aplicar esse conhecimento em projetos reais, além de estar comprometido em me manter atualizado com as últimas tecnologias e melhores práticas do setor.</p>
                <button>Vamos conversar?</button>
            </div>
        </div>
    )
}

export default About;