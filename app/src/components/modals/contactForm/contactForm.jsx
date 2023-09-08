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
				<h2 className="title">Let's Get Connected!</h2>
				<div className='name-container'>
					<label for='name-input'>Name</label>
					<input type='text' name='name' id='name-input'></input>
				</div>
				<div className='email-container'>
					<label for='email-input'>Email</label>
					<input type='email' name='email' id='email-input' required></input>
				</div>
				<div className='subject-container'>
					<label for='subject-input'>Subject</label>
					<input type='text' name='subject' id='subject-input'></input>
				</div>
				<div className='message-container'>
					<label for='message-input'>Message</label>
					<textarea name='message' id='message-input' className='message-input'></textarea>
				</div>
				<button className='submit-button'>SUBMIT</button>
			</div>
        </div>
        }
      </>
    )
}