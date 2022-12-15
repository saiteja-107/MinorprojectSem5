import React from 'react'
import {Stack} from "@mui/material"
function Questions(prop) {
    prop=prop.question;
console.log(prop);
  return (
    <Stack spacing={2} direction="column">
        <h4>Question No:{prop.qno}</h4>
        <h6>{prop.question}</h6>
        <h4>Options </h4>
        <h6>A: {prop.option1}</h6>
        <h6>B: {prop.option2}</h6>
        <h6>C: {prop.option3}</h6>
        <h6>D: {prop.option4}</h6>
        <h4>Answer  </h4>
        <h6>{prop.answer}</h6>

    </Stack>
  )
}

export default Questions