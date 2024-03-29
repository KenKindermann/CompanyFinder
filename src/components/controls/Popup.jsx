// Icons
import filterIcon from "/icons/filter.svg";
import closeIcon from "/icons/close.svg";

// Hooks
import { useContext } from "react";

// Context
import { ControlContext } from "../../provider/ControlContext";

// Components
import { Button } from "./Buttons";

const Popup = ({ title, inputs, setShowPopup, filter }) => {
  const { control, setControl } = useContext(ControlContext);
  // FormData to object and hide popup by submit
  const handleSubmit = (e) => {
    e.preventDefault();
    formDataToObject(e.target);
    setShowPopup(false);
  };

  // Format formData to object and set object in control state
  const formDataToObject = (e) => {
    const formData = new FormData(e);
    const dataObject = {};

    for (let [name, value] of formData) {
      if (value.trim() !== "") {
        dataObject[`search_${name}`] = value;
      }
    }
    setControl({ ...control, ...dataObject });
  };

  return (
    <>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-1/2 min-h-96 bg-white z-20 rounded-lg shadow-lg">
        <div className="bg-custom-blue p-5 text-white rounded-tl-lg rounded-tr-lg">{title}</div>

        {/* Form */}
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="grid grid-cols-2 gap-4 p-4">
            {inputs.map((input) => (
              <input
                key={input.label}
                name={input.apiName}
                className="p-2 rounded-lg border outline-custom-blue"
                placeholder={input.label}
                defaultValue={(filter && filter[`search_${input.apiName}`]) || ""}
              />
            ))}
          </div>

          {/* Submit button */}
          <div className="flex justify-center mb-4">
            <Button title={"Filter"} icon={filterIcon} />
          </div>
        </form>

        {/* Close button*/}
        <img
          src={closeIcon}
          width="25px"
          alt="close button"
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => setShowPopup(false)}
        />
      </div>

      {/* Dark overlay*/}
      <div
        onClick={() => setShowPopup(false)}
        className={"absolute w-full h-screen bg-slate-900 opacity-70 inset-0 z-10 animate-fadeIn"}
      ></div>
    </>
  );
};

export default Popup;
