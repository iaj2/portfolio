import './jobPreview.scss'
import { useState, useEffect, useRef } from 'react'
import EditButton from '../editButton/editButton'
import JobEditModal from '../../modals/crudModals/jobEdit'
import { db } from '../../../firebase-config'
import { collection, getDocs } from '@firebase/firestore'

const JobPreview = () => {
    const [editModal, setEditModal] = useState(false);
    const editModalRef = useRef()
	const [jobs, setJobs] = useState([])
    const jobCollectionRef = collection(db, 'jobs')

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

	//   useEffect( () => {
    //     const getJobs = async () => {
    //         const data = await getDocs(jobCollectionRef)
    //         setJobs(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    //     }

    //     getJobs()
    // }, [jobCollectionRef])

    return (
        <>
				
		{jobs.map((job) => {
			return (
				<>
				<div className='job-preview-container'>
					<p>{job.companyName}</p>
					<p className='job-title'>{job.jobTitle} </p>
					<EditButton modal={editModal} setModal={setEditModal}/>
				</div>
				{
				editModal && 
					<JobEditModal 
					category={'edit'}
					modalRef={editModalRef}
					modal={editModal}
					setModal={setEditModal} 
					job={job}
				/>

				}
				</>
				
			)
		})}
            
        
        </>
        
         
    )
}

export default JobPreview