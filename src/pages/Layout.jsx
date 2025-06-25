import React from 'react'
import { ContextProviderThree } from '../Context/ContextProvider'
import Three from '../Components/Three'

const Layout = () => {
  return (
    <div>
       <ContextProviderThree>
         <Three />
       </ContextProviderThree>
    </div>
  )
}

export default Layout
