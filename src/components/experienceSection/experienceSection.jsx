import './experienceSection.scss'
import ExperienceDropdownItem from './experienceDropdownItem/experienceDropdownItem'
import { useEffect, useState } from 'react'
import { db } from '../../firebase-config'
import { collection, getDocs } from '@firebase/firestore'

const ExperienceSection = () => {
    const [jobs, setJobs] = useState([])
    const jobCollectionRef = collection(db, 'jobs')

    // useEffect( () => {
    //     const getJobs = async () => {
    //         const data = await getDocs(jobCollectionRef)
    //         setJobs(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    //     }

    //     getJobs()
    // }, [jobCollectionRef])

    return (
        <>
            <div className="experience-title-container">
                <h1 className="experience-title">Experience</h1>
            </div>
            <div className='experience-dropdown-container'>
                {/* <ExperienceDropdownItem /> */}
                {jobs.map((job) => {
                    return (
                        <ExperienceDropdownItem 
                        job={job}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default ExperienceSection