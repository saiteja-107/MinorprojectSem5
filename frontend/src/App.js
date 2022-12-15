import './App.css';
import axios from "axios"
import React,{useState} from 'react';
import Sliptest from './components/Sliptest';
import Questions from './components/Questions';
import {TextField,Paper,Button,Stack} from '@mui/material'
function App() {
  const [time,setTime]=useState("");
const [questions,setQuestions]=useState([
])
function Handlesubmit(){
const arr=[{time:time},{...questions}]

axios.post("http://localhost:5001/upload",{
      arr
      },{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })

}
function Handlesend(val){
  console.log(val)
  setQuestions( prev=>{return [...prev,val]})
  console.log(questions);
}
  return (
   <>


  <Paper sx={{
            padding:"10px",
            width:"50%",
            position:"relative",
            left:"25%",
            margin:"20px",
            marginLeft:"0px"
        }} elevation={10} >
          <Stack direction={"row"} spacing={2}>
   <TextField
variant="outlined"
placeholder= "Set Exam Time  " multiline rows= {1} 
rowsMax={1}
label="Set Time"
onChange={(event)=>{ setTime(event.target.value)}}
/>
<Button variant='contained' sx={{display:"block",width:"auto",margin:"20px"}} type="submit" onClick={Handlesubmit}> Submit Test </Button>
</Stack>
</Paper>


   <Sliptest  onSend={Handlesend}/>
   {questions.length===0? <h1>No Questions Added Yet </h1>: <h2> Questions </h2> && questions.map((question)=>{
    return (<Questions  qn={question} />)
   })}
   
   </>
  );
}
export default App;
