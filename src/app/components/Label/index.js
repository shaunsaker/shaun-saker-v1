import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import { colors } from '../../static/styles/styleConstants';

import Typography from '../Typography';

const Label = ({ small, children }) => {
  const textType = small ? 'small' : 'paragraph';

  return (
    <div className={`container${small ? ' small' : ''}`}>
      <Typography type={textType} color={colors.tertiary}>
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
