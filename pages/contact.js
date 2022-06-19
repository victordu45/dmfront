import React from 'react';
import Link from "next/link";
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("moqrbzov");
    if (state.succeeded) {
        return (
            <div className='containerMessage'>
                <p className='message'>Message envoyé</p>
                <div className='lienContact'>
                    <Link href={"https://dmfront-victordu45.vercel.app"}>
                        <div>Retour à l'accueil</div>
                    </Link>
                </div>
            </div>
        );
    }
    return (
        <div className="bodyContact">
            <div className="raceTitle">Formulaire de contact</div>
            <form className='formulaireContact' onSubmit={handleSubmit}>
                <div className='input'>
                    <label htmlFor="email">
                        Adresse Email
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
                </div>
                <div className='input'>
                    <label htmlFor="message">
                        Votre message
                    </label>
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
                </div>
                <button className='buttonContact' type="submit" disabled={state.submitting}>
                    Envoyer
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