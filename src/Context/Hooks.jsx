import React, { useContext } from 'react'
import { ApiContextTwo } from './ContextProvider'

const Hooks = () => {
    const [states, dispatch] = useContext(ApiContextTwo);

    return  [states, dispatch];
}

export default Hooks
