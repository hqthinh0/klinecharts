import React, { useEffect, useRef, useState } from 'react'
import Store from '../store/redux/Store'
import { AddTodo, DeleteTodo } from '../store/redux/Action';
const NewPage = () => {

 
  const [add, setAdd] = useState('');
  const [listTodo, setList ]= useState([]);

  const inputRef = useRef('');

  const handleOnChanged = (e) =>{
    let name = e.target.value;
    setAdd(name);
  }

  const handleOnClickAdd = () =>{
    Store.dispatch(AddTodo(add));
    console.log("store", Store.getState());
    setAdd('');
    inputRef.current.focus();
  }
  useEffect(() =>{
    let todo = Store.subscribe(()=>{
      setList(Store.getState());
    })
    return () => todo();
  },[])
  
  const handleClear = (id) =>{
    Store.dispatch(DeleteTodo(id));
  }
  const handleKeyDown = (e) =>{
    if(e.key === "Enter"){
      handleOnClickAdd();
    }
  }

  return (
    <>
     <div >
      <input type="text" onKeyDown={handleKeyDown}   className='border' value={add} ref={inputRef}  onChange={(e) => handleOnChanged(e) } />
      <button  onClick={() => handleOnClickAdd()}>add</button>
    </div>
    <div>
     {listTodo.map((item , index) => (
          <p key={index}>
            {item} <button onClick={() => handleClear(index)}>x</button>
          </p>
        ))}
    </div>
    </>
   
  
  )
}

export default NewPage
