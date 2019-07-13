import React from 'react';

import styles from './styles';

import Typography from '../../../../components/Typography';

const Success = () => {
  return (
    <div className="container">
      <div className="title-text-container">
        <Typography type="heading">Great Success!</Typography>
      </div>

      <div className="description-text-container">
        <Typography type="paragraph">Your message has been sent successfully.</Typography>
      </div>

      <style jsx>{styles}</style>
    </div>
  );
};

Success.propTypes = {};
Success.defaultProps = {};

export default Success;
