import Image from 'next/image'
import javascript from './images/logo javascript.svg';
import typescript from './images/logo Typescript.svg';
import react from './images/logo React.svg';
import html from './images/logo HTML.svg';
import css from './images/logo CSS.svg';
import mysql from './images/logo MySql.svg';
import node from './images/logo Node.svg';
import next from './images/logo Nextjs.svg';
import sass from './images/logo Sass.svg';
import git from './images/logo Git.svg';
import './styles/Stacks.scss';


function Stacks(){
    return(
        <div className='stacks'  id="stacks-section">
            <h2>Minhas <strong>Stacks</strong> e <strong>Tecnologias</strong></h2>
            <div className='list'>
                <Image src={javascript} alt='logo javascript' className='item'/>
                <Image src={typescript} alt='logo javascript' className='item'/>
                <Image src={react} alt='logo javascript' className='item'/>
                <Image src={html} alt='logo javascript' className='item'/>
                <Image src={css} alt='logo javascript' className='item'/>
                <Image src={mysql} alt='logo javascript' className='item'/>
                <Image src={node} alt='logo javascript' className='item'/>
                <Image src={next} alt='logo javascript' className='item'/>
                <Image src={sass} alt='logo javascript' className='item'/>
                <Image src={git} alt='logo javascript' className='item'/>
            </div>
        </div>
    )
}

export default Stacks;