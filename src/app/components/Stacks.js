import Image from 'next/image'
import javascript from '../../../public/logo javascript.svg';
import typescript from '../../../public/logo Typescript.svg';
import react from '../../../public/logo React.svg';
import html from '../../../public/logo HTML.svg';
import css from '../../../public/logo CSS.svg';
import tailwind from '../../../public/logo tailwind.svg';
import node from '../../../public/logo Node.svg';
import next from '../../../public/logo Nextjs.svg';
import sass from '../../../public/logo Sass.svg';
import git from '../../../public/logo Git.svg';
import './styles/Stacks.scss';


function Stacks(){
    return(
        <div className='stacks'  id="stacks-section">
            <h2>Minhas <strong>Stacks</strong> e <strong>Tecnologias</strong></h2>
            <div className='list'>
                <Image src={javascript} alt='logo javascript' className='item'/>
                <Image src={typescript} alt='logo typescript' className='item'/>
                <Image src={react} alt='logo react' className='item'/>
                <Image src={html} alt='logo html' className='item'/>
                <Image src={css} alt='logo css' className='item'/>
                <Image src={tailwind} alt='logo tailwind' className='item'/>
                <Image src={node} alt='logo nodejs' className='item'/>
                <Image src={next} alt='logo nextjs' className='item'/>
                <Image src={sass} alt='logo sass' className='item'/>
                <Image src={git} alt='logo git' className='item'/>
            </div>
        </div>
    )
}

export default Stacks;