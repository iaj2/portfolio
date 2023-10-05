import './projectItem.scss'

const ProjectItem = ({project}) => {

    return(
        <div className='project-item-container' >
            
            <div className='project-title-wrapper'>
                <h2 className='project-title'>{project.projectTitle}</h2>
            </div>
            <div className='project-description-wrapper'>
                <p className='project-description'>{project.projectDescription}</p>
            </div>
            <div className='project-tech-wrapper'>
                <p className='project-tech'><b>Tech: </b>{project.projectTech}</p>
            </div> 
            <a href={project.projectGitLink} rel="noreferrer" target='_blank'>
               View on GitHub
            </a>
        </div>
    )
}

export default ProjectItem