import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Section from '../../../components/Section';
import ProjectCard from './ProjectCard';
import TabBar from '../../../components/TabBar';
import CircularProgress from '../../../components/CircularProgress';

const Projects = ({ tabBarProps, items }) => {
  return (
    <div className="container">
      <Section id="projects" title="Projects">
        {items && items.length ? (
          <Fragment>
            <div className="tab-bar-container">
              <TabBar {...tabBarProps} />
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
  tabBarProps: PropTypes.shape({}),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
};
Projects.defaultProps = {};

export default Projects;
