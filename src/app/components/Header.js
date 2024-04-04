'use client'
import Image from 'next/image'
import logo from '../../../public/logo.svg'
import './styles/Header.scss'
import { motion } from "framer-motion";

function Header(){
    return(
        <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className='header'
        >
            <a href='/'><Image src={logo} alt='Logo Ronald Santos' className='logo' priority={true}/></a>
            <nav>
                <ul>
                <a href="#about-section"><li>Sobre</li></a>
               <a href="#stacks-section"> <li>Stacks</li></a>
                <a href="#projects-section"><li>Projetos</li></a>
                <a href="#contact-section"><li>Contato</li></a>
                </ul>
            </nav>
        </motion.div>
    )
}

export default Header;