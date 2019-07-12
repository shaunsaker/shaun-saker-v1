import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Layout from '../../components/Layout';
import Jumbotron from './Jumbotron';

const Home = () => {
  return (
    <Layout>
      <div className="container">
        <Jumbotron />
      </div>

      <style jsx>{styles}</style>
    </Layout>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
