import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = ({ name, number }) => {
    const existName = this.state.contacts.find(el => el.name === name);

    if (existName) {
      alert(`${name} is already in contacts.`);
      return;
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, { name, number, id: nanoid() }],
      }));
    }
  };

  filterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  visibleContacts = () => {
    return this.state.contacts.filter(el =>
      el.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );
  };

  deleteContact = deleteId => {
    console.log('deleteId');
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== deleteId),
    }));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.addContacts} />
          <Contacts
            title="Contacts"
            contacts={this.visibleContacts}
            onDeleteContact={this.deleteContact}
          >
            <Filter
              type="text"
              name="find"
              label="Find contacts by name"
              value={this.state.filter}
              onChange={this.filterContact}
            ></Filter>
          </Contacts>
        </Section>
      </>
    );
  }
}

export default App;
