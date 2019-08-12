import React from 'react';
import { AppBar, Toolbar as ToolBar } from '@material-ui/core';
import PropTypes from 'prop-types';

import links from './links';
import muiStyles from './muiStyles';
import styles from './styles';
import { colors } from '../../static/styles/styleConstants';

import Logo from './Logo';
import Typography from '../Typography';

const HeaderBar = ({ handleLinkClick }) => {
  return (
    <AppBar position="fixed" style={muiStyles.wrapper}>
      <ToolBar style={muiStyles.container}>
        <div className="logo-container">
          <button type="button" className="link" onClick={() => handleLinkClick({ id: 'home' })}>
            <Logo />
          </button>
        </div>

        <div className="links-container">
          {links.map((item) => {
            return (
              <div key={item.name} className="link-container">
                <button type="button" className="link" onClick={() => handleLinkClick(item)}>
                  <Typography type="paragraph" color={colors.tertiary}>
                    {item.name}
                  </Typography>
                </button>
              </div>
            );
          })}
        </div>
      </ToolBar>

      <style jsx>{styles}</style>
    </AppBar>
  );
};

HeaderBar.propTypes = {
  handleLinkClick: PropTypes.func,
};
HeaderBar.defaultProps = {};

export default HeaderBar;
