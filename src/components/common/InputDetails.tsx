import React from "react";
interface ManagerDetailsProps {
  heading: string;
  title_name: string;
  required: boolean;
}
export default function InputDetails({
  heading,
  title_name,
  required,
}: ManagerDetailsProps) {
  return (
    <div
      className="Owner bg-gray-200"
      style={{
        display: "flex",
        flexDirection: "column", // Change flex direction to column
        border: "1px solid black",
        padding: "8px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <div>
        <span
          style={{
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        >
          {heading} {required ? <span style={{ color: "red" }}> *</span> : ""}
        </span>

        <p
          className="text-gray-400"
          style={{
            marginTop: "1px",
            fontSize: "10px",
            fontWeight: "bold",
          }}
        >
          These will be used to share revenue related communications
        </p>
      </div>
      <div
        style={{
          display: "flex", // Use flex to create two columns in the first row
          justifyContent: "space-between", // Space between columns
        }}
      >
        <div>
          <label htmlFor="name" aria-required>
            {title_name} Name{" "}
            {required ? <span style={{ color: "red" }}> *</span> : ""}
          </label>
          <br />
          <input
            type="text"
            name="name"
            style={{
              borderRadius: "4px",
              border: "1px solid black",
              height: "25px",
              width: "200px",
            }}
          />
        </div>
        <div>
          <label htmlFor="number" aria-required>
            {title_name} Contact Number
          </label>
          <br />
          <input
            type="number"
            name="number"
            style={{
              borderRadius: "4px",
              border: "1px solid black",
              height: "25px",
              width: "200px",
            }}
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" aria-required>
          {title_name} Email
        </label>
        <br />
        <input
          type="email"
          name="email"
          style={{
            borderRadius: "4px",
            border: "1px solid black",
            height: "25px",
            width: "200px",
          }}
        />
      </div>
    </div>
  );
}
