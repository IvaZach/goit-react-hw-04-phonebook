import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ name, number, onDelete, id }) => {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{number}</td>
        <td>
          <button arial-label="Delete" onClick={() => onDelete(id)}>
            X
          </button>
        </td>
      </tr>
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;
