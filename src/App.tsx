//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg''crypto'
import { useState } from 'react';
import './App.css'
import Layout from './components/Layout'
//import { sign } from 'crypto';

function App() {
  const [input1, setInput1] = useState(""); 
  const [op, setOp] = useState(""); 
  const [eq, setEq] = useState("");
  const [input2, setInput2] = useState(""); 
  const [ans, setAns] = useState(""); 

const signList = ["%", "CE", "C", "X", 
                        "1/x", "x2", "2√x", "÷",
                         "7", "8", "9", "×", 
                         "4", "5", "6", "-", 
                         "1", "2", "3", "+",
                          "+/-", "0", ".", "="];


const isNum = (sign: string)=> {
  return !isNaN(parseFloat(sign))
};
 
const handleCalc = (sign:string) =>{
  if(isNum(sign)) {
    if(op){
      setInput2(input2 + sign);
    }else{
    setInput1(input1 + sign);
    }
    return;
  }

  if("+" === sign){
    setOp(sign)
    return;
  }

  if("=" === sign){
    if("+" === op){
      setAns(parseFloat(input1) + parseFloat(input2));
      setEq(true);
    }
  }
};
const getDisplayText=()=>{
  if(eq){
    return ans+"";
  }

  if(op){
    return input2;
  }
  return input1;
};

  return (
    <Layout>
      <input 
          type="text" value={getDisplayText()}
          className=" p-4 text-right text-xl border-2 border-gray-300 rounded-md mb-4"
        />
     
    <div className="max-w-sm mx-auto p-4 border-2 border-gray-300 rounded-lg shadow-md">
    <div className="grid grid-cols-4 gap-4">
    {
    signList.map(
      (sign,index) => { 
        return(
          <button key={index} className="rounded-md border-2 flex items-center justify-center bg-gray-200 p-4 text-center cursor-pointer hover:bg-gray-300 transition" onClick={()=>{ handleCalc(sign); }}>
           {sign}
          </button>
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
