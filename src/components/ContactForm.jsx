import { useState } from 'react'


const ContactForm = ({setContacts}) => {
    const[name , setName] = useState('')
    const[email , setEmail] = useState('')
    const[phone , setPhone] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()


    const newContact = {
        id : Date.now(),
        name,
        email,
        phone
    }

    setContacts(prev => [...prev, newContact])

    setName('')
    setEmail('')
    setPhone('')

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    placeholder='Phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />


                <button type='submit'>Add Contact</button>
        
            </form>
        </div>
    )
}

export default ContactForm
