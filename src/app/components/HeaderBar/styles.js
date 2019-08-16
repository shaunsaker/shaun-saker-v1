import css from 'styled-jsx/css';

import { colors, rhythm, sizes } from '../../static/styles/styleConstants';

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
  }

  .link {
    background: none;
    border: none;
    text-decoration: none;
    cursor: pointer;
    padding: ${rhythm.vt}px ${rhythm.hz / 4}px;
  }
  .link:focus {
    outline: 2px solid ${colors.accent};
  }

  @media (min-width: ${sizes.maxContentWidth}px) {
    .link {
      padding: ${rhythm.vt}px ${rhythm.hz / 2}px;
    }
  }
`;

export default styles;
