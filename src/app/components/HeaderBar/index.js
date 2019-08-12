import React from 'react';
import { AppBar, Toolbar as ToolBar } from '@material-ui/core';
import Link from 'next/link';

import links from './links';
import muiStyles from './muiStyles';
import styles from './styles';
import { colors } from '../../static/styles/styleConstants';

import Logo from './Logo';
import Typography from '../Typography';

const HeaderBar = () => {
  return (
    <AppBar position="fixed" style={muiStyles.wrapper}>
      <ToolBar style={muiStyles.container}>
        <div className="logo-container">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className="links-container">
          {links.map((item) => {
            return (
              <div key={item.name} className="link-container">
                <a
                  href={item.href}
                  className="link"
                  target={item.target}
                  rel={item.target ? 'noopener noreferrer' : ''}
                >
                  <Typography type="paragraph" color={colors.tertiary}>
                    {item.name}
                  </Typography>
                </a>
              </div>
            );
          })}
        </div>
      </ToolBar>

      <style jsx>{styles}</style>
    </AppBar>
  );
};

HeaderBar.propTypes = {};
HeaderBar.defaultProps = {};

export default HeaderBar;
