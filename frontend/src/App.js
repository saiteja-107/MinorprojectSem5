import './App.css';
import React,{useState} from 'react';
import Sliptest from './components/Sliptest';
import Questions from './components/Questions';
function App() {
const [questions,setQuestions]=useState([
])
function Handlesend(val){
  console.log(val)
  setQuestions( prev=>{return [...prev,val]})
  console.log(questions);
}
  return (
   <>
   <Sliptest  onSend={Handlesend}/>
   {questions.length===0? <h1>No Questions Added Yet </h1>: <h2> Questions </h2> && questions.map((question)=>{
    return (<Questions  qn={question} />)
   })}
   
   </>
  );
}

export default App;
