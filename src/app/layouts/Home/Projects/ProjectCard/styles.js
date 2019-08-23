import css from 'styled-jsx/css'; // eslint-disable-line

import { animation, colors, rhythm } from '../../../../static/styles/styleConstants';

const summaryAvatarSize = 100;
const screenshotSize = 200;

const styles = css`
  .summary-container {
    display: flex;
  }

  .summary-avatar-container {
    margin-right: ${rhythm.hz}px;
  }

  .summary-avatar {
    width: ${summaryAvatarSize}px;
    height: ${summaryAvatarSize}px;
    object-fit: cover;
  }

  .summary-text-container {
  }

  .summary-row-container {
    display: flex;
    align-items: center;
    margin-top: -6px; /* counter act line height of name text */
    margin-right: ${48 + rhythm.hz / 2}px; /* don't allow it to overlap the toggle button */
  }

  .summary-name-container {
    margin-right: ${rhythm.hz / 2}px;
  }

  .summary-description-container {
    margin-bottom: ${rhythm.vt}px;
  }

  .summary-skills-container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: ${rhythm.vt / -2}px; /* counter act margin on individual items */
  }

  .summary-skill-item-container {
    margin: 0 ${rhythm.hz / 2}px ${rhythm.vt / 2}px 0;
  }

  .toggle-button-container {
    position: absolute;
    top: 0;
    right: 0;
    transition: transform ${animation.transition};
  }

  .details-container {
  }

  .details-section-container {
    margin-bottom: ${rhythm.vt}px;
  }

  .details-heading-container {
    margin-bottom: ${rhythm.vt / 2}px;
  }

  .links-container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: ${rhythm.vt / -2}px; /* counter act margin on individual items */
  }

  .link-container {
    margin: 0 ${rhythm.hz / 2}px ${rhythm.vt / 2}px 0;
  }

  .link {
    text-decoration: none;
  }

  .screenshots-container {
    display: flex;
    overflow-y: scroll;
  }

  .screenshot-container {
    margin-right: ${rhythm.hz / 2}px;
  }

  .screenshot {
    width: ${screenshotSize}px;
    height: ${screenshotSize}px;
    object-fit: cover;
  }
`;

const muiStyles = {
  container: {
    width: '100%',
    marginTop: 0,
    boxShadow: 'none',
    border: `1px solid ${colors.grey}`,
  },
  detailsContainer: {
    flexDirection: 'column',
  },
};

export { muiStyles };

export default styles;
