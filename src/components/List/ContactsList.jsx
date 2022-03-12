import { ContactsListWrapper } from './ContactsList.styled';
import ContactListLi from '../Listitem/ContactListItem';
import { useSelector } from 'react-redux';

const ContactsList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactsListWrapper>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactListLi key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </ContactsListWrapper>
  );
};

export default ContactsList;
