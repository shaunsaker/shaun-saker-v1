import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';

import styles from './styles';
import { colors } from '../../static/styles/styleConstants';

import Typography from '../Typography';

const Label = ({ small, children }) => {
  const textType = small ? 'small' : 'paragraph';

  return (
    <Card style={{ display: 'inline-block' }}>
      <div className={`container${small ? ' small' : ''}`}>
        <Typography type={textType} color={colors.tertiary}>
          {children}
        </Typography>
      </div>

      <style jsx>{styles}</style>
    </Card>
  );
};

Label.propTypes = {
  small: PropTypes.bool,
  children: PropTypes.string,
};
Label.defaultProps = {};

export default Label;
