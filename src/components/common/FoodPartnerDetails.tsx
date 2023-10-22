import React from "react";

export default function FoodPartnerDetails() {
  return (
    <div
      className="first bg-gray-200"
      style={{
        display: "flex",
        flexDirection: "column", // Change flex direction to column
        border: "1px solid black",
        padding: "8px",
      }}
    >
      <div>
        <span
          style={{
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        >
          Food Partner Details
        </span>
      </div>
      <div
        style={{
          display: "flex", // Use flex to create two columns in the first row
          justifyContent: "space-between", // Space between columns
        }}
      >
        <div>
          <label htmlFor="name" aria-required>
            Food partner name<span style={{ color: "red" }}> *</span>
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
            Food partner Contact Number
            <span style={{ color: "red" }}> *</span>
          </label>
          <br />
          <input
            type="number"
            name="number"
            style={{
              borderRadius: "4px",
              border: "1px solid black",
              height: "25px",
            }}
          />
        </div>
      </div>
      <div>
        <label htmlFor="address" aria-required>
          Food partner Address<span style={{ color: "red" }}> *</span>
        </label>
        <br />
        <textarea
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid black",
          }}
        />
      </div>
    </div>
  );
}
