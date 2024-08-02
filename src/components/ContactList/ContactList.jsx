import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts }) {
  return (
    <ul className={css["card-list"]}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={css.card}>
            <Contact name={contact.name} number={contact.number} />
          </li>
        );
      })}
    </ul>
  );
}
