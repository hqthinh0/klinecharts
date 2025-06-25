import React, { useContext } from 'react'
import { ApiContextOne } from '../Context/ContextProvider'

const NewPage = () => {

  const text = useContext(ApiContextOne);
  return (
    <div>
      {text.textOne}
      đây là dòng test tôi muốn làm bên nhánh master
      test checkkey
    </div>
  )
}

export default NewPage
