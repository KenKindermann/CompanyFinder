import { Button } from "../controls/Buttons.jsx";
import filterIcon from "/public/icons/filter.svg";

const ControlPanel = () => {
  return (
    <section className="custom-section">
      <Button title={"Filter"} icon={filterIcon} />
    </section>
  );
};

export default ControlPanel;
