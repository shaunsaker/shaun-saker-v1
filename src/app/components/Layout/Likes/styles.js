import css from 'styled-jsx/css'; // eslint-disable-line

const styles = css`
  .wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 80px; /* header height */
  }

  .cell {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image {
    width: 100%;
    height: 100%;
    animation-name: animate;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes animate {
    from {
      opacity: 0;
      transform: translateX(-10px) translateY(-10px);
    }
    to {
      opacity: 0.67;
      transform: translateX(10px) translateY(10px);
    }
  }
`;

export default styles;
