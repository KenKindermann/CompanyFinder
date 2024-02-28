import { Button, OptionsButton } from "../controls/Buttons.jsx";
import filterIcon from "/icons/filter.svg";
import sortIcon from "/icons/sort.svg";
import orderIcon from "/icons/order.svg";
import { apiFieldTitles } from "../../utils/apiFieldTitles.js";

const ControlPanel = () => {
  return (
    <section className="custom-section flex flex-col gap-4 sm:flex-row sm:justify-between">
      <div className="flex gap-2 mb-2">
        <Button title="Filter" icon={filterIcon} />
        <OptionsButton title="Sort" icon={sortIcon} options={apiFieldTitles} />
        <OptionsButton title="Order" icon={orderIcon} options={{ ascending: "Asc", descending: "Desc" }} />
      </div>
      <div className="flex items-center gap-2">
        <p>Results per page</p>
        <OptionsButton options={{ 10: 10, 25: 25, 50: 50 }} />
      </div>
    </section>
  );
};

export default ControlPanel;
