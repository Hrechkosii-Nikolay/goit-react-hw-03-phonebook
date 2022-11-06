import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

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
