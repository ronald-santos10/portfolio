import Image from 'next/image';
import whatsapp from '../../../public/contacts/whatsapp.svg';
import instagram from '../../../public/contacts/instagram.svg';
import email from '../../../public/contacts/email.svg';
import linkedin from '../../../public/contacts/linkedin.svg';
import github from '../../../public/contacts/github.svg';

function Contact(){
    return(
        <div className='contact'>
            <h2>Vamos <strong>conversar?</strong></h2>
            <p>Aqui estão meus contatos e minhas redes sociais, estou sempre disposto a conversar!</p>
            <div className='contact-icons'>

                <a href='https://wa.me/5575999887328' target="_blank">
                    <Image src={whatsapp} alt='logo whatsapp'/>
                </a>
                <a href='https://www.instagram.com/ronaldd_santoss/' target="_blank">
                    <Image src={instagram} alt='logo instagram'/>
                </a>
                <a href='mailto:ronalddesign10@gmail.com' target="_blank">
                    <Image src={email} alt='logo email'/>
                </a>
                <a href='https://linkedin.com/in/ronald-santos-5774ba198/' target="_blank">
                    <Image src={linkedin} alt='logo linkedin'/>
                </a>
                <a href='https://github.com/ronald-santos10' target="_blank">
                    <Image src={github} alt='logo github'/>
                </a>

            </div>
        </div>
    )
}

export default Contact;