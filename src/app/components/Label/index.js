import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Typography from '../Typography';

const Label = ({ small, children }) => {
  const textType = small ? 'small' : 'paragraph';

  return (
    <div className={`container${small ? ' small' : ''}`}>
      <Typography type={textType} bold>
        {children}
      </Typography>

      <style jsx>{styles}</style>
    </div>
  );
};

Label.propTypes = {
  small: PropTypes.bool,
  children: PropTypes.string,
};
Label.defaultProps = {};

export default Label;
