import Image from 'next/image';
import whatsapp from '../../../public/contacts/whatsapp.svg';
import instagram from '../../../public/contacts/instagram.svg';
import email from '../../../public/contacts/email.svg';
import linkedin from '../../../public/contacts/linkedin.svg';
import github from '../../../public/contacts/github.svg';
import './styles/Contact.scss'

function Contact(){
    return(
        <div className='contact'  id="contact-section">
            <div className='box'>
               <h2>Vamos<strong className='bold'> conversar?</strong></h2>
                <p>Aqui estão meus contatos e minhas redes sociais, estou sempre disposto a conversar!</p>
                <div className='contacticons'>
                <a href='https://wa.me/5575999887328' target="_blank" className='boxlink'>
                    <Image src={whatsapp} alt='logo whatsapp' className='icon'/>
                </a>
                <a href='https://www.instagram.com/ronaldd_santoss/' target="_blank" className='boxlink'>
                    <Image src={instagram} alt='logo instagram' className='icon'/>
                </a>
                <a href='mailto:ronalddesign10@gmail.com' target="_blank" className='boxlink'>
                    <Image src={email} alt='logo email' className='icon'/>
                </a>
                <a href='https://linkedin.com/in/ronald-santos-5774ba198/' target="_blank" className='boxlink'>
                    <Image src={linkedin} alt='logo linkedin' className='icon'/>
                </a>
                <a href='https://github.com/ronald-santos10' target="_blank" className='boxlink'>
                    <Image src={github} alt='logo github' className='icon'/>
                </a> 
            </div>
            

            </div>
        </div>
    )
}

export default Contact;