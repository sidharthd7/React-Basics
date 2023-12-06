"use client";
import React, { useState } from 'react'

const page = () => {
  const [marks, setmarks] = useState(80)       // right way to create variables ---marks- normal var. whereas setmarks- to update the value
  // let marks = 80;                  // variables are not made in this way
  // const changemarks = ()=>{
  //   console.log(marks)
  //   marks = 33
  //   console.log(marks)
  // };
  return (
    <>
    <h1 className='font-bold text-xl text-blue-500'>My marks are {marks}</h1>
    <button onClick={()=>{
      setmarks(36)
    }} className='bg-gray-900 px-8 py-22 rounded text-white font-bold'>Change Marks</button>
    </>
  )
}

export default page