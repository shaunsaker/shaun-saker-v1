import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Tabs, Tab } from '@material-ui/core';

const TabBar = ({ currentTabIndex, tabs, handleClick }) => {
  return (
    <AppBar position="static" color="inherit" style={{ boxShadow: 'none' }}>
      <Tabs
        value={currentTabIndex}
        indicatorColor="secondary"
        textColor="secondary"
        onChange={(event, index) => handleClick(index)}
        variant="scrollable"
      >
        {tabs &&
          tabs.map((tab) => {
            const { name } = tab;

            return <Tab key={name} label={name} color="primary" />;
          })}
      </Tabs>
    </AppBar>
  );
};

TabBar.propTypes = {
  currentTabIndex: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
  handleClick: PropTypes.func,
};
TabBar.defaultProps = {};

export default TabBar;
