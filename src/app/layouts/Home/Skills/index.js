import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Section from '../../../components/Section';
import Label from '../../../components/Label';

const Skills = ({ items }) => {
  return (
    <div className="container">
      <Section title="Skills">
        <div className="items-container">
          {items &&
            items.map((item) => {
              return (
                <div key={item.name} className="item-container">
                  <Label>{item.name}</Label>
                </div>
              );
            })}
        </div>
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
