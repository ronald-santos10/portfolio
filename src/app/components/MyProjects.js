import Image from 'next/image';
import data from './projectList.json'
import './styles/MyProjects.scss'

function MyProjects(){
    return(
        <div className='projects'  id="projects-section">
            <ul className='projectlist'>
                {data.map(item => (
                <li key={item.id}>
                    <Image src={item.image} width={1000} height={1000} alt="Foto de Ronald"/>
                    <div className='info'>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <h4>{item.stacks}</h4>
                        <div className='buttons'>
                        <button className='btn-deploy'><a href={item.deploy} target="_blank">Visualizar</a></button>
                        <button className='btn-github'><a href={item.github} target="_blank">Github</a></button>
                    </div>
                    </div>
                    
                </li>
                ))}
            </ul>
        </div>
    )
}

export default MyProjects;