import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("moqrbzov");
    if (state.succeeded) {
        return <p>Message envoyé</p>;
    }
    return (
        <div className="bodyContact">
            <form className='formulaireContact' onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder='email'
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                    placeholder='Votre message'
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button className='buttonContact' type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </div>
    );
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;