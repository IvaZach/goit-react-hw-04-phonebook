import React, { useEffect, useState } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Section from './components/Section/Section';
import InitialContacts from './data/InitialContacts.json';

const getInitialContacts = () => {
  const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  if (parsedContacts) {
    return parsedContacts;
  } else {
    return InitialContacts;
  }
};

export const App = () => {
  const [contacts, setСontacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const thereIsContact = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const addContact = contact => {
    if (!thereIsContact(contact.name)) {
      setСontacts(prevState => [...prevState, contact]);
    } else alert(`${contact.name} is already in contacts.`);
  };

  const deleteContact = contactId => {
    setСontacts(contacts.filter(contact => contact.id !== contactId));
  };

  const handleChangeFilter = evt => {
    const { value } = evt.currentTarget;
    setFilter(value);
  };

  const filterContact = () => {
    if (filter.length) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
    } else {
      return contacts;
    }
  };

  return (
    <Section>
      <div>
        <h1 className="h1">PHONE BOOK</h1>
        <ContactForm onSubmit={addContact} />
      </div>
      <div>
        <h2 className="h1">Contacts</h2>
        <Filter onChange={handleChangeFilter} filter={filter} />
        <ContactList onFilter={filterContact} onDelete={deleteContact} />
      </div>
    </Section>
  );
};
