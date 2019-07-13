import React from 'react';
import PropTypes from 'prop-types';

import fields from './fields';
import styles from './styles';

import Section from '../../../components/Section';
import Form from '../../../components/Form';

const Contact = ({ handleSubmit }) => {
  return (
    <div className="container">
      <Section title="Get in Touch">
        <Form fields={fields} handleSubmit={handleSubmit} />
      </Section>

      <style jsx>{styles}</style>
    </div>
  );
};

Contact.propTypes = {
  handleSubmit: PropTypes.func,
};
Contact.defaultProps = {};

export default Contact;
