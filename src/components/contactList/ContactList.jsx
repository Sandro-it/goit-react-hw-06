import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { selectNameFilter, selectContacts } from "../../redux/selectors";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className={css.contactsList}>
      {filteredContacts.map((contact) => (
        <div className={css.contactsItem} key={nanoid()}>
          <Contact contact={contact} />
        </div>
      ))}
    </div>
  );
};

export default ContactList;
