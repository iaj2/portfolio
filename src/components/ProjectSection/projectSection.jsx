import './projectSection.scss'
import ProjectItem from './projectItem/projectitem'
import { useEffect, useState } from 'react'
import { db } from '../../firebase-config'
import { collection, getDocs } from '@firebase/firestore'

const ProjectSection = () => {
    
    const [projects, setProjects] = useState([])
    const projectsCollectionRef = collection(db, 'projects')

    useEffect( () => {
        const getProjects = async () => {
            const data = await getDocs(projectsCollectionRef)
            setProjects(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getProjects()
    }, [projectsCollectionRef])

    return (
    <>
        <div className="project-title-container">
            <h1 className="project-title">Projects</h1>
        </div>
        <div className='project-section-container'>
            <div className='projects-view'>
            {projects.map((project, index) => (
            <div
                key={index}
                className={`project ${index === projects.length - 1 && projects.length % 2 !== 0 ? 'center' : ''}`}
                
            >
                <ProjectItem project={project}/>
            </div>
        ))}
        </div>
            
        </div>
        
    </>
    )
} 

export default ProjectSection