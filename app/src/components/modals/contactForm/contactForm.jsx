import React, { useState } from 'react'
import { ReactComponent as CloseIcon } from '../../../assets/icons/close.svg';
import './contactForm.scss'

export default function ContactFormModal() {
    const [modal, setModal] = useState(true);

    const toggleModal = () => {
        setModal(!modal)
    }
    return (
    	<>
        <button className='contact-button' id='contact' onClick={toggleModal}>
            CONTACT
        </button>
        {modal &&
          <div className='contact-form-modal'>
			<div className='contact-form'>
			<button className="close-button" onClick={toggleModal}>
				{<CloseIcon />}
			</button>
				<p className="title">Let's Get Connected!</p>
				
			</div>
        </div>
        }
      </>
    )
}