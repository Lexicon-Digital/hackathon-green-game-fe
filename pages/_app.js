import '../styles/globals.css'

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#94e0a6',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: '#fafafa',
      },
    },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
  <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
