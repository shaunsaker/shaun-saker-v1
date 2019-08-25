import css from 'styled-jsx/css'; // eslint-disable-line

import { animation, colors, rhythm, sizes } from '../../../../static/styles/styleConstants';

const summaryAvatarSize = 75;

const styles = css`
  .summary-container {
    width: 100%;
    display: flex;
  }

  .summary-avatar-container {
    flex: 1;
    margin-right: ${rhythm.hz / 2}px;
  }

  .summary-avatar {
    width: 100%;
    max-width: ${summaryAvatarSize}px;
    border-radius: ${summaryAvatarSize / 2}px;
    object-fit: cover;
    border: 2px solid ${colors.lightGrey};
    box-sizing: border-box;
  }

  .summary-text-container {
    flex: 8;
  }

  .summary-row-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: -6px; /* counter act line height of name text */
    margin-right: ${48 + rhythm.hz / 2}px; /* don't allow it to overlap the toggle button */
    margin-bottom: ${rhythm.vt}px;
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

  @media (min-width: ${sizes.maxContentWidth}px) {
    .summary-avatar-container {
      margin-right: ${rhythm.hz}px;
    }

    .summary-avatar {
      border: 3px solid ${colors.lightGrey};
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
  }
`;

const muiStyles = {
  container: {
    width: '100%',
    marginTop: 0,
    boxShadow: 'none',
    border: `1px solid ${colors.lightGrey}`,
  },
  innerContainer: {
    padding: `${rhythm.vt / 2}px ${rhythm.hz}px`,
  },
  detailsContainer: {
    flexDirection: 'column',
  },
};

export { muiStyles };

export default styles;
