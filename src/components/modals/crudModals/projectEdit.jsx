import './projectEdit.scss'
import { ReactComponent as CloseIcon } from '../../../assets/icons/close.svg'
import { useState } from 'react'
import { db } from '../../../firebase-config'
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore'

const ProjectEditModal = ({category, modalRef, modal, setModal, project}) => {
    const [projectTitle, setProjectTitle] = useState(project?project.projectTitle:'')
    const [projectDescription, setProjectDescription] = useState(project?project.projectDescription:'')
    const [projectTech, setProjectTech] = useState(project?project.projectTech:'')
    const [projectGitLink, setProjectGitLink] = useState(project?project.projectGitLink:'')

    const projectsCollectionRef = collection(db, 'projects')

    const toggleModal = () => {
        setModal(!modal)
    }

    const createProject = async (e) => {
        e.preventDefault()
        await addDoc(projectsCollectionRef, {
            projectTitle: projectTitle,
            projectDescription: projectDescription,
            projectTech: projectTech,
            projectGitLink: projectGitLink
        })

        alert('Successfully added project!')
        window.location.reload();
    }

    const updateProject = async (e) => {
        e.preventDefault()
        const jobDoc = doc(db, 'projects', project.id)
        const newFields = {
            projectTitle: projectTitle,
            projectDescription: projectDescription,
            projectTech: projectTech,
            projectGitLink: projectGitLink
        }
        await updateDoc(jobDoc, newFields)

        alert('Successfully saved new project details!')
        window.location.reload();

    }


    return (
        <div className='project-edit-background'>
            <div className='project-edit-modal' ref={modalRef}>
                <div className='button-container'>
                    <button className="close-button" onClick={toggleModal}>
                        {<CloseIcon />}
                    </button>
                </div>
                <h2 className='title'>{category==='add'? 'Add Project' : 'Edit Project Details'}</h2>
                <form className='project-edit-container' onSubmit={(e) => category==='add' ? createProject(e): updateProject(e)}>
                    <div className='project-title-container'>
                        <label for='projectTitle'>Project Title</label>
                        <input 
                            type='text' name='projectTitle' id='projectTitle' value={projectTitle}
                            className='project-title' onChange={(e) => setProjectTitle(e.target.value)} maxLength={27} required>      
                        </input>
                    </div>
                    <div className='project-description-container'>
                        <label for='projectDescription'>Project Description</label>
                        <textarea 
                            id='projectDescription' name='projectDescription' value={projectDescription}
                            onChange={(e) => setProjectDescription(e.target.value)} maxLength={256} required >  
                        </textarea>
                    </div>
                    <div className='project-tech-container'>
                        <label for='projectTech'>Technology Used</label>
                        <textarea 
                            id='projectTech' name='projectTech' value={projectTech}
                            onChange={(e) => setProjectTech(e.target.value)} maxLength={81} required>  
                        </textarea>
                    </div>
                    <div className='project-gitlink-container'>
                        <label for='projectTech'>GitHub link</label>
                        <input 
                            id='projectGitLink' name='projectGitLink' value={projectGitLink}
                            onChange={(e) => setProjectGitLink(e.target.value)} maxLength={81} required>  
                        </input>
                    </div>
                    <div className='save-button-container'>
                        <button type='submit' className='save-button'>SAVE</button>   
                    </div>
                                     
                </form>
            </div>
        </div>
    )
}

export default ProjectEditModal