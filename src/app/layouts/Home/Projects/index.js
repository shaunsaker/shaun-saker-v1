import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Section from '../../../components/Section';
import ProjectCard from './ProjectCard';
import Typography from '../../../components/Typography';
import TabBar from '../../../components/TabBar';
import CircularProgress from '../../../components/CircularProgress';

const Projects = ({ tabBarProps, items }) => {
  return (
    <div className="container">
      <Section id="projects" title="Projects">
        {items && items.length ? (
          <Fragment>
            <div className="description-text-container">
              <Typography type="paragraph">
                Here is a list of my personal projects. It excludes the <b>5 mobile apps</b> and the <b>5 web apps</b>{' '}
                that I&apos;ve built and maintained in production with my current employer, AUX Studio.
              </Typography>
            </div>

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
