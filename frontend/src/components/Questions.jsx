import React from 'react'
import {Stack,Paper} from "@mui/material"
function Questions(prop) {
    prop=prop.qn;
console.log(prop);
  return (
    <Paper sx={{padding:"30px",
     margin:"30px"
     }} elevation={10}>
    <Stack spacing={2} direction="column">
        <h3>Question No:{prop.questionno}</h3>
        <h4>{prop.question}</h4>
        <h3>Options </h3>
        <h4>A: {prop.option1}</h4>
        <h4>B: {prop.option2}</h4>
        <h4>C: {prop.option3}</h4>
        <h4>D: {prop.option4}</h4>
        <h3>Answer  </h3>
        <h4>{prop.answer}</h4>
    </Stack>
    </Paper>
  )
}

export default Questions