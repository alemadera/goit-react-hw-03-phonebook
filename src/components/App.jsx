import React, { useState, useEffect } from 'react';
import { Container } from './App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  const storedContacts = localStorage.getItem('contacts');
  console.log('storedContacts:', storedContacts);

  let initialContacts = [];
  try {
    initialContacts = storedContacts ? JSON.parse(storedContacts) : [];
  } catch (error) {
    console.error('Error parsing stored contacts:', error);
  }

  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  // Guardar los contactos en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
