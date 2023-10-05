import './experienceDropdownItem.scss'
import { useState } from 'react'

const ExperienceDropdownItem = ({job}) => {
    const [dropdown, setDropdown] = useState(false)
    

    const toggleDropdown = () => {
        setDropdown(!dropdown)
    }
    

    return ( 
        <div className='experience-item-container'>
            <div className='experience-item-header' onClick={toggleDropdown} id='experience-item'>
                <a href='#experience-item'> 
   
                </a>
                <p>{job.companyName}</p>
                <p className='job-title'>{job.jobTitle} </p>
                <p> {job.jobStart} - {job.jobEnd}</p>
            </div>
            {dropdown &&
            <div className='job-description-container'> <p className='job-description'>{job.jobDescription}</p>
            {/* <p>{s}</p> */}
            </div>
            
            }
           
        </div>
    )
}

export default ExperienceDropdownItem