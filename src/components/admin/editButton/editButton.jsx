import './editButton.scss'
import { ReactComponent as EditIcon } from '../../../assets/icons/edit.svg'

const EditButton = ({ modal, setModal }) => {
    
    const toggleEditModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <button className='edit-button' onClick={toggleEditModal}>
                Edit <EditIcon />
            </button>
        </>
        
    )
}

export default EditButton