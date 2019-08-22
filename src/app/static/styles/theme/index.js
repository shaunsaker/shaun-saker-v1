import { createMuiTheme } from '@material-ui/core/styles';

import { colors } from '../styleConstants';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: colors.primaryText,
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        backgroundColor: colors.grey,
      },
    },
    MuiLinearProgress: {
      barColorPrimary: {
        backgroundColor: colors.accent,
      },
    },
    MuiTab: {
      textColorPrimary: {
        color: colors.secondaryText,
      },
    },
  },
});

export default theme;
