import React, { useContext } from 'react'
import { ApiContextOne } from '../Context/ContextProvider'

const NewPage = () => {

  const text = useContext(ApiContextOne);
  return (
    <div>
      {text.textOne}
      test checkkey
    </div>
  )
}

export default NewPage
