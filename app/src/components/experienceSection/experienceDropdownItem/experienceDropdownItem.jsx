import './experienceDropdownItem.scss'
import { useState } from 'react'

const ExperienceDropdownItem = ({job}) => {
    const [dropdown, setDropdown] = useState(false)
    

    const toggleDropdown = () => {
        setDropdown(!dropdown)
    }
    const s = `
    • Engineered an advanced RPC system for a cutting-edge IoT Cloud device, using ZeroMQ for seamless socket connections and Protocol Buffers for rapid data transfer and broad language compatibility.
    • Pioneered a Python RPC server, leveraging the device's SDK, achieving sub-1ms overhead and enabling eight concurrent request resolutions through multi-threading.
    • Developed a JavaScript/TypeScript NPM client for seamless integration with JavaScript users and a 99.9% decrease in the lines of code needed to develop nodes in Node-RED.
    • Designed custom Node-RED nodes with the JavaScript client to enhance user-friendliness and accessibility.
    
    Technology used: Python, Pytest, Node.js, JavaScript/TypeScript, Jest, ZeroMQ, Protocol Buffers, Linux.
    `;
    
    

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