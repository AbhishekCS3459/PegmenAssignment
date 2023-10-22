import React from "react";
import { useNavigate } from "react-router-dom";
import FoodPartnerDetails from "../../components/common/FoodPartnerDetails";
import InputDetails from "../../components/common/InputDetails";


type Props = {};

const PartnerInfo = (props: Props) => {
  const navigate = useNavigate();
  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/partnertime");
  };

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="flex justify-center bg-gray-300 flex-col border border-solid border-gray-400 w-[80%] p-[10px]">
        <FoodPartnerDetails />
 {/* LOCATION SERVICE  */}
        <div className="second flex flex-col justify-start bg-gray-200 border-solid border-[1px] border-gray-400 p-[5px] gap-[5px]">
          <div className="flex justify-start bg-gray-200">
            <div className="p-l-[8px] mb-[5px]">
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                }}
              >
                Location{" "}
              </span>
              <p
                style={{
                  marginTop: "1px",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                This will help us to identify your location.
              </p>
            </div>
          </div>
          <div className="secondColumn flex justify-between">
            {/* Second Row (2 columns) */}
            <div
              style={{
                border: "1px black solid",
                width: "50%",
                overflow: "hidden",
              }}
            >
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d472461.45802474476!2d87.89196685625001!3d22.311863052588613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1697554340555!5m2!1sen!2sin"
                width="400"
                height="300"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="border border-black grid grid-cols-2 grid-rows-3 gap-10 p-10">
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

        <InputDetails
          heading={"Food partner owner details (optional)"}
          title_name={"Owner"}
          required={false}
        />
        <InputDetails
          heading={"Manager details"}
          title_name={"Manager"}
          required={true}
        />

        <div
          className="flex justify-between  px-4 mb-4 "
          style={{
            width: "100%",
          }}
        >
          <button
            className="bg-gray-700"
            style={{
              color: "white",
              padding: "10px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
              alignSelf: "flex-end",
            }}
            disabled={true}
            type="submit"
          >
            Prev
          </button>
          <button
            className="bg-red-600"
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "10px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
              alignSelf: "flex-end",
            }}
            onClick={handleNext}
            type="submit"
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
};

export default PartnerInfo;
