import React from 'react'

import GlobalStyle from "../styles/global"
import { ThemeProvider } from "styled-components"

import { AppProps} from 'next/app'
import theme from '../styles/theme'
import { Container } from '../styles/pages/home'

const  MyApp: React.FC<AppProps> =({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default MyApp
