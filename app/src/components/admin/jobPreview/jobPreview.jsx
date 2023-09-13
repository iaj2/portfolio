import './jobPreview.scss'
import { useState, useEffect, useRef } from 'react'
import EditButton from '../editButton/editButton'
import JobEditModal from '../../modals/crudModals/jobEdit'

const JobPreview = () => {
    const [editModal, setEditModal] = useState(false);
    const editModalRef = useRef()

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

    return (
        <>
            <div className='job-preview-container'>
                <EditButton modal={editModal} setModal={setEditModal}/>
            </div>
        {
            editModal && 
            <JobEditModal 
			category={'edit'}
			modalRef={editModalRef}
			modal={editModal}
			setModal={setEditModal} 
			/>

        }
        </>
        
         
    )
}

export default JobPreview