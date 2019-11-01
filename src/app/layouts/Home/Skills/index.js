import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Section from '../../../components/Section';
import Typography from '../../../components/Typography';
import Label from '../../../components/Label';
import CircularProgress from '../../../components/CircularProgress';

const Skills = ({ items }) => {
  return (
    <div className="container">
      <Section id="skills" title="Skills">
        {items && items.length ? (
          <Fragment>
            <div className="description-text-container">
              <Typography type="paragraph">
                Here is a list of my core skills. It excludes the tools/frameworks that I use (ie. <b>Storybook</b>,{' '}
                <b>Next.js</b>, <b>Jest</b>, <b>ESLint</b>, <b>Prettier</b> etc).
              </Typography>
            </div>

            <div className="items-container">
              {items.map((item) => {
                return (
                  <div key={item.name} className="item-container">
                    <Label>{item.name}</Label>
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

Skills.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
};
Skills.defaultProps = {};

export default Skills;
