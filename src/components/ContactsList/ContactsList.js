import s from "./ContactsList.module.css";

const ContactsList = ({ data, onDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {data.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <p>
            {name}: {number}
          </p>

          <button
            className={s.button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactsList;
