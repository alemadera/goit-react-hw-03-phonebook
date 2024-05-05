import React, { Component } from 'react';
import { Container } from './App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filter: ''
    };
  }

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSetContacts = (newContacts) => {
    this.setState({ contacts: newContacts });
  };
  
  handleDeleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  handleaddContact = (newContact) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Container>
        <h1>Agenda de Contactos</h1>
        <ContactForm contacts={this.state.contacts} setContacts={this.handleSetContacts} />
        <h2>Contactos</h2>
        <h3>Busca el contacto por nombre</h3>
        <Filter filter={filter} handleChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} deleteContact={this.handleDeleteContact} />
      </Container>
    );
  }
}

export default App;
