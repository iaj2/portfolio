import './confirmationModal.scss'

const ConfirmationModal = ({confirmModalRef, confirmAction, cancelAction}) => {
        return (
        <>  
            <div className='confirm-modal-background' >
                <div className='confirm-modal-container' ref={confirmModalRef}>
                    <div className='confirm-text-wrapper'>
                        <p>Are you sure you want to continue?</p>
                    </div>
                    <div className='confirm-button-wrapper'>
                        <button className='confirm-modal-button' onClick={confirmAction}>
                            Yes
                        </button>
                        <button className='confirm-modal-button' onClick={cancelAction}>
                            No
                        </button>
                    </div>
                    
                </div>
            </div>
                

        </>
    )
}

export default ConfirmationModal