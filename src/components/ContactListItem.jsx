import React from 'react';
import {List} from './App.styled'

const ContactListItem = ({ contact, handleDelete }) => {
  return (
    <List>
      {contact.name} - {contact.number}
      <button onClick={() => handleDelete(contact.id)}>Eliminar</button>
    </List>
  );
};

export default ContactListItem
