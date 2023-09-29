import './projectSection.scss'
import ProjectItem from './projectItem/projectitem'

const ProjectSection = () => {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
    const numRows = Math.ceil(items.length / 2);
    

    return (
    <>
        <div className="project-title-container">
            <h1 className="project-title">Projects</h1>
        </div>
        <div className='project-section-container'>
            <div className='projects-view'>
            {items.map((item, index) => (
            <div
                key={index}
                className={`item ${index === items.length - 1 && items.length % 2 !== 0 ? 'center' : ''}`}
                
            >
            <ProjectItem />
            </div>
        ))}
        </div>
            
        </div>
        
    </>
    )
} 

export default ProjectSection