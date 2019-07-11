import css from 'styled-jsx/css';

import { colors, rhythm, sizes } from '../../static/styles/styleConstants';

const headerHeight = 64;

const styles = css`
  .container {
    position: relative;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    padding: ${headerHeight}px 0; /* Header height */
    background-image: linear-gradient(
      ${colors.primary} ${headerHeight}px,
      ${colors.secondary}
    ); /* first stop at Header height */
  }

  .content-wrapper {
    max-width: ${sizes.maxContentWidth}px;
    width: 100%;
    margin: 0 auto;
  }

  .content-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${rhythm.vt * 2}px ${rhythm.hz}px;
    background-color: white;
    align-items: stretch;
  }

  .dev-info-container {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
  }

  @media (min-width: ${sizes.maxContentWidth}px) {
    .content-container {
      padding: ${rhythm.vt * 4}px ${rhythm.hz * 2}px;
    }
  }
`;

export default styles;
