import React from 'react'
import { ContextProvider } from '../Context/ContextProvider'
import Chartjs from '../Components/Chartjs'

const Home = () => {
  return (
    <div>
        <h1>Biểu đồ nến</h1>
        <ContextProvider>
            <Chartjs />
        </ContextProvider>
    </div>
  )
}

export default Home
