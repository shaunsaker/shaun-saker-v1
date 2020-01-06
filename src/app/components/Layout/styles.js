import css from 'styled-jsx/css';

import { colors, sizes } from '../../static/styles/styleConstants';

const headerHeight = 64;

const styles = css`
  .container {
    position: relative;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(
      ${colors.primary} ${headerHeight}px,
      ${colors.secondary}
    ); /* first stop at Header height */
  }

  .content-container {
    max-width: ${sizes.maxContentWidth}px;
    width: 100%;
    margin: 0 auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: stretch;
    z-index: 0;
  }

  .dev-info-container {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
`;

export default styles;
