import './projectPreview.scss'
import EditButton from '../editButton/editButton'
import { useState, useEffect, useRef } from 'react'
import ProjectEditModal from '../../modals/crudModals/projectEdit'
import { db } from '../../../firebase-config'
import { collection, getDocs } from '@firebase/firestore'

const ProjectPreview = () => {
    const [editModal, setEditModal] = useState(false);
    const editModalRef = useRef()
	const [projects, setProjects] = useState([])
    const projectsCollectionRef = collection(db, 'projects')

    useEffect(() => {
		const handleClickOutside = (e) => {
			if (editModalRef.current && !editModalRef.current.contains(e.target)) {
			  setEditModal(false);
			}
		  };
		
		if (editModal) {
			// Add a class to the body to disable scrolling when the modal is open
		  document.body.classList.add('modal-active');
			// Listen for mouse click outside modal area
			document.addEventListener('mousedown', handleClickOutside);
		} else {
		  document.body.classList.remove('modal-active');
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		}
	
	}, [editModal]);
    
    // useEffect( () => {
    //     const getProjects = async () => {
    //         const data = await getDocs(projectsCollectionRef)
    //         setProjects(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    //     }

    //     getProjects()
    // }, [projectsCollectionRef])

    return (
        <>
        {projects.map((project) => {
			return (
				<>
				<div className='job-preview-container'>
					<p className='project-title'>{project.projectTitle} </p>
					<EditButton modal={editModal} setModal={setEditModal}/>
				</div>
				{
				editModal && 
					<ProjectEditModal 
					category={'edit'}
					modalRef={editModalRef}
					modal={editModal}
					setModal={setEditModal} 
					project={project}
				/>
				}
				</>
			)
		})}
        </>
    )
}

export default ProjectPreview