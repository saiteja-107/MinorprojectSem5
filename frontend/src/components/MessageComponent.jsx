import React from 'react';
import { useState } from 'react';
import {Stack,Paper,Snackbar,Alert} from '@mui/material'
import axios from "axios"
import { TextField ,TextareaAutosize,Select,MenuItem,Button} from "@mui/material"
function MessageComponent() {
  const [open,seOpen]=useState(false)

    const [msg,setMsg]=useState({
        user:"xyz",
        section:"Select Section",
        subject:"",
        description:""})
    function upload(props){
      props.preventDefault();
      seOpen(true)
        axios.post("http://localhost:5001/message",{
          msg
        },{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(res=>{console.log(res)
          ;}).catch(err=>{console.log(err
          );})

      setMsg({ user:"xyz",
      section:"Select Section",
      subject:"",
      description:"",})
    }
  return (
    <Paper elevation={10}
    sx={{width:"50%",padding:"2%",position:'relative',
    left:"18%",
    bottom:"30%"

    }}>
        <form action="post" onSubmit={upload}>
        <Stack direction={"column"} spacing={5}>
        <Select
    value={msg.section}
    label="SelectSection"
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
 <Snackbar
message='Form submitted successfully!' autoHideDuration={4000}
open={open} onClose={()=>{seOpen(false)}}
anchororigin={{
vertical: 'top', horizontal: 'right'}} >
<Alert onClose={()=>seOpen(false)} severity="success" sx={{ width: '100%' }}>
    This is a success message!
  </Alert>
  </Snackbar>
      </Stack>
        </form>
    </Paper>
  )
}
export default MessageComponent