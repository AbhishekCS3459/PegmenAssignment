import React from "react";
import { useNavigate } from "react-router-dom";
import RadioInputComponent from "../../components/common/FoodPartnerComponents/RadioInputComponent";
import FPInputDetails from "../../components/common/FoodPartnerComponents/FPInputDetails";

type Props = {};

const FoodPartner = (props: Props) => {
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
        <RadioInputComponent
          heading={"Establishment type"}
          title_name="title"
          required={false}
        />

        <FPInputDetails
          heading={"Food partner operational hours"}
          title_name={"Owner"}
          required={false}
        />

        {/* Next previous buttons */}

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

export default FoodPartner;
