import React from 'react';
import ContactListItem from './ContactListItem';
import { List } from './App.styled';

const ContactList = ({ contacts, filter, deleteContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id) => {
    deleteContact(id);

    // Actualizar localStorage después de eliminar un contacto
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  return (
    <List>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} handleDelete={handleDelete} />
      ))}
    </List>
  );
};

export default ContactList;
