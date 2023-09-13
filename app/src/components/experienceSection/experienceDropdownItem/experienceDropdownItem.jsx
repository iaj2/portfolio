import './experienceDropdownItem.scss'
import { useState } from 'react'

const ExperienceDropdownItem = ({companyName,jobTitle, jobDuration, jobDescription}) => {
    const [dropdown, setDropdown] = useState(false)
    

    const toggleDropdown = () => {
        setDropdown(!dropdown)
    }

    return ( 
        <div className='experience-item-container'>
            <div className='experience-item-header' onClick={toggleDropdown}>
                <a href='#experience-content'> 
   
                </a>
                <p>{companyName}<span>• {jobTitle} </span><br/>
                <span>• {jobDuration}</span></p>
            </div>
            {dropdown &&
            <p id='experience-content'>{jobDescription}</p>
            }
           
        </div>
    )
}

export default ExperienceDropdownItem