'use client';
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
	const [errorMessage, setErrorMessage] = useState('');

	// Reference to the form
	const formRef = useRef();

	const handleSubmit = async e => {
		e.preventDefault();
		setErrorMessage('');

		const form = formRef.current; // Reference the form
		const email = form.from_email.value.trim();
		const message = form.message.value.trim();

		// Validate input fields
		if (!email || !message) {
			setErrorMessage('Please provide both email and message.');
			return;
		}

		try {
			await emailjs.sendForm(
				'service_bcjfsu9', // Your Service ID
				'template_k0mt06i', // Your Template ID
				form,
				'TPrGgwOce03IB9kWu' // Your Public Key
			);
			alert('Message sent successfully!');
			form.reset(); // Reset the form fields
		} catch (err) {
			console.error('Failed to send message:', err);
			alert('Failed to send the message, please try again.');
		}
	};

	return (
		<section className='flex flex-col lg:flex-row items-center justify-center py-20 gap-20 p-0 lg:px-20'>
			<div className='flex flex-col gap-5 w-full lg:w-1/2 items-center lg:items-start text-center lg:text-start'>
				<h5 className='font-semibold text-3xl'>Contact with me</h5>
				<p className='w-full lg:w-3/4 text-lg text-secondary'>
					I&apos;m always open to discussing new projects, creative ideas, or
					opportunities. Feel free to reach out through the form below.
				</p>
			</div>

			<form
				ref={formRef}
				className='bg-secondary flex flex-col gap-5 px-5 py-10 rounded-2xl'
				onSubmit={handleSubmit}
			>
				<h5 className='font-medium text-xl pl-2'>Get in touch</h5>
				<div>
					<input
						className='input'
						type='email'
						name='from_email' // Ensure this matches the template variable
						placeholder='Your E-mail'
					/>
				</div>
				<div>
					<textarea
						className='w-full h-20 p-2 rounded-lg outline-none'
						name='message' // Ensure this matches the template variable
						placeholder='Your Message'
					/>
				</div>
				{errorMessage && <p className='text-red-500'>{errorMessage}</p>}
				<button
					className='bg-violet text-white rounded-lg w-40 h-10'
					type='submit'
				>
					Send
				</button>
			</form>
		</section>
	);
};

export default Contact;
