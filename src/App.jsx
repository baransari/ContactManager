import './App.css'
import { useState } from 'react'
import initialContacts from './data/initialContacts'
import ContactForm from '../components/ContactForm'
import ContactList from '../components/ContactList'


function App() {
  const [contacts , setContacts] = useState(initialContacts)
  const [searchText , setSearchText] = useState('')

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
 )


  return (
    <>
      <ContactForm setContacts={setContacts}/>

      <input 
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="text" 
        placeholder='Search Contact...' 
      
      />
      <ContactList contacts={filteredContacts}/>
    </>
  )
}

export default App
