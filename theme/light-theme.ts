import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#EDEDED',
    },
    secondary: {
      main: '#171717',
    },
    background: {
      default: '#EDEDED',
    },
  },
  spacing: 16,
  typography: {
    fontFamily: 'Poppins',
    fontSize: 16,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1100,
      xl: 1400,
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          height: 100,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: 78,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: '110%',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          fontWeight: 500,
        },
      },
    },
  },
});

lightTheme.typography.h1 = {
  fontSize: '48px',
  fontWeight: 800,
  [lightTheme.breakpoints.up('md')]: {
    fontSize: '96px',
  },
};

lightTheme.typography.body2 = {
  fontSize: '16px',
  fontWeight: 400,
  [lightTheme.breakpoints.up('md')]: {
    fontSize: '24px',
  },
};
