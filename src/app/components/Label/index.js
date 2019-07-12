import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';

import styles from './styles';
import { colors } from '../../static/styles/styleConstants';

import Typography from '../Typography';

const Label = ({ text }) => {
  return (
    <Card style={{ display: 'inline-block' }}>
      <div className="container">
        <Typography type="paragraph" color={colors.tertiary}>
          {text}
        </Typography>
      </div>

      <style jsx>{styles}</style>
    </Card>
  );
};

Label.propTypes = {
  text: PropTypes.string,
};
Label.defaultProps = {};

export default Label;
