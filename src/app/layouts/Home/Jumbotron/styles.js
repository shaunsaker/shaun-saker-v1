import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../../static/styles/styleConstants';

const avatarSize = 100;

const styles = css`
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 ${rhythm.hz}px;
  }

  .avatar-container {
    margin-bottom: ${rhythm.vt}px;
  }

  .avatar {
    width: ${avatarSize}px;
    height: ${avatarSize}px;
    border-radius: ${avatarSize}px;
    border: 2px solid ${colors.tertiary};
    box-sizing: border-box;
  }

  .title-text-container {
    margin-bottom: ${rhythm.vt}px;
  }

  .description-text-container {
    margin-bottom: ${rhythm.vt}px;
  }

  .contact-buttons-container {
    display: flex;
  }

  .contact-button-container {
    margin: 0 ${rhythm.hz}px;
  }

  .link:focus {
    outline: 2px solid ${colors.accent};
  }
`;

export default styles;
