import React from "react";
interface ManagerDetailsProps {
  heading: string;
  title_name: string;
  required: boolean;
}
export default function FPInputDetails({
  heading,
  required,
}: ManagerDetailsProps) {
  return (
    <div
      className="Owner bg-gray-200"
      style={{
        display: "flex",
        flexDirection: "column", 
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
          style={{
            marginTop: "1px",
            fontSize: "10px",
            fontWeight: "bold",
          }}
          className="text-gray-400"
        >
          Mark Food Partner opening hours and closing hours
        </p>
      </div>
      <div
        style={{
          display: "flex", // Use flex to create two columns in the first row
          justifyContent: "space-between", // Space between columns
        }}
      >
        <div>
          <label htmlFor="openingtime" aria-required>
            {"Opens"} at{" "}
            {required ? <span style={{ color: "red" }}> *</span> : ""}
          </label>
          <br />
          <input
            type="time"
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
          <label htmlFor="closingtime" aria-required>
            {"Closes"} at
          </label>
          <br />
          <input
            type="time"
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
        <label htmlFor="weekopen" aria-required>
        {"Opens"} at{" "}
        </label>
        <br />
        <input
          type="time"
          name="weekopening"
          style={{
            borderRadius: "4px",
            border: "1px solid black",
            height: "25px",
            width: "200px",
          }}
        />
      </div>
      <div>
        <label htmlFor="weekopen" aria-required>
        {"Opens"} at{" "}
        </label>
        <br />
        <input
          type="time"
          name="weekclosing"
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
