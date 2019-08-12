import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Section from '../../../components/Section';
import ProjectCard from './ProjectCard';
import Select from '../../../components/Select';

const Projects = ({ selectProps, items }) => {
  return (
    <div className="container">
      <Section title="Projects">
        <div className="select-container">
          <Select {...selectProps} />
        </div>

        <div className="items-container">
          {items &&
            items.map((item) => {
              return (
                <div key={item.name} className="item-container">
                  <ProjectCard {...item} />
                </div>
              );
            })}
        </div>
      </Section>

      <style jsx>{styles}</style>
    </div>
  );
};

Projects.propTypes = {
  selectProps: PropTypes.shape({}),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
};
Projects.defaultProps = {};

export default Projects;
