import './admin.scss'
import { ReactComponent as BackIcon } from '../../assets/icons/back.svg'
import { Link } from 'react-router-dom'
import JobPreview from './jobPreview/jobPreview'
import JobEditModal from '../modals/crudModals/jobEdit'
import AddButton from './addButton/addButton'
import { useState, useEffect, useRef } from 'react'
import ProjectPreview from './projectPreview/projectPreview'
import ProjectEditModal from '../modals/crudModals/projectEdit'

const Admin = () => {
    
    const [addJobModal, setAddJobModal] = useState(false);
    const addJobModalRef = useRef()

    const [addProjectModal, setAddProjectModal] = useState(false);
    const addProjectRef = useRef()

    useEffect(() => {
		const handleClickOutside = (e) => {
			if (addJobModalRef.current && !addJobModalRef.current.contains(e.target)) {
			  setAddJobModal(false);
			}
      else if (addProjectRef.current && !addProjectRef.current.contains(e.target)) {
			  setAddProjectModal(false);
			}
		  };
		
		if (addJobModal || addProjectModal) {
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
	
	  }, [addJobModal, addProjectModal]);

    return (
        <div className='admin-page'>
            <Link className='back-link' to='/'>
                <BackIcon />
            </Link>
            <div className='jobs-header'>
                <h1 className='jobs-title'>Jobs</h1>
                <AddButton modal={addJobModal} setModal={setAddJobModal}/>
                {
                    addJobModal && 
                    <JobEditModal
                    category={'add'} 
                    modalRef={addJobModalRef}
                    modal={addJobModal} 
                    setModal={setAddJobModal}
                    />
                }
            </div>
            <JobPreview />
            <div className='projects-header'>
              <h1 className='projects-title'>Projects</h1>
              <AddButton modal={addProjectModal} setModal={setAddProjectModal}/>
              {
                    addProjectModal && 
                    <ProjectEditModal
                    category={'add'} 
                    modalRef={addProjectRef}
                    modal={addProjectModal} 
                    setModal={setAddProjectModal}
                    />
                }
            </div>
            <ProjectPreview />
            
        </div>
    )
}

export default Admin