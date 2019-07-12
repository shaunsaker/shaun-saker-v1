import React from 'react';
import PropTypes from 'prop-types';

import contactLinks from './contactLinks';
import styles from './styles';
import { colors } from '../../../static/styles/styleConstants';

import Typography from '../../../components/Typography';
import IconButton from '../../../components/IconButton';

const Jumbotron = () => {
  return (
    <div className="container">
      <div className="avatar-container">
        <img src="/static/images/avatar.jpg" alt="Shaun Saker" className="avatar" />
      </div>

      <div className="title-text-container">
        <Typography type="title" color={colors.tertiary}>
          Shaun Saker
        </Typography>
      </div>

      <div className="description-text-container">
        <Typography type="paragraph" color={colors.tertiary}>
          Javascript Developer since 2016
        </Typography>
      </div>

      <div className="contact-buttons-container">
        {contactLinks.map((item) => {
          return (
            <div className="contact-button-container">
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <IconButton iconName={item.iconName} tooltip={item.name} color={colors.tertiary} />
              </a>
            </div>
          );
        })}
      </div>

      <style jsx>{styles}</style>
    </div>
  );
};

Jumbotron.propTypes = {};
Jumbotron.defaultProps = {};

export default Jumbotron;
