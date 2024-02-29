import { Button } from "./Buttons";
import filterIcon from "/icons/filter.svg";
import closeIcon from "/icons/close.svg";

const Popup = ({ title, inputs }) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-1/2 min-h-96 bg-white z-10 rounded-lg shadow-lg">
      <div className="bg-custom-blue p-5 text-white rounded-tl-lg rounded-tr-lg">{title}</div>
      <div className="grid grid-cols-2 gap-4 p-4">
        {inputs.map((input) => (
          <input key={input.label} className="p-2 rounded-lg border outline-custom-blue" placeholder={input.label} />
        ))}
      </div>
      <div className="flex justify-center mb-4">
        <Button title={"Add Filter"} icon={filterIcon} />
      </div>
      <img src={closeIcon} width="25px" alt="close button" className="absolute top-5 right-5" />
    </div>
  );
};

export default Popup;
