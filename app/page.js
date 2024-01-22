"use client"
import React, { useState } from 'react'

const page = () => {
  
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()
    setmainTask([...mainTask, {title,desc}])
    setDesc("")
    setTitle("")
  }

  const completeHandler =(i) =>{
    const copytask = [...mainTask]
    copytask.splice(i,1);
    setmainTask(copytask)
  }

  let renderTask = <h2 className='text-center text-2xl text-black'>No Task Avalilable at moment....</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((task,i)=>{
      return(
        <li key={i}> <div className=' p-8 text-center gap-2'>
        <h4 > <span className='font-extrabold'>Task :</span> {task.title}</h4>
        <p> <span className='font-extrabold'>Description :</span> {task.desc}</p>
        <button onClick={ () => {completeHandler(i)}} className='px-4 py-2 m-5 bg-transparent border-red-600 border-2 text-red-600 text-2xl'> click to Completed</button>
        <hr className='border-b-gray-800 border-2' />
      </div>
      </li>
    )})
  }
  return (
    <>
      <h1 className='text-4xl bg-black text-white p-8'>TODO</h1>

      <form className='' onSubmit={submitHandler}>
        <input value={title} onChange={(e) =>{
          setTitle(e.target.value)
        }} type='text' className='text-2xl border-gray-800 border-2 m-5 px-4 py-2' placeholder='Enter task here...' />
        <input onChange={(e)=>{
          setDesc(e.target.value)
        }} value={desc} type='text' className='text-2xl border-gray-800 border-2 m-5 px-4 py-2' placeholder='Enter desc here...' />
        <button className='px-4 py-2 text-white bg-black text-2xl m-5'>Add Task</button>

      </form>

      <hr />

      <div className='p-8 bg-slate-100'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page