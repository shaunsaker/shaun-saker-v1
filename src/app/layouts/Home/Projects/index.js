import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Section from '../../../components/Section';
import ProjectCard from './ProjectCard';
import Select from '../../../components/Select';
import CircularProgress from '../../../components/CircularProgress';

const Projects = ({ selectProps, items }) => {
  console.log({ items });
  return (
    <div className="container">
      <Section id="projects" title="Projects">
        {items ? (
          <Fragment>
            <div className="select-container">
              <Select {...selectProps} />
            </div>

            <div className="items-container">
              {items.map((item) => {
                return (
                  <div key={item.name} className="item-container">
                    <ProjectCard {...item} />
                  </div>
                );
              })}
            </div>
          </Fragment>
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
