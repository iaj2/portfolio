import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete.svg'
import './deleteButton.scss'

const DeleteButton = ({docId, setDocToDelete, setConfirmModal}) => {

    const handleDelete = () => {
		console.log(docId)
		setDocToDelete(docId)
		setConfirmModal(true)
	}

    return (
        <>
            <button className='delete-button' onClick={handleDelete}>
                <DeleteIcon />
            </button>
        </>
    )
}

export default DeleteButton