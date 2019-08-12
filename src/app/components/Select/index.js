import React from 'react';
import PropTypes from 'prop-types';
import { Select, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { colors, rhythm } from '../../static/styles/styleConstants';
import styles from './styles';

import Typography from '../Typography';

// FIXME: Htf do you change the color of the Select?
const muiStyles = {
  root: {
    backgroundColor: colors.tertiary,
  },
  select: {
    padding: `${rhythm.vt / 2}px ${rhythm.hz / 2}px`,
    paddingRight: `${rhythm.hz}px`,
  },
};

const SelectComponent = ({ classes, selectedOptionIndex, options, handleChange }) => {
  return (
    <div className="container">
      <Select
        classes={{
          ...classes,
        }}
        value={selectedOptionIndex}
        onChange={handleChange}
        variant="outlined"
        margin="none"
      >
        {options &&
          options.map((item, index) => {
            return (
              <MenuItem key={item.name} value={index}>
                <Typography type="paragraph">{item.name}</Typography>
              </MenuItem>
            );
          })}
      </Select>

      <style jsx>{styles}</style>
    </div>
  );
};

SelectComponent.propTypes = {
  classes: PropTypes.shape({}),
  selectedOptionIndex: PropTypes.number,
  options: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  handleChange: PropTypes.func,
};
SelectComponent.defaultProps = {
  selectedOptionIndex: 0,
};

export default withStyles(muiStyles)(SelectComponent);
