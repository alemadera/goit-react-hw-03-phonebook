import React, { useState } from 'react';
import { Form } from './App.styled';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix'; 

const ContactForm = ({ contacts, setContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const existingContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (existingContact) {
      Notiflix.Notify.warning(`¡El contacto ${name} ya está en la agenda!`);
      return;
    }

    const newContact = { id: nanoid(), name, number };
    setContacts(prevContacts => [...prevContacts, newContact]);
    setName('');
    setNumber('');

    // Guardar el nuevo contacto en localStorage
    const updatedContacts = [...contacts, newContact];
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Nombre</h2>
      <input type="text" name="name" placeholder="Nombre" value={name} onChange={handleChange} required />
      <h2>Teléfono</h2>
      <input type="tel" name="number" placeholder="Número de teléfono" value={number} onChange={handleChange} required />
      <button type="submit">Agregar contacto</button>
    </Form>
  );
};

export default ContactForm;
