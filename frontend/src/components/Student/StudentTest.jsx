import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button ,Alert} from "@mui/material";
import Question from "./Question";
function StudentTest() {
  const [arr, setArr] = useState([]);
  const [response, setResponse] = useState([]);
  const [marks,setMarks]=useState(0);
  function Display(valu){
    window.alert(`Your test score ${valu}`)
    

  }
  useEffect(() => {
    axios
      .get("http://localhost:5001/testquestion")
      .then(function (response) {
        setArr(response.data[0].questions);
      })
      .catch(function (error) {});
  }, []);
  console.log(arr);
  return (
    <div>
      <Button
        variant="contained"
        sx={{ display: "block", width: "auto", margin: "20px" }}
        type="submit"
        onClick={() => {
            let result=0

            response.forEach((ele)=>
            {
                console.log(ele)
                if(ele.response==ele.answer){
                //     const val=marks+1
                //    setMarks(val)
                result++
                }   
            }
            
            )
            // setMarks(result)
            Display(result)
        //   axios.post(
        //     "http://localhost:5001/Testcompleted",
        //     {
        //       response,
        //     },
        //     {
        //       headers: {
        //         "Content-Type": "application/x-www-form-urlencoded",
        //       },
        //     }
        //   );


        }}
      >

        Finish Test
      </Button>

      {arr.map((question) => {
        return (
          <Question
            ques={question}
            onResponse={(event) => {
                console.log(event);
              setResponse([...response, event]);
            }}
          />
        );
      })}
    </div>
  );
}

export default StudentTest;
