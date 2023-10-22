import React from "react";

export default function LocationInputs() {
  return (
    <div
      className="second"
      style={{
        display: "flex",
        flexDirection: "column", // Change to column direction
        justifyContent: "start",
        // backgroundColor: "rgba(128, 128, 128, 0.5)", // 0.5 represents the alpha (transparency) value
        border: "1px solid black",
        padding: "5px",
        backgroundColor: "green",
        gap: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            paddingLeft: "8px",
            marginBottom: "5px",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              fontWeight: "bolder",
            }}
          >
            Location{" "}
          </span>
          <br></br>
          This will help us to identify your location.
        </div>
      </div>
      <div
        className="secondColumn"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {/* Second Row (2 columns) */}
        <div
          style={{
            border: "1px black solid",
          }}
        >
          <h2>Location 1</h2>
        </div>
        <div
          style={{
            border: "1px solid black",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(3, auto)",
            gap: "10px",
            padding: "10px",
          }}
        >
          <div>
            <label htmlFor="longitude" aria-required>
              Longitude<span style={{ color: "red" }}> *</span>
            </label>
            <input
              type="text"
              style={{
                width: "100%",
                borderRadius: "4px",
                border: "1px solid black",
                height: "25px",
              }}
              required
            />
          </div>

          <div>
            <label htmlFor="longitude" aria-required>
              Latitude<span style={{ color: "red" }}> *</span>
            </label>
            <input
              type="text"
              style={{
                width: "100%",
                borderRadius: "4px",
                border: "1px solid black",
                height: "25px",
              }}
              required
            />
          </div>

          <div>
            <label htmlFor="State" aria-required>
              State<span style={{ color: "red" }}> *</span>
            </label>
            <input
              type="text"
              style={{
                width: "100%",
                borderRadius: "4px",
                border: "1px solid black",
                height: "25px",
              }}
              required
            />
          </div>

          <div>
            <label htmlFor="City" aria-required>
              City<span style={{ color: "red" }}> *</span>
            </label>
            <input
              type="text"
              style={{
                width: "100%",
                borderRadius: "4px",
                border: "1px solid black",
                height: "25px",
              }}
              required
            />
          </div>

          <div>
            <label htmlFor="Pincode" aria-required>
              Pincode<span style={{ color: "red" }}> *</span>
            </label>
            <input
              type="text"
              style={{
                width: "100%",
                borderRadius: "4px",
                border: "1px solid black",
                height: "25px",
              }}
              required
            />
          </div>

          <div>
            <label htmlFor="Country" aria-required>
              Country<span style={{ color: "red" }}> *</span>
            </label>
            <input
              type="text"
              style={{
                width: "100%",
                borderRadius: "4px",
                border: "1px solid black",
                height: "25px",
              }}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}
