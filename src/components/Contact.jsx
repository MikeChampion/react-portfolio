import PropTypes from "prop-types";

function ContactForm({ contactName, contactEmail, contactMessage }) {

    
    return (
        <div className="flex flex-col items-center mt-8 w-11/12 gap-4">
            <h2>Contact me</h2>
            <form className="flex flex-col items-start gap-4 w-full md:w-3/5 lg:w-1/3 p-2 md:p-4 lg:p-8 font-bold bg-white border-gray-300 border-2 rounded ">
                <div className="flex gap-2 w-full">
                    <label htmlFor={contactName}>Name:</label>
                    <input type="text" name={contactName} id={contactName} className="border-2 border-gray-300 w-full rounded" />
                </div>
                <div className="flex gap-2 w-full">
                    <label htmlFor={contactEmail}>Email:</label>
                    <input type="text" name={contactEmail} id={contactEmail} className="border-2 border-gray-300 w-full rounded ml-1" />
                </div>
                <div className="flex flex-col items-center gap-2">
                    <label htmlFor={contactMessage} className="self-start">Message:</label>
                    <textarea rows="4" cols="40" name={contactMessage} id={contactMessage} className="border-2 border-gray-300 w-full rounded md:ml-8" />
                </div>
                <button type="submit" className="flex self-end md:self-center px-4 py-2 bg-blue-700 rounded text-gray-300">Submit</button>
            </form>
        </div>
    )   
}

{/* Form with fields for name, an email address, and a message
                WHEN I move my cursor out of one of the form fields without entering text
                THEN I receive a notification that this field is required
                WHEN I enter text into the email address field
                THEN I receive a notification if I have entered an invalid email address */}

ContactForm.propTypes = {
    contactName: PropTypes.string.isRequired,
    contactEmail: PropTypes.string.isRequired,
    contactMessage: PropTypes.string.isRequired,
}

export default ContactForm