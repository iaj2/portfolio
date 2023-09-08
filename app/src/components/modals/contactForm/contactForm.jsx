import React, { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import { ReactComponent as CloseIcon } from '../../../assets/icons/close.svg';
import './contactForm.scss'

export default function ContactFormModal() {
    const [modal, setModal] = useState(false)
	const formRef = useRef()

    const toggleModal = () => {
        setModal(!modal)
		
    }
	const sendEmail = (e) => {
		e.preventDefault()


		emailjs
			.sendForm(
				'service_cpc8x8s',
				'contact_form',
				formRef.current,
				'tK5rZ0OrKfidMlihM'
			)
			.then(
				() => {
					alert('Message successfully sent!')
					toggleModal()
				},
				(error) => {
					console.log(error)
					alert('Failed to send message :(. Please try again.')
				}
			)
	}
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (formRef.current && !formRef.current.contains(e.target)) {
			  setModal(false);
			}
		  };
		
		if (modal) {
			// Add a class to the body to disable scrolling when the modal is open
		  document.body.classList.add('modal-active');
			// Listen for mouse click outside modal area
			document.addEventListener('mousedown', handleClickOutside);
		} else {
		  document.body.classList.remove('modal-active');
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		}
	
	  }, [modal]);


    return (
    	<>
        <button className='contact-button' id='contact' onClick={toggleModal}>
            CONTACT
        </button>
        {modal &&
          <div className='contact-form-modal'>
			<form className='contact-form' ref={formRef} onSubmit={sendEmail}>
				<button className="close-button" onClick={toggleModal}>
					{<CloseIcon />}
				</button>
				<h2 className="title">Let's Get Connected!</h2>
				<div className='name-container'>
					<label for='name-input'>Name</label>
					<input type='text' name='user_name' id='name-input' required></input>
				</div>
				<div className='email-container'>
					<label for='email-input'>Email</label>
					<input type='email' name='user_email' id='email-input' required></input>
				</div>
				<div className='subject-container'>
					<label for='subject-input'>Subject</label>
					<input type='text' name='subject' id='subject-input'></input>
				</div>
				<div className='message-container'>
					<label for='message-input'>Message</label>
					<textarea name='message' id='message-input' className='message-input' required></textarea>
				</div>
				<button type='submit' className='submit-button' value="SUBMIT">SEND</button>
			</form>
        </div>
        }
      </>
    )
}