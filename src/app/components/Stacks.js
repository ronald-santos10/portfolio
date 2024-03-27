import Image from 'next/image'
import javascript from '../../../public/logo javascript.svg';
import typescript from '../../../public/logo Typescript.svg';
import react from '../../../public/logo React.svg';
import html from '../../../public/logo HTML.svg';
import css from '../../../public/logo CSS.svg';
import mysql from '../../../public/logo MySql.svg';
import node from '../../../public/logo Node.svg';
import next from '../../../public/logo Nextjs.svg';
import sass from '../../../public/logo Sass.svg';
import git from '../../../public/logo Git.svg';
import './styles/Stacks.scss';


function Stacks(){
    return(
        <div className='stacks'>
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