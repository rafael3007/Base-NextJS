import Head from 'next/head'
import React from 'react'

import rafaelLogo from '../assets/Logo_Rafael.png'

import { Container } from '../styles/pages/home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>HomePage</title>
      </Head>



      <img src={rafaelLogo} alt="logo" />

      <h1>ReactJS Structure</h1>
      <p>A ReactJs + NextJS structure made by Rafael Brito</p>

    </Container>
  )
}

export default Home
