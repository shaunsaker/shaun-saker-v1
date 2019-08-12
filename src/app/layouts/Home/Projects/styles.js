import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm } from '../../../static/styles/styleConstants';

const styles = css`
  .container {
  }

  .select-container {
    display: flex;
    justify-content: flex-end;
    margin-bottom: ${rhythm.hz}px;
  }

  .items-container {
    display: flex;
  }

  .item-container {
    width: 100%;
    margin: 0 ${rhythm.hz / 2}px ${rhythm.vt}px 0;
  }

  .loading-container {
    display: flex;
    justify-content: center;
  }
`;

export default styles;
