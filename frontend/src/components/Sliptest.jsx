import React from 'react'
import { useState } from 'react'
import "./Sliptest.css"
import {TextField,Typography,Button,Select,MenuItem, Paper,Stack} from "@mui/material"
function Sliptest(props) {
    const[questionno,setquestionno]=useState(1);
    const [question,setquestion]=useState({
        questionno:1,
        question:"",
        option1:"",
        option2:"",
        option3:"",
        option4:"",
        answer:"Answer ",
    })

    
    const Handlesubmit=(event)=>{
        event.preventDefault()
        const val=questionno+1
        setquestionno(val)
        props.onSend(question)
        setquestion({
        questionno:val,
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
        <Paper elevation={10}
        sx={{
            padding:"10px",
            width:"50%",
            position:"relative",
            left:"25%"
        }}>
        <form onSubmit={Handlesubmit}>
        <Stack spacing={2} direction={"column"}>

            <h3 sx={{margin:"10px 0 0 0"}}><bold>Question : {questionno} </bold> </h3>
            <TextField label="Question " variant="outlined"
 value={question.question} onChange={(event)=>{
                setquestion((prev)=>{
                    return {...prev ,question:event.target.value}
                })
            }} 
            multiline rows= {2} 
rowsMax={5} />
            <TextField label="Option 1 " variant="outlined" value={question.option1} onChange={(event)=>{
                setquestion((prev)=>{
                    return {...prev ,option1:event.target.value}
                })
            }}
            multiline rows= {1} 
            rowsMax={3}
            />

            <TextField  label="Option 2 " variant="outlined" value={question.option2} onChange={(event)=>{
                setquestion((prev)=>{
                    return {...prev ,option2:event.target.value}
                })
            }}
            multiline rows= {1} 
            rowsMax={3}
            />
            <TextField label="Option 3 " variant="outlined" value={question.option3} onChange={(event)=>{
                setquestion((prev)=>{
                    return {...prev ,option3:event.target.value}
                })
            }}
            multiline rows= {1} 
            rowsMax={3}
            />
            <TextField label="Option 4 " variant="outlined" value={question.option4} onChange={(event)=>{
                setquestion((prev)=>{
                    return {...prev ,option4:event.target.value}
                })
            }}
            multiline rows= {1} 
            rowsMax={3}
            />
            <Typography variant='h6' > Answer </Typography>
      <Select
      sx={{width:"auto"}}
    value={question.answer}
    label="Answer"
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
            </Stack>
        </form>
        </Paper>
    </div>
  )
}

export default Sliptest