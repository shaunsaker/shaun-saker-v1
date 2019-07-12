import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm, sizes } from '../../../static/styles/styleConstants';

const styles = css`
  .container {
    padding: ${rhythm.vt * 2}px ${rhythm.hz}px ${rhythm.vt}px;
  }

  .title-text-container {
    margin-bottom: ${rhythm.vt * 2}px;
  }

  .skill-items-container {
    display: flex;
  }

  .skill-item-container {
    margin: 0 ${rhythm.hz / 2}px ${rhythm.vt}px 0;
  }

  @media (min-width: ${sizes.maxContentWidth}px) {
    .container {
      padding: ${rhythm.vt * 4}px ${rhythm.hz * 2}px;
    }
  }
`;

export default styles;
