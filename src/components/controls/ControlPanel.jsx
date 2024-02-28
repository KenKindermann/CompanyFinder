import { Button, OptionsButton } from "../controls/Buttons.jsx";
import filterIcon from "/public/icons/filter.svg";
import sortIcon from "/icons/sort.svg";
import orderIcon from "/icons/order.svg";
import { apiFieldTitles } from "../../utils/apiFieldTitles.js";

const ControlPanel = () => {
  return (
    <section className="custom-section flex gap-4">
      <Button title="Filter" icon={filterIcon} />
      <OptionsButton title="Sort" icon={sortIcon} options={apiFieldTitles} />
      <OptionsButton title="Order" icon={orderIcon} options={{ ascending: "Ascending", descending: "Descending" }} />
    </section>
  );
};

export default ControlPanel;
