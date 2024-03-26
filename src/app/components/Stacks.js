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


function Stacks(){
    return(
        <div className='stacks'>
            <h2>Minhas Stacks e Tecnologias</h2>
            <div className='stackList'>
                <Image src={javascript} alt='logo javascript'/>
                <Image src={typescript} alt='logo javascript'/>
                <Image src={react} alt='logo javascript'/>
                <Image src={html} alt='logo javascript'/>
                <Image src={css} alt='logo javascript'/>
                <Image src={mysql} alt='logo javascript'/>
                <Image src={node} alt='logo javascript'/>
                <Image src={next} alt='logo javascript'/>
                <Image src={sass} alt='logo javascript'/>
                <Image src={git} alt='logo javascript'/>
            </div>
        </div>
    )
}

export default Stacks;