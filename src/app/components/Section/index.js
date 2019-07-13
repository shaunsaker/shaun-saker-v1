import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Typography from '../Typography';

const Section = ({ title, children }) => {
  return (
    <div className="container">
      <div className="title-text-container">
        <Typography type="title">{title}</Typography>
      </div>

      {children}

      <style jsx>{styles}</style>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
Section.defaultProps = {};

export default Section;
