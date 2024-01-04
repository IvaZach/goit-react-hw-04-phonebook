import React from 'react';
import css from './Section.module.css';

const Section = ({ children }) => (
  <section className={css.section}>{children}</section>
);

export default Section;
