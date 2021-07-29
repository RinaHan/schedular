import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  > label {
    /* color: #715b80; */
    /* font-weight: bold; */
  }
  > select {
    height: 25px;
    border: none;
    border-radius: 5px;
    color: #dad;
    padding-left: 5px;
    width: 100%;
  }
`;

const Selected = styled.div`
font-weight:normal;
background-color:#dad;
padding:2px 5px;
display:inline-flex;
margin:5px 5px 0 0;
border-radius:5px;
font-size:13px;
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

const options = [
  { label: "Mon", value: "Mon" },
  { label: "Tue", value: "Tue" },
  { label: "Wed", value: "Wed" },
  { label: "Thu", value: "Thu" },
  { label: "Fri", value: "Fri" },
  { label: "Sat", value: "Sat" },
  { label: "Sun", value: "Sun" },
];

const DayComponent = () => {
  const [selected, setSelected] = useState([])

  console.log(selected)
  return (
    <Container>
      <label for="dayselec">Date</label>
      <select id="dayselec"
      onChange={(e)=>{
        var arr = [...selected]
        arr.push(e.target.value)
        setSelected(arr)
      }}
      >
        {options.map((o, i) => {
          return (
            <option key={i} value={o.value}
            // onClick={setSelected(o)}
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
              {o}<button>x</button>
            </Selected>
          );
        })}
      </div>
    </Container>
  );
};

export default DayComponent;
