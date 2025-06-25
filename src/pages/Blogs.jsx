import React from 'react'
import { ContextProviderOne } from '../Context/ContextProvider'
import NewPage from '../Components/NewPage'

const Blogs = () => {
  return (

    <ContextProviderOne>
        <NewPage />
    </ContextProviderOne>
   
  )
}

export default Blogs
