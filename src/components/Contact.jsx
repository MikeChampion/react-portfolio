import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
            setErrorMessage("");
          } else if (inputType === 'email') {
            setEmail(inputValue);
            setErrorMessage("");
          } else {
            setMessage(inputValue);
            setErrorMessage("");
          }
    };

    const handleBlur = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (!inputValue) {
            setErrorMessage(`ERROR: ${inputType} cannot be blank`);
        } else if (inputType === "email" && !validateEmail(email)) {
            setErrorMessage(`Your email is invalid`);
            return;
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setErrorMessage('Name cannot be blank');
            return;
        }
        if (!message) {
            setErrorMessage('Message cannot be blank');
            return;
            }
        if (!validateEmail(email)) {
            setErrorMessage(`Your email is invalid`);
            return;
        }
    
        // If everything passes, this clears out the input 
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="flex flex-col items-center mt-8 w-11/12">
            <h2 className="text-3xl font-bold">Contact me</h2> 
            <div className="flex flex-col items-center mt-8 mb-20 w-11/12 lg:w-5/6 gap-4">
                <form className="flex flex-col items-start gap-4 w-full md:w-3/5 lg:w-1/3 md:p-4 lg:p-8 font-bold bg-white border-gray-300 border-2 rounded ">
                    <div className="flex gap-2 w-full">
                        <label htmlFor={name}>Name:</label>
                        <input id={name} value={name} name="name" onChange={handleInputChange} onBlur={handleBlur} type="email" className="border-2 border-gray-300 w-full rounded" />
                    </div>
                    <div className="flex gap-2 w-full">
                        <label htmlFor={email}>Email:</label>
                        <input id={email} value={email} name="email" onChange={handleInputChange} onBlur={handleBlur} type="email" className="border-2 border-gray-300 w-full rounded ml-1" />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <label htmlFor={message} className="self-start">Message:</label>
                        <textarea rows="4" cols="40" name="message" id={message} value={message} onChange={handleInputChange} onBlur={handleBlur} className="border-2 border-gray-300 w-full rounded md:ml-8" />
                    </div>
                    <button type="button"  onClick={handleFormSubmit} className="flex self-end md:self-center px-4 py-2 bg-blue-700 rounded text-gray-300">Submit</button>
                </form>
                {errorMessage && (
                    <div>
                    <p className="text-red-400">{errorMessage}</p>
                    </div>
                )}
            </div>
        </div>
    )   
}

export default ContactForm