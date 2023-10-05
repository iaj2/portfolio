import './jobPreview.scss'
import { useState, useEffect, useRef } from 'react'
import EditButton from '../editButton/editButton'
import JobEditModal from '../../modals/crudModals/jobEdit'
import DeleteButton from '../deleteButton/deleteButton'
import ConfirmationModal from '../../modals/confirmationModal/confirmationModal'
import { db } from '../../../firebase-config'
import { collection, getDocs, deleteDoc, doc } from '@firebase/firestore'


const JobPreview = () => {
    const [editModal, setEditModal] = useState(false)
    const editModalRef = useRef()
	const [jobs, setJobs] = useState([])
	const [confirmModal, setConfirmModal] = useState(false)
	const [jobIdToDelete, setJobIdToDelete] = useState('')
	const confirmModalRef = useRef()
    const jobCollectionRef = collection(db, 'jobs')

    useEffect(() => {
		const handleClickOutside = (e) => {
			if (editModalRef.current && !editModalRef.current.contains(e.target)) {
			  setEditModal(false);
			}
			else if(confirmModalRef.current && !confirmModalRef.current.contains(e.target)) {
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

	  useEffect( () => {
        const getJobs = async () => {
            const data = await getDocs(jobCollectionRef)
            setJobs(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getJobs()
    }, [jobCollectionRef])

	const deleteJob =  async () => {
		const jobDoc = doc(db, 'jobs', jobIdToDelete)
		await deleteDoc(jobDoc)
		setConfirmModal(false)
		alert('Sucessfully deleted job!')
	}

    return (
        <>
				
		{jobs.map((job) => {
			return (
				<>
				<div className='job-preview-container'>
					<p>{job.companyName}</p>
					<p className='job-title'>{job.jobTitle} </p>
					<DeleteButton docId={job.id} setDocToDelete={setJobIdToDelete} setConfirmModal={setConfirmModal}/>
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
        {
			confirmModal &&
			<ConfirmationModal confirmModalRef={confirmModalRef} confirmAction={deleteJob} cancelAction={() => setConfirmModal(false)}/>
		}
        </>
        
         
    )
}

export default JobPreview