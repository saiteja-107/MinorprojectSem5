import './App.css';
import React,{useState} from 'react';
import Sliptest from './components/Sliptest';
import Questions from './components/Questions';
function App() {
const [questions,setQuestions]=useState([
  {
    questionno:" ",
    question:"",
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    answer:"",
  }
])
function Handlesend(val){
  setQuestions(questions.push(val))
  console.log(questions);
}
  return (
   <>
   <Sliptest  onSend={Handlesend}/>
   {questions.length==1 ? <h1>No Questions Added Yet </h1>: questions.map((question)=>{
    return (<Questions  qn={question} />)
   })}
   
   </>
  );
}

export default App;
