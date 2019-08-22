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
      main: colors.accent,
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
      textColorSecondary: {
        color: colors.primaryText,
      },
    },
  },
});

export default theme;
