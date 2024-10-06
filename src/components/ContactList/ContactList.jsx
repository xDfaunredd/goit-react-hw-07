import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectVisibleContacts } from "../../redux/selects";
import s from "./ContactList.module.css";
import { useEffect } from "react";
import { fetchAllContacts } from "../../redux/contactsOps";

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
