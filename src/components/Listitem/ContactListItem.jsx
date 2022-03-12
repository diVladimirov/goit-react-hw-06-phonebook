import React from 'react';
import PropTypes from 'prop-types';
import { ContactListItem, ContactsListButton } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactListLi = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ContactListItem key={id}>
      <span>{name}:</span>
      <span> {number}</span>
      <ContactsListButton
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </ContactsListButton>
    </ContactListItem>
  );
};

export default ContactListLi;

ContactListLi.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  OnDeleteContact: PropTypes.func,
};
