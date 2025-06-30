import React, { useEffect, useRef, useState } from 'react'
import Store from '../store/redux/Store'
import { AddTodo, DeleteTodo, EditToDo } from '../store/redux/Action';
const NewPage = () => {

 
  const [add, setAdd] = useState('');
  const [listTodo, setList ]= useState([]);
  const [valueEdit, setValueEdit] = useState(null);

  const inputRef = useRef('');

  const handleOnChanged = (e) =>{
    let name = e.target.value;
    setAdd(name);
  }

  const handleOnClickAdd = () =>{
 
      
    if(valueEdit !== null){
        Store.dispatch(EditToDo({index: valueEdit, newText: add }));
        console.log("ss");
        
        setValueEdit(null);
    }else{
       Store.dispatch(AddTodo(add));
    }
    
   
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
  
  const handleEdit = (id) =>{
     setValueEdit(id);
       setAdd(listTodo[id]);
     

     
     
    // Store.dispatch(listTodo(id));
  }

  console.log("valueEdit",valueEdit);
  

  return (
    <>
     <div >
      <input type="text" 
      onKeyDown={handleKeyDown}   
      className='border' value={add} 
      ref={inputRef}  
      onChange={(e) => handleOnChanged(e) } />


      <button  onClick={() => handleOnClickAdd()}>{valueEdit === null ? "add" : "edit" }</button>
    </div>
    <div> 
     {listTodo.map((item , index) => (
          <p key={index}>
            {item} <button disabled={valueEdit !== null} onClick={() => handleClear(index)}>delete</button> 
                   <button onClick={() => handleEdit(index)}>edit</button>
          </p>
        ))}
    </div>
    </>
   
  
  )
}

export default NewPage
