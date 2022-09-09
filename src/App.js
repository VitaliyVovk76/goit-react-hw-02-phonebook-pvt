import React, { Component } from "react";
import { nanoid } from "nanoid";
import initialPhonebook from "./listnames.json";
import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";
import Filter from "./components/Filter";
import Container from "./components/Container";
import Title from "./components/Title";
import Section from "./components/Section";

class App extends Component {
  state = {
    contacts: initialPhonebook,
    filter: "",
  };

  addContact = ({ name, number }) => {
    const contact = { id: nanoid(), name: name, number: number };
    // const names = this.state.contacts.map((contact) => contact.name);
    // if (names.includes(name)) {
    //   alert("hello");
    //   return;
    // }
    if (this.banToAdd(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = (evt) => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  banToAdd = (searchName) => {
    return this.state.contacts.find((contact) => contact.name === searchName);
  };

  deleteContact = (deleteId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== deleteId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <Title title="Phonebook" />
        <Section>
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList
            data={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
