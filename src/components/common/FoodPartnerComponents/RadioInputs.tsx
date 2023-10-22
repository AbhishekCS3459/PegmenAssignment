import React from "react";

interface RadioProps {
  required: boolean;
  options?: string[];
}

const Data = [
  "not set",
];

export default function RadioInputs(props: RadioProps) {
  const radioInputData = props.options || Data;

 
  return (
    <div className="grid grid-cols-2">
      {radioInputData.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            name="name"
            style={{
              borderRadius: "4px",
              border: "1px solid black",
              marginRight: "3px",
            }}
          />
          <label htmlFor="name" aria-required>
            {option}
            {props.required ? <span style={{ color: "red" }}> *</span> : ""}
          </label>
        </div>
      ))}
    </div>
  );
}
