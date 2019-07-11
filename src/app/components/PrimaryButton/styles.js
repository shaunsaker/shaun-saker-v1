import { colors, rhythm } from '../../static/styles/styleConstants';

const styles = {
  container: {
    textTransform: 'initial',
    fontWeight: '700',
    height: 42,
    backgroundColor: colors.accent,
    color: 'white',
  },
  secondaryContainer: {
    backgroundColor: colors.primary,
  },
  ghostContainer: {
    backgroundColor: 'white',
    borderColor: colors.accent,
    color: colors.accent,
  },
  textContainer: {
    backgroundColor: 'white',
    color: colors.accent,
  },
  disabledContainer: {
    backgroundColor: colors.grey,
  },

  spacer: {
    width: rhythm.hz / 2,
  },
};

export default styles;
