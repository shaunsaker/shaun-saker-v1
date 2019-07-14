import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm } from '../../../static/styles/styleConstants';

const styles = css`
  .container {
  }

  .items-container {
    display: flex;
    flex-wrap: wrap;
  }

  .item-container {
    margin: 0 ${rhythm.hz / 2}px ${rhythm.vt}px 0;
  }
`;

export default styles;
