import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import HeaderBar from '../HeaderBar';
import DevInfo from '../DevInfo';
import Likes from './Likes';

const Layout = ({ headerBarProps, children }) => {
  return (
    <div className="container">
      <Likes />

      <HeaderBar {...headerBarProps} />

      <div className="content-container">{children}</div>

      <div className="dev-info-container">
        <DevInfo />
      </div>

      <style jsx>{styles}</style>
    </div>
  );
};

Layout.propTypes = {
  headerBarProps: PropTypes.shape({}),
  children: PropTypes.node,
};
Layout.defaultProps = {};

export default Layout;
