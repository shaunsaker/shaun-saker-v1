import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';

import styles from './styles';

import Layout from '../../components/Layout';
import Jumbotron from './Jumbotron';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Home = ({ skillsProps, projectsProps, contactProps }) => {
  return (
    <Layout>
      <div className="container">
        <Jumbotron />

        <Card>
          <div className="content-container">
            <Skills {...skillsProps} />

            <Projects {...projectsProps} />

            <Contact {...contactProps} />
          </div>
        </Card>
      </div>

      <style jsx>{styles}</style>
    </Layout>
  );
};

Home.propTypes = {
  skillsProps: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  projectsProps: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  contactProps: PropTypes.shape({}),
};
Home.defaultProps = {};

export default Home;
