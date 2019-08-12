import React from 'react';
import PropTypes from 'prop-types';

import fields from './fields';
import styles from './styles';

import Section from '../../../components/Section';
import Form from '../../../components/Form';
import Success from './Success';

const Contact = ({ hasSuccess, handleSubmit }) => {
  const formComponent = hasSuccess ? <Success /> : <Form fields={fields} handleSubmit={handleSubmit} />;

  return (
    <div className="container">
      <Section id="contact" title="Get in Touch">
        {formComponent}
      </Section>

      <style jsx>{styles}</style>
    </div>
  );
};

Contact.propTypes = {
  hasSuccess: PropTypes.bool,
  handleSubmit: PropTypes.func,
};
Contact.defaultProps = {};

export default Contact;
