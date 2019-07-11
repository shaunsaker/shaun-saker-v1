import React from 'react';

import styles from './styles';

import Typography from '../../Typography';

const Logo = () => {
  return (
    <div className="container">
      <Typography type="heading" bold>
        SS
      </Typography>

      <style jsx>{styles}</style>
    </div>
  );
};

Logo.propTypes = {};
Logo.defaultProps = {};

export default Logo;
