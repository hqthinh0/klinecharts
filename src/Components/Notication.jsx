import React from 'react'
import Hooks from '../Context/hooks'
import Actions from '../Context/Actions';
// import { ApiContextTwo } from '../Context/ContextProvider'


const Notication = () => {

  const [stateNocation, dispatch] = Hooks();
  // const Notication = useContext(ApiContextTwo);
  return (
    <div>
        <h1>pages contact</h1>
        <input type="text" value={stateNocation.todoInput} placeholder='enter' onChange={e => {dispatch(Actions.setToDoInput(e.target.value))}} />
    </div>
  )
}

export default Notication
