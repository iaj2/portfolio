import './admin.scss'
import { ReactComponent as BackIcon } from '../../assets/icons/back.svg'
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg'
import JobPreview from './jobPreview/jobPreview'
import JobEditModal from '../modals/crudModals/jobEdit'
import AddButton from './addButton/addButton'
import ConfirmationModal from '../modals/confirmationModal/confirmationModal'
import { useState, useEffect, useRef } from 'react'
import ProjectPreview from './projectPreview/projectPreview'
import ProjectEditModal from '../modals/crudModals/projectEdit'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const [addJobModal, setAddJobModal] = useState(false)
    const [addProjectModal, setAddProjectModal] = useState(false)
    const [confirmModal, setConfirmModal] = useState(false)
    const addJobModalRef = useRef()
    const addProjectRef = useRef()
    const confirmModalRef = useRef()
    const navigate = useNavigate()

    useEffect(() => {
      const authenticated = localStorage.getItem("authenticated")
      if(!authenticated) {
        navigate('/admin-login')
      }
    }, [navigate])

    useEffect(() => {
		const handleClickOutside = (e) => {
			if (addJobModalRef.current && !addJobModalRef.current.contains(e.target)) {
			  setAddJobModal(false)
			}
      else if (addProjectRef.current && !addProjectRef.current.contains(e.target)) {
			  setAddProjectModal(false)
			}
      else if(confirmModalRef.current && !confirmModalRef.current.contains(e.target)) {
        setConfirmModal(false)
      }
    }
		
		if (addJobModal || addProjectModal || confirmModal) {
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
	
	  }, [addJobModal, addProjectModal, confirmModal])

    const handleLogout = () => {
      localStorage.clear()
      navigate('/')
    }

    return (
        <div className='admin-page'>
            <button className='back-link' onClick={()=> setConfirmModal(true)} >
              Log Out
                <BackIcon />
            </button>
            <button className='home-link' onClick={()=> navigate('/')} >
              Home
                <HomeIcon />
            </button>
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
            {
              confirmModal &&
              <ConfirmationModal confirmModalRef={confirmModalRef} confirmAction={handleLogout} cancelAction={()=>setConfirmModal(false)} />
            }
        </div>
    )
}

export default Admin