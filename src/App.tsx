//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'


function App() {
  {/*const [count, setCount] = useState(0)*/}

const signList = ["%", "CE", "C", "X", 
                        "1/x", "x2", "2√x", "÷",
                         "7", "8", "9", "×", 
                         "4", "5", "6", "-", 
                         "1", "2", "3", "+",
                          "+/-", "0", ".", "="];
//const [count, setCount] = useState(0)
  return (
    <Layout>
      <input 
          type="text"
          className=" p-4 text-right text-xl border-2 border-gray-300 rounded-md mb-4"
        />
      {/*<div className="grid grid-cols-4 gap-4">
       這裡面的子元素會自動變成 3 欄排列 
      <div className='rounded-md border-2'>%</div>
      <div className='rounded-md border-2'>CE</div>
      <div className='rounded-md border-2'>C</div>
      <div className='rounded-md border-2'>X</div>

      <div className='rounded-md border-2'>1/x</div>
      <div className='rounded-md border-2'>x2</div>
      <div className='rounded-md border-2'>2√x</div>
      <div className='rounded-md border-2'>÷</div>

      <div className='rounded-md border-2'>7</div>
      <div className='rounded-md border-2'>8</div>
      <div className='rounded-md border-2'>9</div>
      <div className='rounded-md border-2'>×</div>

      <div className='rounded-md border-2'>4</div>
      <div className='rounded-md border-2'>5</div>
      <div className='rounded-md border-2'>6</div>
      <div className='rounded-md border-2'>-</div>

      <div className='rounded-md border-2'>1</div>
      <div className='rounded-md border-2'>2</div>
      <div className='rounded-md border-2'>3</div>
      <div className='rounded-md border-2'>+</div>

      <div className='rounded-md border-2'>+/-</div>
      <div className='rounded-md border-2'>0</div>
      <div className='rounded-md border-2'>.</div>
      <div className='rounded-md border-2'>=</div>
</div>*/}
    <div className="max-w-sm mx-auto p-4 border-2 border-gray-300 rounded-lg shadow-md">
    <div className="grid grid-cols-4 gap-4">
    {
    signList.map(
      (sign,index) => { 
        return(
          <div key={index} className="rounded-md border-2 flex items-center justify-center bg-gray-200 p-4 text-center cursor-pointer hover:bg-gray-300 transition">
           {sign}
          </div>
          )
        }
      )
      
}
    </div>
  </div>
    </Layout>
  )
}

export default App
