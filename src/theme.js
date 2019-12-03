import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  },
  typography: {
    fontFamily: 'Verdana, Arial, Roboto, sans-serif',
    fontSize: 14,
    h1: {
      fontSize: '2.5rem'
    },
    h2: {
      fontSize: '2.2rem'
    },
    h3: {
      fontSize: '1.8rem'
    },
    h4: {
      fontSize: '1.4rem'
    }
  },
});

export default theme;