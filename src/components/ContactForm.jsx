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

    setContacts(prevContacts => [...prevContacts, { id: nanoid(), name, number }]);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Nombre</h2>
      <input type="text" name="name" placeholder="Nombre" value={name} onChange={handleChange} required />
      <h2>Telefono</h2>
      <input type="tel" name="number" placeholder="Número de teléfono" value={number} onChange={handleChange} required />
      <button type="submit">Agregar contacto</button>
    </Form>
  );
};

export default ContactForm;