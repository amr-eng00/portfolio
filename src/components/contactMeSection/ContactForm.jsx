import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState("");

    const form = useRef();

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_r38n57z', 'template_efqgael', form.current, {
                publicKey: 'hxKY_nZOMTKcXUz5F',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setEmail("");
                    setName("");
                    setMessage("");
                    setSuccess("Message Sent!")
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div>
            <div className='text-cyan'>{success}</div>
            <form action="" className='flex flex-col gap-4 text-white' ref={form} onSubmit={sendEmail}>
                <input
                    type="text"
                    name='name'
                    placeholder='Your Name'
                    required
                    className='rounded-lg bg-lightBrown px-2 text-white h-12 caret-orange focus:border-orange focus:ring-2 focus:ring-orange focus:ring-opacity-50 focus:outline-none transition-all duration-300'

                    // className='h-12 rounded-lg bg-lightBrown px-2' 
                    value={name}
                    onChange={handleName}
                />
                <input
                    type="email"
                    name='email'
                    placeholder='Your Email'
                    required
                    className='rounded-lg bg-lightBrown px-2 text-white h-12 caret-orange focus:border-orange focus:ring-2 focus:ring-orange focus:ring-opacity-50 focus:outline-none transition-all duration-300'
                    // className='h-12 rounded-lg bg-lightBrown px-2'
                    value={email}
                    onChange={handleEmail}
                />
                <textarea
                    type="text"
                    name='message'
                    placeholder='Message'
                    rows="9"
                    cols="50"
                    required
                    className='rounded-lg bg-lightBrown p-2 text-white caret-orange focus:border-orange focus:ring-2 focus:ring-orange focus:ring-opacity-50 focus:outline-none transition-all duration-300'
                    // className='rounded-lg bg-lightBrown p-2'
                    value={message}
                    onChange={handleMessage}
                />
                <button type='submit' className='w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500'>Send</button>
            </form>
        </div>
    )
}

export default ContactForm