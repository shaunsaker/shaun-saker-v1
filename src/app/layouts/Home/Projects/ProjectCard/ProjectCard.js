import React from 'react';
import PropTypes from 'prop-types';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';

import styles, { muiStyles } from './styles';

import Typography from '../../../../components/Typography';
import IconButton from '../../../../components/IconButton';
import Label from '../../../../components/Label';
import PrimaryButton from '../../../../components/PrimaryButton';

const ProjectCard = ({
  name,
  thumbnailUrl,
  releaseDate,
  shortDescription,
  longDescription,
  skills,
  links,
  isCollapsed,
  handleToggleCollapse,
}) => {
  const toggleButtonStyles = { transform: `rotate(${isCollapsed ? 0 : 180}deg)` };
  const toggleButtonTooltipText = isCollapsed ? 'Expand' : 'Collapse';

  return (
    <ExpansionPanel expanded={!isCollapsed} style={muiStyles.container}>
      <ExpansionPanelSummary style={muiStyles.innerContainer}>
        <div className="summary-container">
          <div className="summary-avatar-container">
            <img src={thumbnailUrl} alt={name} className="summary-avatar" />
          </div>

          <div className="summary-text-container">
            <div className="summary-row-container">
              <div className="summary-name-container">
                <Typography type="heading" bold>
                  {name}
                </Typography>
              </div>

              <Typography type="small" secondary>{`(${releaseDate})`}</Typography>
            </div>

            <div className="summary-description-container">
              <Typography type="paragraph">{shortDescription}</Typography>
            </div>

            <div className="summary-skills-container">
              {skills &&
                skills.map((item) => {
                  return (
                    <div key={item.name} className="summary-skill-item-container">
                      <Label small>{item.name}</Label>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="toggle-button-container" style={toggleButtonStyles}>
            <IconButton iconName="expand-more" tooltip={toggleButtonTooltipText} handleClick={handleToggleCollapse} />
          </div>
        </div>
      </ExpansionPanelSummary>

      <ExpansionPanelDetails style={muiStyles.detailsContainer}>
        <div className="details-container">
          <div className="details-section-container">
            <div className="details-heading-container">
              <Typography type="paragraph" bold>
                Description
              </Typography>
            </div>

            <Typography type="paragraph">{longDescription}</Typography>
          </div>

          <div>
            <div className="details-heading-container">
              <Typography type="paragraph" bold>
                Links
              </Typography>
            </div>

            <div className="links-container">
              {links ? (
                links.map((item) => {
                  return (
                    <div key={item.name} className="link-container">
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="link">
                        <PrimaryButton>{item.name}</PrimaryButton>
                      </a>
                    </div>
                  );
                })
              ) : (
                <Typography type="paragraph">No links to display</Typography>
              )}
            </div>
          </div>
        </div>
      </ExpansionPanelDetails>

      <style jsx>{styles}</style>
    </ExpansionPanel>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  releaseDate: PropTypes.string,
  shortDescription: PropTypes.string,
  longDescription: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  links: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, href: PropTypes.string })),
  isCollapsed: PropTypes.bool,
  handleToggleCollapse: PropTypes.func,
};
ProjectCard.defaultProps = {};

export default ProjectCard;
