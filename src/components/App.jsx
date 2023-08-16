import { GlobalStyle, Container } from './GlobalStyle';
import React, { Component } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = newFilter => {
    this.setState({ filter: newFilter.target.value.toLowerCase().trim() });
  };

  handleDelete = contId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(cont => cont.id !== contId),
      };
    });
  };

  addName = newName => {
    const { contacts } = this.state;
    contacts.some(
      contact =>
        contact.name.toLowerCase().trim() ===
          newName.name.toLowerCase().trim() ||
        contact.number.trim() === newName.number.trim()
    )
      ? alert(`${newName.name} is already in contacts`)
      : this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, newName],
          };
        });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const lowerCaseFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(lowerCaseFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addName} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChangeFilter={this.changeFilter} />
        <ContactList contact={visibleContacts} onDelete={this.handleDelete} />

        <GlobalStyle />
      </Container>
    );
  }
}
