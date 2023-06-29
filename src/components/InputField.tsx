import React, { useRef } from 'react'
import "./styles.css";

interface Props {
  todo : string;
  setTodo : React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void;
}

export const InputField= ({todo, setTodo, handleAdd}:Props) => {

const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div>
        <form className='input' onSubmit={(e) => {
          handleAdd(e)
          inputRef.current?.blur();
        }}>
        <input className='inputField' 
        ref={inputRef}
        value={todo}
        onChange={(e) => {setTodo(e.target.value)}}
        type='input' 
        placeholder='Enter a task..'></input>
        <button className='buttonSubmit'>Add</button>
        
        </form>

    </div>
  )
}
