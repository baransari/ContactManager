import React from 'react'

const ContactItem = ({contact}) => {
  return (
    <div className='contact-item'>
      <span>{contact.name}</span>
      <span>{contact.email}</span>
      <span>{contact.phone}</span>
    </div>
  )
}

export default ContactItem
