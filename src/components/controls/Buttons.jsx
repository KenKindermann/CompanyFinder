// Context
import { ControlContext } from "../../provider/ControlContext";

// Hooks
import { useContext } from "react";

// Button
export const Button = ({ title, icon, onClick }) => {
  return (
    <button onClick={onClick} className="custom-button">
      <img src={icon} alt={`${title} button`} width="25px" />
      {title}
    </button>
  );
};

// Options button
export const OptionsButton = ({ title, icon, options, controlKey }) => {
  const { setControl } = useContext(ControlContext);
  const handleChange = (e) => {
    let value = e.target.value;
    value = value === "asc" ? false : value === "desc" ? true : value;
    setControl((prevControl) => ({ ...prevControl, [controlKey]: value }));
  };

  return (
    <div className="custom-button">
      <img src={icon} alt={`${title} button`} className={icon ? "block" : "hidden"} width="25px" />
      <select className="bg-transparent" onChange={(e) => handleChange(e)}>
        {options?.map((option, index) => (
          <option key={index} value={option.apiName}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
