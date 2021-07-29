import React, { useState } from "react";
import '../../App.scss'

const Inputs = ({label, type, placeholder}) => {
  return (
    <div className="InputCont">
      <label for="input">{label}</label>
      <input id="input" type={type} placeholder={placeholder} />
    </div>
  );
};

export default Inputs;
