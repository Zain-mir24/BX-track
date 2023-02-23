import React,{useEffect, useRef, useState} from "react";
import "./TodoComp.css"
import avatar from "../../assets/avatar.jpg"
import url from "../../Config/axios"
export default function TodoComp(){
    const [todos,setTodo]=useState([])
    const [errorMessage,setErrorMessage]=useState("")
    const inputRef=useRef(null)
    useEffect(()=>{
      getList()
    },[])
    function addTodo(){
      if(inputRef.current.value!==""){
            const newTodo =inputRef.current.value;
            setTodo([...todos,{
              name:newTodo,
              completed:false,
              completedTime:"1hour"
            }])
            inputRef.current.value=''
      }}
        const handleCheckboxChange = (value,index) => {
          // Update the completed attribute of the todo item at the specified index
          const updatedTodos = [...todos];
          updatedTodos[index].completed = value;
          setTodo(updatedTodos);
        };
       function RemoveTodo(index) {
        const newTodos = todos.filter((todo, i) => i !== index);
        setTodo(newTodos);
      } 
          function PressEnter(event) {
        if (event.key === 'Enter') {
          event.preventDefault();
          addTodo();
        }
      }
    async function SaveList (){
        try{
      const addingTask=await  url.post("/Tasks/add",todos)
      setErrorMessage()

      getList()
      if(!addingTask){
        setErrorMessage("Something went wrong while adding list")
      }
            }catch(e){
        setErrorMessage("Something went wrong while adding list")
        }
      }
      async function getList(){
        try{
          const addingTask=await  url.get("/Tasks/Retrieve")
         setTodo(addingTask.data)
          setErrorMessage("")
          if(!addingTask){
            setErrorMessage("Something went wrong while getting list")
          }
        }catch(e){
          setErrorMessage("Something went wrong while getting list")

        }
      }
   return(
    <div className="outterBox">
        <div className="circleDiv">
          <img 
          className="imageStyle"
          src={avatar}/>
          </div>
        <div>          
            <input className="styledInput"type="text" placeholder="Enter new todo" ref={inputRef} onKeyPress={PressEnter} />
            <button className="styleButton" type="button" onClick={addTodo}>Add</button>
            <ul className="
            ulStyle">
              {todos.map((todo, index) => {
                       return(
                  <li
                    key={index}>
                    <div className="listStyle">
                      <input
                      checked={todo.completed}
                      onChange={(e)=> handleCheckboxChange(e.target.checked,index) }
                      type={"checkbox"}/>
                      <p >
                      {todo.name}
                      </p>
                      <button
                      className="deleteButton"
                      onClick={() => RemoveTodo(index)}>...</button>
                    </div>
                   </li>
              )
              })}
             </ul>
             {errorMessage && 
             <p className="errorMessage">
              {errorMessage}</p>}
          {todos.length!==0 &&  
                    <button
          className="saveButton"
          onClick={()=>SaveList()}>
              Save
             </button>}
        </div>
        </div>
    )
}