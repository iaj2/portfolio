import './jobEdit.scss'
import { ReactComponent as CloseIcon } from '../../../assets/icons/close.svg'
import { useState } from 'react'
import { db } from '../../../firebase-config'
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore'

const JobEditModal = ({category, modalRef, modal, setModal, job}) => {
    const [companyName, setNewCompanyName] = useState(job?job.companyName:'')
    const [jobTitle, setNewJobTitle] = useState(job?job.jobTitle:'')
    const [jobStart, setNewJobStart] = useState(job?job.jobStart:'')
    const [jobEnd, setNewJobEnd] = useState(job?job.jobEnd:'')
    const [jobDescription, setNewJobDescription] = useState(job?job.jobDescription:'')

    const jobsCollectionRef = collection(db, 'jobs')

    const toggleModal = () => {
        setModal(!modal)
    }

    const createJob = async (e) => {
        e.preventDefault()
        await addDoc(jobsCollectionRef, {
            companyName: companyName,
            jobTitle: jobTitle,
            jobStart: jobStart,
            jobEnd: jobEnd,
            jobDescription: jobDescription
        })

        alert('Successfully added job!')
        window.location.reload();
    }

    const updateJob = async (e) => {
        e.preventDefault()
        const jobDoc = doc(db, 'jobs', job.id)
        const newFields = {
            companyName: companyName,
            jobTitle: jobTitle,
            jobStart: jobStart,
            jobEnd: jobEnd,
            jobDescription: jobDescription
        }
        await updateDoc(jobDoc, newFields)

        alert('Successfully saved new job details!')
        window.location.reload();

    }


    return (
        <div className='job-edit-background'>
            <div className='job-edit-modal' ref={modalRef}>
                <div className='button-container'>
                    <button className="close-button" onClick={toggleModal}>
                        {<CloseIcon />}
                    </button>
                </div>
                <h2 className='title'>{category==='add'? 'Add Job' : 'Edit Job Details'}</h2>
                <form className='job-edit-container' onSubmit={(e) => category==='add' ? createJob(e): updateJob(e)}>
                    <div className='company-name-container'>
                        <label for='companyName'>CompanyName</label>
                        <input 
                            type='text' name='companyName' id='companyName' value={companyName}
                            className='company-name' onChange={(e) => setNewCompanyName(e.target.value)} required>      
                        </input>
                    </div>
                    <div className='job-title-container'>
                        <label for='jobTitle'>Job Title</label>
                        <input 
                            type='text' name='jobTitle' id='jobTitle' className='job-title' value={jobTitle}
                            onChange={(e) => setNewJobTitle(e.target.value)} required>
                        </input>
                    </div>
                    <div className='job-start-container'>
                        <label for='jobStart'>Start Date</label>
                        <input 
                            type='month' name='jobStart' id='jobStart' value={jobStart}
                            onChange={(e) => setNewJobStart(e.target.value)} required>      
                        </input>
                    </div>
                    <div className='job-end-container'>
                        <label for='jobEnd'>End Date</label>
                        <input 
                            type='month' name='jobEnd' id='jobEnd' value={jobEnd}
                            onChange={(e) => setNewJobEnd(e.target.value)} required>    
                        </input>
                    </div>
                    <div className='job-description-container'>
                        <label for='jobDescription'>Job Description</label>
                        <textarea 
                            id='jobDescription' name='jobDescription' value={jobDescription}
                            onChange={(e) => setNewJobDescription(e.target.value)} required>  
                        </textarea>
                    </div>
                    <div className='save-button-container'>
                        <button type='submit' className='save-button'>SAVE</button>   
                    </div>
                                     
                </form>
            </div>
        </div>
    )
}

export default JobEditModal