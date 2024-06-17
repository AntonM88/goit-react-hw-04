import s from "./ContactList.module.css";
import { Contact } from "../Contact/Contact";

export const ContactList = ({ users = [], handleDeleteUser }) => {
  return (
    <ul className={s.list}>
      {users.map((user) => (
        <Contact {...user} key={user.id} handleDeleteUser={handleDeleteUser} />
      ))}
    </ul>
  );
};
