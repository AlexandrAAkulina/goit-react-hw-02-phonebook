import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import { Report } from 'notiflix/build/notiflix-report-aio';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = el => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...el, id: nanoid() }],
    }));
  };

  render() {
    return (
      <div>
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactList />
      </div>
    );
  }
}
