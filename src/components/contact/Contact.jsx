import css from "./Contact.module.css";
import { TiUser } from "react-icons/ti";
import { TiPhone } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={css.ContactItem}>
      <p className={css.contactName}>
        {" "}
        <TiUser />
        {name}
      </p>
      <p className={css.contactName}>
        <TiPhone />
        {number}
      </p>
      <button className={css.contactDeleteBtn} onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
