import ContactItem from './ContactItem'

const ContactList = ({ contacts }) => {
  return (
    <div>
      {contacts.length === 0 && (
        <p>No contacts found</p>
      )}

      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
        />
      ))}
    </div>
  )
}

export default ContactList
