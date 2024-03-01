// Libraries
import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="w-full h-96 flex items-center justify-center ">
      <ClipLoader color={"custom-blue"} size={150} aria-label="Loading Spinner" data-testid="loader" />
    </div>
  );
};

export default Spinner;
