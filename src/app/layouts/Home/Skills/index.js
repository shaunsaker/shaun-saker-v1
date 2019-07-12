import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Typography from '../../../components/Typography';
import Label from '../../../components/Label';

const Skills = ({ skills }) => {
  return (
    <div className="container">
      <div className="title-text-container">
        <Typography type="title">Skills</Typography>
      </div>

      <div className="skill-items-container">
        {skills &&
          skills.map((item) => {
            return (
              <div key={item.name} className="skill-item-container">
                <Label>{item.name}</Label>
              </div>
            );
          })}
      </div>

      <style jsx>{styles}</style>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
};
Skills.defaultProps = {};

export default Skills;
