import React from 'react';
import App from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveAppBar from '../components/Navigation';

const theme = createTheme({
  palette: {
    mode: 'dark', 
  },
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <ResponsiveAppBar />
        
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;