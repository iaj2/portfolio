import './projectPreview.scss'
import EditButton from '../editButton/editButton'
import { useState, useEffect, useRef } from 'react'
import ProjectEditModal from '../../modals/crudModals/projectEdit'
import DeleteButton from '../deleteButton/deleteButton'
import ConfirmationModal from '../../modals/confirmationModal/confirmationModal'
import { db } from '../../../firebase-config'
import { collection, getDocs, deleteDoc, doc } from '@firebase/firestore'

const ProjectPreview = () => {
    const [editModal, setEditModal] = useState(false);
    const editModalRef = useRef()
	const [projects, setProjects] = useState([])
    const [confirmModal, setConfirmModal] = useState(false)
    const [projectIdToDelete, setProjectIdToDelete] = useState('')
    const projectsCollectionRef = collection(db, 'projects')
    const confirmModalRef = useRef()

    useEffect(() => {
		const handleClickOutside = (e) => {
			if (editModalRef.current && !editModalRef.current.contains(e.target)) {
			  setEditModal(false);
			}
            else if( (confirmModalRef.current && !confirmModalRef.current.contains(e.target))){
                setConfirmModal(false)
            }
      
		  };
		
		if (editModal || confirmModal) {
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
	
	}, [editModal, confirmModal]);
    
    // useEffect( () => {
    //     const getProjects = async () => {
    //         const data = await getDocs(projectsCollectionRef)
    //         setProjects(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    //     }

    //     getProjects()
    // }, [projectsCollectionRef])

    const deleteProject =  async () => {
		const jobDoc = doc(db, 'projects', projectIdToDelete)
		await deleteDoc(jobDoc)
		setConfirmModal(false)
		alert('Sucessfully deleted project!')
	}

    return (
        <>
        {projects.map((project) => {
			return (
				<>
				<div className='job-preview-container'>
					<p className='project-title'>{project.projectTitle} </p>
                    <DeleteButton docId={project.id} setDocToDelete={setProjectIdToDelete} setConfirmModal={setConfirmModal}/>
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
        {
			confirmModal &&
			<ConfirmationModal confirmModalRef={confirmModalRef} confirmAction={deleteProject} cancelAction={() => setConfirmModal(false)}/>
		}
        </>
        
    )
}

export default ProjectPreview