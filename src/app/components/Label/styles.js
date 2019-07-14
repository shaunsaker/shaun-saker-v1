import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    padding: ${rhythm.vt / 2}px ${rhythm.hz}px;
    background-color: ${colors.secondaryText};
  }

  .small {
    padding: ${rhythm.vt / 4}px ${rhythm.hz / 2}px;
  }
`;

export default styles;
