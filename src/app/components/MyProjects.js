import Image from 'next/image';
import data from './projectList.json'

function MyProjects(){
    return(
        <div className='projects'>
            <ul className='project-list'>
                {data.map(item => (
                <li key={item.id}>
                    <img src={item.image}/>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>{item.stacks}</p>
                    <div className='buttons'>
                        <button className='btn-deploy'><a href={item.deploy}>Visualizar</a></button>
                        <button className='btn-github'><a href={item.github}>Visualizar</a></button>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default MyProjects;