import React, { useContext } from 'react'
import { ApiContextOne } from '../Context/ContextProvider'

const NewPage = () => {

  const text = useContext(ApiContextOne);
  return (
    <div>
      {text.textOne}

      đây là main tôi nên test tiếp github đến hết sáng nay
      đây là dòng text của nhánh master
      đây là dòng text của testkey
    </div>
  )
}

export default NewPage
