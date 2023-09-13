import './jobEdit.scss'
import { ReactComponent as CloseIcon } from '../../../assets/icons/close.svg'

const JobEditModal = ({category, modalRef, modal, setModal}) => {

    const toggleModal = () => {
        setModal(!modal)
    }


    return (
        <div className='job-edit-background'>
            <div className='job-edit-modal' ref={modalRef}>
                <button className="close-button" onClick={toggleModal}>
					{<CloseIcon />}
				</button>
                <h2 className='title'>{category==='add'? 'Add Job' : 'Edit Job Details'}</h2>
                <div className='job-edit-container'>
                    <div className='company-name-container'>
                        <label for='companyName'>CompanyName</label>
                        <input type='text' name='companyName' id='companyName' className='company-name'></input>
                    </div>
                    <div className='job-title-container'>
                        <label for='jobTitle'>Job Title</label>
                        <input type='text' name='jobTitle' id='jobTitle' className='job-title'></input>
                    </div>
                    <div className='job-start-container'>
                        <label for='jobStart'>Start Date</label>
                        <input type='month' name='jobStart' id='jobStart'></input>
                    </div>
                    <div className='job-end-container'>
                        <label for='jobEnd'>End Date</label>
                        <input type='month' name='jobEnd' id='jobEnd'></input>
                    </div>
                    <div className='job-description-container'>
                        <label for='jobDescription'>Job Description</label>
                        <textarea id='jobDescription' name='jobDescription'></textarea>
                    </div>
                    <div className='save-button-container'>
                        <button className='save-button'>SAVE</button>   
                    </div>
                                     
                </div>
            </div>
        </div>
    )
}

export default JobEditModal