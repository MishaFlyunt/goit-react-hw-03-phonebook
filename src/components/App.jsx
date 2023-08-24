import { GlobalStyle, Container } from './GlobalStyle';
import React, { Component } from 'react';

import contact from './contact';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: contact,
    filter: '',
  };

  componentDidMount() {
    const localSorageKey = localStorage.getItem('conact-filter');

    if (localSorageKey !== null) {
      this.setState({ contacts: JSON.parse(localSorageKey) });
    } else {
      this.setState({ contacts: contact });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem('conact-filter', JSON.stringify(contacts));
    }
  }

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
        (contact.name.toLowerCase().trim() ===
          newName.name.toLowerCase().trim()) &
        (contact.number.trim() === newName.number.trim())
    )
      ? alert(`Contact number ${newName.number} already exists`)
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
