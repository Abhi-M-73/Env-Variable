import React from 'react'

const App = () => {

  const handleClick = (msg)=>{
    console.log(msg);
  }

  // const wrapper = () => handleClick("Clicked");

  return (
    <div className='w-[80%] mx-auto p-10 mt-10 bg-gray-200'>
      <button className='px-6 py-2 bg-indigo-900 text-white rounded' onClick={() => handleClick("Clicked")}>Click Me</button>
    </div>
  )
}

export default App
