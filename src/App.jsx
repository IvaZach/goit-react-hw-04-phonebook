import React, { Component } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Section from './components/Section/Section';
import InitialContacts from './data/InitialContacts.json';

export class App extends Component {
  state = {
    contacts: InitialContacts,
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);

    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  filterContact = () => {
    const { filter, contacts } = this.state;

    if (filter.length) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contacts;
    }
  };

  thereIsContact = name => {
    return this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  addContact = contact => {
    if (!this.thereIsContact(contact.name)) {
      this.setState(({ contacts }) => {
        return { contacts: [...contacts, contact] };
      });
    } else alert(`${contact.name} is already in contacts.`);
  };

  deleteContact = contactId => {
    console.log(contactId);
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    return (
      <Section>
        <div>
          <h1 className="h1">PHONE BOOK</h1>
          <ContactForm onSubmit={this.addContact} />
        </div>
        <div>
          <h2 className="h1">Contacts</h2>
          <Filter onChange={this.handleChange} filter={this.state.filter} />
          <ContactList
            onFilter={this.filterContact}
            onDelete={this.deleteContact}
          />
        </div>
      </Section>
    );
  }
}
