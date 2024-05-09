import ContactList from "../contactList/ContactList";
import SearchBox from "../searchBox/SearchBox";
import ContactForm from "../contactForm/ContactForm";
import css from "./App.module.css";

const App = () => {
  return (
    <div className={css.mainContainer}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
