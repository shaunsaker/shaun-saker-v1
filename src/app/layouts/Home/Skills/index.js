import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Section from '../../../components/Section';
import Label from '../../../components/Label';
import CircularProgress from '../../../components/CircularProgress';

const Skills = ({ items }) => {
  return (
    <div className="container">
      <Section id="skills" title="Skills">
        {items ? (
          <div className="items-container">
            {items.map((item) => {
              return (
                <div key={item.name} className="item-container">
                  <Label>{item.name}</Label>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loading-container">
            <CircularProgress />
          </div>
        )}
      </Section>

      <style jsx>{styles}</style>
    </div>
  );
};

Skills.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
};
Skills.defaultProps = {};

export default Skills;
