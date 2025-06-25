import React, { useContext } from 'react'
import { ApiContextOne } from '../Context/ContextProvider'

const NewPage = () => {

  const text = useContext(ApiContextOne);
  return (
    <div>
      {text.textOne}
    đã xoá dòng cũ tôi đã thêm dòng từ brand main
    </div>
  )
}

export default NewPage
