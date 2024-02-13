'use client';

import Header from './Header'
import Form from './Form'
import Footer from './Footer'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../i18n';

export default function Home() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#4caf50",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <main className="flex min-h-screen flex-col justify-between">
        <Header/>
        <Form/>
        <Footer/>
      </main>
    </ThemeProvider>
  )
}
