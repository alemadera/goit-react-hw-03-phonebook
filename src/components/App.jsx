import React, { useState } from 'react';
import { Container } from './App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
  ];
  
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const deleteContact = (id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <h1>Agenda de Contactos</h1>
      <ContactForm contacts={contacts} setContacts={setContacts} />
      <h2>Contactos</h2>
      <h3>Busca el contacto por nombre</h3>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList contacts={contacts} filter={filter} deleteContact={deleteContact} />
    </Container>
  );
};

export default App;
