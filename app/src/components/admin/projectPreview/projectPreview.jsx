import './projectPreview.scss'
import EditButton from '../editButton/editButton'

const ProjectPreview = () => {

    return (
        <>
            <div className='project-preview-container'>
            <p className='project-title'>BattleShip AI</p>
            <EditButton />
            </div>
        </>
    )
}

export default ProjectPreview