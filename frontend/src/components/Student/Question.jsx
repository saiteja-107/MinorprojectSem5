import React,{useState}from 'react'
import {Paper,Stack,Typography,FormControlLabel,FormLabel,Radio,RadioGroup} from "@mui/material"

function Question(prop) {
    var pro1=prop,
    prop=prop.ques
    var [option,setOption]=useState({
        questiono:prop.questionno,
        response:"A",
        answer:prop.answer,
    })
  return (
<>
<Paper elevation={10}
sx={{margin:"10px",padding:"20px"}}>
<Typography variant='h6' > <bold>Question No</bold> : {prop.questionno}</Typography>
<br />

<Typography variant='p'>{prop.question} </Typography><br /><br />

  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    value={option.response}
    onChange={(event)=>{
             const val={...option, response:event.target.value}
                setOption(val)
                pro1.onResponse(val)
    }}
    name="radio-buttons-group">
    
    <FormControlLabel value="A" control={<Radio />} label={prop.option1} />
    <FormControlLabel value="B" control={<Radio />} label={prop.option2} />
    <FormControlLabel value="C" control={<Radio />} label={prop.option3} />
    <FormControlLabel value="D" control={<Radio />} label={prop.option4} />
  </RadioGroup>
</Paper>
</>
  )
}

export default Question