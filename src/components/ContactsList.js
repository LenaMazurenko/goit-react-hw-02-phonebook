import React from 'react';
const ContactsList = ({ list, findeContact }) => {
  return (
    <ul>
      {findeContact
        ? findeContact.map(item => <li key={item.id}>{item.name}</li>)
        : list.map(item => (
            <li key={item.id}>
              {item.name} - {item.number}
            </li>
          ))}
    </ul>
  );
};
export default ContactsList;
