import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../../static/styles/styleConstants';

const size = 48;

const styles = css`
  .container {
    width: ${size}px;
    height: ${size}px;
    border-radius: ${size / 2}px;
    background-color: ${colors.tertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid ${colors.lightGrey};
    box-sizing: border-box;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;

export default styles;
