import RadioInputs from "./RadioInputs";
interface ManagerDetailsProps {
  heading: string;
  title_name: string;
  required: boolean;
}

export default function RadioInputComponent({ heading, required }: ManagerDetailsProps) {
  // Data for Establishment
  const EstablishmentData = [
    "Direct Food Orders",
    "Subscription order (Lunch & Dinner)",
    "Both direct Food Orders & Subscription Orders",
  ];
  const CusinsData = [
    "Multicusine",
    "Pissas",
    "Mughlai",
    "Japanese",
    "Cutlets",
    "Sweets",
    "Multicusine/Speciality",
    "Momo",
    "Tibetian",
    "Rolls",
    "Puris",
    "Snacks",
  ];
  return (
    <div className="form-group border border-black ">
      <div
        className="Owner bg-gray-200  "
        style={{
          display: "flex",
          flexDirection: "column", // Change flex direction to column
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
            {"Establishment type"}{" "}
          </span>

          <p
            style={{
              marginTop: "1px",
              fontSize: "10px",
              fontWeight: "bold",
            }}
          >
            Select most relevant category for your Food Partner {heading}{" "}
          </p>
        </div>

        <RadioInputs required={false} options={EstablishmentData} />
      </div>

      {/* // cusins Part */}
      <div
        className="Owner bg-gray-200  "
        style={{
          display: "flex",
          flexDirection: "column", // Change flex direction to column
          padding: "8px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <div className="">
          <span
            style={{
              fontSize: "20px",
              fontWeight: "bolder",
            }}
          >
            {"Type of cuisins"}{" "}
          </span>

          <p
            style={{
              marginTop: "1px",
              fontSize: "10px",
              fontWeight: "bold",
            }}
          >
            Select most relevant category for your Food Partner {heading}{" "}
          </p>
        </div>

        <div
         className=""
        >
          <RadioInputs required={false} options={CusinsData} />
        </div>
      </div>
    </div>
  );
}
