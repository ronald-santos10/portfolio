import Image from 'next/image'
import photo from '../../../public/photo.png'

function About(){
    return(
        <div className='about'>
            <Image src={photo} alt='Foto de Ronald' className='photo'/>
            <h1 className='title'>Olá, me chamo <strong>Ronald Santos</strong></h1>
            <p className='description'>Olá! Eu sou Ronald Santos, um estudante em desenvolvimento Front-End, com um forte interesse em JavaScript, TypeScript, React e React Native. Tenho investido meu tempo livre em projetos práticos e em cursos online para aprimorar minhas habilidades e aplicar esse conhecimento em projetos reais, além de estar comprometido em me manter atualizado com as últimas tecnologias e melhores práticas do setor. Estou buscando oportunidades de estágio ou projetos onde eu possa aplicar e expandir meu conhecimento em projetos desafiadores e aprender com profissionais experientes.</p>
            <button>Vamos conversar?</button>
        </div>
    )
}

export default About;