import { ReactComponent as AddIcon } from '../../../assets/icons/add.svg'
import './addButton.scss'


const AddButton = ({modal, setModal}) => {

    const toggleModal = ()=> {
        setModal(!modal)
    }


    return (
        <button className='add-button' onClick={toggleModal}>Add <AddIcon /> </button>
    )
}

export default AddButton