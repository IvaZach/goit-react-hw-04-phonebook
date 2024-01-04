import PropTypes from 'prop-types';
import React from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValues = {
  name: '',
  number: '',
};

let schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required(),
  number: yup
    .string()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    const { name, number } = values;
    const contact = {
      name: name.trim(),
      number: number.trim(),
      id: nanoid(6),
    };
    onSubmit(contact);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className="mb-3">
          <label htmlFor="validationDefault01" className="form-label">
            Name
          </label>
          <Field
            type="text"
            name="name"
            id="validationDefault01"
            className="form-control"
            placeholder="first and last name"
          />
          <ErrorMessage name="name" component="div" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputTel" className="form-label">
            Number
          </label>
          <Field
            type="tel"
            name="number"
            id="inputTel"
            className="form-control"
            placeholder="###-##-##"
          />
          <ErrorMessage name="number" component="div" />
        </div>

        <button type="submit" className="btn btn-primary">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
