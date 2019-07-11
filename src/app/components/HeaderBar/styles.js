import css from 'styled-jsx/css';

import { rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .logo-container {
    cursor: pointer;
  }

  .logo-image {
    width: 64px;
    cursor: pointer;
  }

  .links-container {
    display: flex;
  }

  .link-container {
    margin-left: ${rhythm.hz}px;
  }

  .link {
    text-decoration: none;
    cursor: pointer;
  }
`;

export default styles;
