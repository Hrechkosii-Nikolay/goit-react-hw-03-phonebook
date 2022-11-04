import PropTypes from 'prop-types';

import Button from 'components/Button/Button';

import { ContactItem } from './contacts.styled';
import { ContactsList } from './contacts.styled';

const Contacts = ({ title, contacts, children, onDeleteContact }) => (
  <div>
    <h2>{title}</h2>
    {children}
    <ContactsList>
      {contacts().map(({ id, name, number }) => (
        <ContactItem key={id}>
          <p>
            {name}: {number}
          </p>
          <Button
            type="button"
            text="Delete"
            onClick={() => onDeleteContact(id)}
          />
        </ContactItem>
      ))}
    </ContactsList>
  </div>
);

export default Contacts;

Contacts.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  contacts: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
