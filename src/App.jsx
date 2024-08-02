import { useState } from "react";
import "./App.css";
import dataContacts from "./data/contacts.json";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

export default function App() {
  const [contacts, setContacts] = useState(dataContacts);
  return (
    <div>
      <h1 className="title">Phonebook</h1>
      {/* <ContactForm /> */}
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
}
