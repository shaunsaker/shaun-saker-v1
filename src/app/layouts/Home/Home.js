import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';

import styles from './styles';

import Layout from '../../components/Layout';
import Jumbotron from './Jumbotron';
import Skills from './Skills';

const Home = ({ skills }) => {
  return (
    <Layout>
      <div className="container">
        <Jumbotron />

        <Card>
          <Skills skills={skills} />
        </Card>
      </div>

      <style jsx>{styles}</style>
    </Layout>
  );
};

Home.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
};
Home.defaultProps = {};

export default Home;
