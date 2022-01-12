import Head from 'next/head'
import React from 'react'


import Navbar from '../components/Navbar'
import Profile from '../components/Profile'

import { Container } from '../styles/pages/home'

const Home: React.FC = () => {
  return (
    <>
      <Navbar/>

      <Container>
        <Head>
          <title>HomePage</title>
        </Head>

        <Profile/>


      </Container>
    </>
  )
}

export default Home
