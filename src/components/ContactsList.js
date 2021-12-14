import React from 'react';
import s from './ContactsList.module.css';
const ContactsList = ({ list, findeContact, onDelet }) => {
  return (
    <ul className={s.ContactsList}>
      {findeContact
        ? findeContact.map(item => (
            <li className={s.ContactsList_item} key={item.id}>
              <p>
                &#9742; -- {item.name}- {item.number}
              </p>
              <button onClick={() => onDelet(item.id)} className={s.ItemBtn}>
                Delet
              </button>
            </li>
          ))
        : list.map(item => (
            <li className={s.ContactsList_item} key={item.id}>
              <p>
                &#9742; -- {item.name}- {item.number}
              </p>
              <button onClick={() => onDelet(item.id)} className={s.ItemBtn}>
                Delet
              </button>
            </li>
          ))}
    </ul>
  );
};
export default ContactsList;
