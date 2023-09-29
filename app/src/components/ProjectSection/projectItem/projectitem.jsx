import './projectItem.scss'

const ProjectItem = ({project}) => {

    const longParagraph = `Engineered an advanced RPC system for a cutting-edge IoT Cloud device, using ZeroMQ for seamless socket connections and Protocol Buffers for rapid data transfer and broad language compatibility.
    Pioneered a Python RPC server, leveraging the
  `;

    return(
        <div className='project-item-container' >
            <a href={project.projectGitLink} rel="noreferrer" target='_blank'>
            </a>
            <div className='project-title-wrapper'>
                <h2 className='project-title'>{project.projectTitle}</h2>
            </div>
            <div className='project-description-wrapper'>
                <p className='project-description'>{project.projectDescription}</p>
            </div>
            <div className='project-tech-wrapper'>
                <p className='project-tech'><b>Tech: </b>{project.projectTech}</p>
            </div>
            <p className='text-overlay'>View on GitHub</p>
        </div>
    )
}

export default ProjectItem