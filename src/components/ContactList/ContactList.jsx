import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem/ContactListItem';

const ContactList = ({ onFilter, onDelete }) => (
  <>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Number</th>
          <th scope="col">delete</th>
        </tr>
      </thead>
      <tbody>
        {onFilter().map(({ name, number, id }) => (
          <ContactListItem
            name={name}
            number={number}
            id={id}
            key={id}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  </>
);

ContactList.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
