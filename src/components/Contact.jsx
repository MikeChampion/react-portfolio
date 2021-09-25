import PropTypes from "prop-types";

function ContactForm({ contactName, contactEmail, contactMessage }) {

    
    return (
        <div className="flex flex-col items-center p-4 mt-8 w-11/12 gap-4 bg-gray-300 rounded-xl">
            <p>The CONTACT page</p>
            <div className="flex flex-col items-start gap-4 w-11/12 md:w-3/4 font-bold">
                <div className="flex gap-2">
                    <label htmlFor={contactName}>Name:</label>
                    <input type="text" name={contactName} id={contactName} />
                </div>
                <div className="flex gap-2">
                    <label htmlFor={contactEmail}>Email:</label>
                    <input type="text" name={contactEmail} id={contactEmail} className="ml-1" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor={contactMessage}>Message:</label>
                    <textarea rows="4" cols="38" name={contactMessage} id={contactMessage} className="md:ml-8" />
                </div>
                <button className="flex self-end md:self-center px-4 py-2 bg-blue-700 rounded text-gray-300">Submit</button>
            </div>
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