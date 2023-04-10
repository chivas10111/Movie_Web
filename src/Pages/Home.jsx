import React from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content'
import JoinToday from '../components/JoinToday'
import DefaultLayout from '../DefaultLayout'

const Home = () => {
  return (
    <>
        <DefaultLayout>
          <Hero/>
          <Content/>
          <JoinToday/>
        </DefaultLayout>
    </>
  )
}


export default Home