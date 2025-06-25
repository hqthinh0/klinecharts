import React from 'react'
import { ContextProviderTwo } from '../Context/ContextProvider'
import Notication from '../Components/Notication'

const Contact = () => {
  return (
    <ContextProviderTwo>
        <Notication />
    </ContextProviderTwo>

  )
}

export default Contact
