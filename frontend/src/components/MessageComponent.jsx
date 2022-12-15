import React from 'react';
import { useState } from 'react';
import {Stack,Paper} from '@mui/material'
import { TextField ,TextareaAutosize,Select,MenuItem,Button} from "@mui/material"

function MessageComponent() {
    const [msg,setMsg]=useState({
        user:"xyz",
        section:"Select Section",
        subject:"",
        description:"",
    })
  return (
    <Paper elevation={10}
    sx={{width:"50%",padding:"2%",position:'relative',
    left:"18%",
    bottom:"30%"

    }}>
        <form action="">
   
        <Stack direction={"column"} spacing={5}>
        <Select
    value={msg.section}
    label="Select Section"
    onChange={event=>{setMsg((prev)=> { return {...prev,section:event.target.value}})}}>
    <MenuItem value={"it2"}>It-2</MenuItem>
    <MenuItem value={"it3"}>It-3</MenuItem>
  </Select>
        <TextField
variant="outlined"
placeholder= "Subject  " multiline rows= {2} 
rowsMax={5} 

onChange={(event)=>{ setMsg(prev=>{return {...prev,subject:event.target.value}})}}
value={msg.subject}
/>

<TextareaAutosize
minRows={10}
  maxRows={100}
  aria-label="maximum height"
  placeholder="Message "
  onChange={(event)=>{ setMsg(prev=>{return {...prev,description:event.target.value}})}}
  value={msg.description}
/>

 <Button variant="contained" type='submit'>Send </Button>
      </Stack>
        </form>

    </Paper>
  )
}

export default MessageComponent