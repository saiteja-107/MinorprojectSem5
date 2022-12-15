import React from 'react'
import { useState } from 'react'
import "./Sliptest.css"
import {TextField,Typography,Card,Button,FormControl,FilledInput,Select,MenuItem} from "@mui/material"
import { flexbox, width } from '@mui/system';
function Sliptest(props) {
    const[questionno,setquestionno]=useState(1);
    const [question,setquestion]=useState({
        qno:1,
        question:"",
        option1:"",
        option2:"",
        option3:"",
        option4:"",
        answer:"Answer ",
    })
    const Handlesubmit=(event)=>{
        event.preventDefault()
        setquestionno(questionno+1 )
        props.onSend(question)
        setquestion({
        qno:questionno,
        question:"",
        option1:"",
        option2:"",
        option3:"",
        option4:"",
        answer:"Answer ",
        })
    }
  return (
    <div>
        <Card elevation={10}
        sx={{
            display:"flexbox",
            height:"auto",
            width:"100%",
        }}>
        <form onSubmit={Handlesubmit}>
            <h3><bold>Question : {questionno} </bold> </h3>
            <TextField label="Question " variant="standard" value={question.question} onChange={(event)=>{
                setquestion((prev)=>{
                    return {...prev ,question:event.target.value}
                })
            }} sx={{
                display:'block',
                margin:"0  0 20px",
                width:"auto",
            }}/>
            <TextField label="Option 1 " variant="standard" value={question.option1} onChange={(event)=>{
                setquestion((prev)=>{
                    return {...prev ,option1:event.target.value}
                })
            }}
            sx={{
                display:'block',
                margin:"0  0 20px"
            }}/>

            <TextField sx={{
                display:'block',
                margin:"0  0 20px"
            }} label="Option 2 " variant="standard" value={question.option2} onChange={(event)=>{
                setquestion((prev)=>{
                    return {...prev ,option2:event.target.value}
                })
            }}
            />
            <TextField label="Option 3 " variant="standard" value={question.option3} onChange={(event)=>{
                setquestion((prev)=>{
                    return {...prev ,option3:event.target.value}
                })
            }}
            sx={{
                display:'block',
                margin:"0  0 20px"
            }}/>
            <TextField label="Option 4 " variant="standard" value={question.option4} onChange={(event)=>{
                setquestion((prev)=>{
                    return {...prev ,option4:event.target.value}
                })
            }}
            sx={{
                display:'block',
                margin:"0  0 20px"
            }}/>
            <Typography variant='h6' > Answer </Typography>
      <Select
      sx={{width:"auto"}}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={question.answer}
    label={question.answer}
    onChange={(event)=>{
        setquestion((prev)=>{
            return {...prev ,answer:event.target.value}
        })
    }}>
    <MenuItem value={"A"}>Option 1</MenuItem>
    <MenuItem value={"B"}>Option 2</MenuItem>
    <MenuItem value={"C"}>Option 3</MenuItem>
    <MenuItem value={"D"}>Option 4</MenuItem>


  </Select>



            {/* <TextField label="Answer  " variant="standard" value={question.answer} onChange={(event)=>{
                setquestion((prev)=>{
                    return {...prev ,answer:event.target.value}
                })
            }}/> */}
            <Button variant='contained' sx={{display:"block",width:"auto",margin:"20px"}} type="submit"> Post Question </Button>

        </form>
        </Card>
    </div>
  )
}

export default Sliptest