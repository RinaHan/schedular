import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  > label {
    /* color: #715b80; */
    /* font-weight: bold; */
  }
  > select {
    height: 23px;
    border: none;
    border-radius: 5px;
    color: #dad;
    padding-left: 5px;
    width: 100%;
    font-size: 13px;
  }
`;

const Selected = styled.div`
font-weight:normal;
background-color:rgb(226, 188, 226);
padding:2px 5px;
display:inline-flex;
margin:5px 5px 0 0;
border-radius:5px;
font-size:12px;
align-items: center;
> button{
  margin-left:3px;
  height:18px;
  width:18px;
  justify-content:center;
  align-items:center;
  display:flex;
}
`;

const DateComponent = () => {
  const [options, setOptions] = useState([
    { label: "Mon", value: "Mon" },
    { label: "Tue", value: "Tue" },
    { label: "Wed", value: "Wed" },
    { label: "Thu", value: "Thu" },
    { label: "Fri", value: "Fri" },
    { label: "Sat", value: "Sat" },
    { label: "Sun", value: "Sun" },
  ]);
  const [selected, setSelected] = useState([])

  const filterDate = () => {
    var arr = [...options]
    for(var i=0; i < arr.length; i++){
      if(selected.find((e)=>e===arr[i].label)){
        arr.splice(arr.indexOf(options[i]),1)
        //질문
        // arr.splice(arr.indexOf(arr[i]),1)
        setOptions(arr)
      }
    }
  }
  const dateBtnClick = (i) => {
    var arr = [...selected]
    arr.splice([i],1)
    setSelected(arr)
    var arr2 = [...options]
    arr2.push({label: selected[i], value:selected[i]})
    //질문
    // arr2.push({label: arr[i], value:arr[i]})
    setOptions(arr2)
  }
  
  useEffect(()=>{
    filterDate()
  },[selected])

  console.log('selected:', selected, 'options:', options)
  return (
    <Container>
      <label for="dateselec">Date</label>
      <select id="dateselec"
      onChange={(e)=>{
        // if(selected.indexOf(e.target.value)=== -1){
          var arr = [...selected]
          arr.push(e.target.value)
          setSelected(arr)  
        // } else alert("already selected")
      }}
      >
        {options.map((o, i) => {
          return (
            <option key={i} value={o.value}
            >
              {o.label}
            </option>
          );
        })}
      </select>
      <div>
      {selected.map((o, i) => {
          return (
            <Selected key={i}
            >
              {o}<button
              onClick={()=>{
                dateBtnClick(i)
              }}
              >x</button>
            </Selected>
          );
        })}
      </div>
    </Container>
  );
};

export default DateComponent;
